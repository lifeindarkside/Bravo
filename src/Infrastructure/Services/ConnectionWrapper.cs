﻿namespace Sqlbi.Bravo.Infrastructure.Services
{
    using Microsoft.AnalysisServices.AdomdClient;
    using Sqlbi.Bravo.Infrastructure.Helpers;
    using Sqlbi.Bravo.Infrastructure.Security;
    using Sqlbi.Bravo.Models;
    using System;
    using TOM = Microsoft.AnalysisServices.Tabular;

    internal class TabularConnectionWrapper : IDisposable
    {
        private readonly string _connectionString;

        private TabularConnectionWrapper(string connectionString, TOM.Server server, TOM.Database database)
        {
            _connectionString = connectionString;

            Server = server;
            Database = database;
        }

        public TOM.Server Server { get; private set; }

        public TOM.Database Database { get; private set; }

        public TOM.Model Model => Database.Model;

        public AdomdConnection CreateAdomdConnection(bool open = true)
        {
            var connection = new AdomdConnection(_connectionString.ToUnprotectedString());

            if (open)
            {
                connection.Open();
                connection.ChangeDatabase(Database.Name);
            }

            return connection;
        }

        public void Dispose()
        {
            Database.Dispose();
            Server.Dispose();
        }

        public static TabularConnectionWrapper ConnectTo(PBICloudDataset dataset, string accessToken)
        {
            var (connectionString, databaseName) = dataset.GetConnectionParameters(accessToken);
            var connection = ConnectTo(connectionString, databaseName);

            return connection;
        }

        public static TabularConnectionWrapper ConnectTo(PBIDesktopReport report)
        {
            BravoUnexpectedException.ThrowIfNull(report.ServerName);
            BravoUnexpectedException.ThrowIfNull(report.DatabaseName);

            var connectionString = ConnectionStringHelper.BuildForPBIDesktop(report.ServerName);
            var connection = ConnectTo(connectionString, report.DatabaseName);

            return connection;
        }

        private static TabularConnectionWrapper ConnectTo(string connectionString, string databaseName)
        {
            var server = new TOM.Server();
            server.Connect(connectionString.ToUnprotectedString());

            var database = server.Databases.FindByName(databaseName) ?? throw new BravoException(BravoProblem.TOMDatabaseDatabaseNotFound, databaseName);
            var connection = new TabularConnectionWrapper(connectionString, server, database);

            return connection;
        }
    }

    internal class AdomdConnectionWrapper : IDisposable
    {
        private AdomdConnectionWrapper(AdomdConnection connection)
        {
            Connection = connection;
        }

        public AdomdConnection Connection { get; private set; }

        public AdomdCommand CreateAdomdCommand()
        {
            var command = Connection.CreateCommand();
            return command;
        }

        public AdomdCommand CreateDmvTablesCommand()
        {
            var command = Connection.CreateCommand();
            {
                command.CommandText = "SELECT [DIMENSION_UNIQUE_NAME], [DIMENSION_TYPE], [DIMENSION_CARDINALITY] FROM $SYSTEM.MDSCHEMA_DIMENSIONS WHERE [CATALOG_NAME] = @catalogName AND [DIMENSION_TYPE] <> 2"; // MD_DIMTYPE_MEASURE = 2
                command.Parameters.Add(new AdomdParameter(parameterName: "catalogName", value: Connection.Database));
            }
            return command;
        }

        public AdomdCommand CreateDmvTablesWithColumnsCommand()
        {
            var command = Connection.CreateCommand();
            {
                command.CommandText = "SELECT DISTINCT [DIMENSION_UNIQUE_NAME] FROM $SYSTEM.MDSCHEMA_HIERARCHIES WHERE [CATALOG_NAME] = @catalogName AND [DIMENSION_TYPE] <> 2"; // MD_DIMTYPE_MEASURE = 2
                command.Parameters.Add(new AdomdParameter(parameterName: "catalogName", value: Connection.Database));
            }
            return command;
        }

        public void Dispose()
        {
            Connection.Dispose();
        }

        public static AdomdConnectionWrapper ConnectTo(PBICloudDataset dataset, string accessToken, bool open = true)
        {
            var (connectionString, databaseName) = dataset.GetConnectionParameters(accessToken);
            var connection = ConnectTo(connectionString, databaseName, open);

            return connection;
        }

        public static AdomdConnectionWrapper ConnectTo(PBIDesktopReport report, bool open = true)
        {
            BravoUnexpectedException.ThrowIfNull(report.ServerName);
            BravoUnexpectedException.ThrowIfNull(report.DatabaseName);

            var connectionString = ConnectionStringHelper.BuildForPBIDesktop(report.ServerName);
            var connection = ConnectTo(connectionString, report.DatabaseName, open);

            return connection;
        }

        private static AdomdConnectionWrapper ConnectTo(string connectionString, string databaseName, bool open = true)
        {
            var connection = new AdomdConnection(connectionString.ToUnprotectedString());

            if (open)
            {
                connection.Open();
                connection.ChangeDatabase(databaseName);
            }

            var wrapper = new AdomdConnectionWrapper(connection);
            return wrapper;
        }
    }
}
