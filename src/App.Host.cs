﻿using Bravo.Infrastructure.Helpers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.EventLog;
using Sqlbi.Bravo.Infrastructure;
using System;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;

namespace Sqlbi.Bravo
{
    internal partial class App
    {
        private IHost CreateHost()
        {
            var hostBuilder = new HostBuilder();

            hostBuilder.UseContentRoot(Directory.GetCurrentDirectory());

            hostBuilder.ConfigureHostConfiguration((builder) =>
            {
                builder.SetBasePath(Directory.GetCurrentDirectory());
                //builder.AddJsonFile("hostsettings.json", optional: true);
                //builder.AddEnvironmentVariables(prefix: "CUSTOMPREFIX_");
                //builder.AddCommandLine(args);
            });

            hostBuilder.ConfigureAppConfiguration((HostBuilderContext hostingContext, IConfigurationBuilder config) =>
            {
                //var hostingEnvironment = hostingContext.HostingEnvironment;
                //var reloadConfigOnChange = hostingContext.Configuration.GetValue("hostBuilder:reloadConfigOnChange", defaultValue: true);

                //config.AddJsonFile($"appsettings.json", optional: true, reloadConfigOnChange);
                //config.AddJsonFile($"appsettings.{ hostingEnvironment.EnvironmentName }.json", optional: true, reloadConfigOnChange);

                //if (hostingEnvironment.IsDevelopment() && !string.IsNullOrEmpty(hostingEnvironment.ApplicationName))
                //{
                //    var assembly = Assembly.Load(new AssemblyName(hostingEnvironment.ApplicationName));
                //    if (assembly != null)
                //        config.AddUserSecrets(assembly, optional: true);
                //}

                //config.AddEnvironmentVariables();

                //if (args != null)
                //    config.AddCommandLine(args);
            });

            hostBuilder.ConfigureLogging((HostBuilderContext hostingContext, ILoggingBuilder logging) =>
            {
                var isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
                if (isWindows)
                    logging.AddFilter<EventLogLoggerProvider>((LogLevel level) => level >= LogLevel.Warning);

                logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                logging.AddConsole();
                logging.AddDebug();
                logging.AddEventSourceLogger();

                if (isWindows)
                    logging.AddEventLog();

                logging.Configure((LoggerFactoryOptions options) =>
                {
                    options.ActivityTrackingOptions = ActivityTrackingOptions.SpanId | ActivityTrackingOptions.TraceId | ActivityTrackingOptions.ParentId;
                });
            });

            hostBuilder.UseDefaultServiceProvider((HostBuilderContext context, ServiceProviderOptions options) =>
            {
                var validateOnBuild = (options.ValidateScopes = context.HostingEnvironment.IsDevelopment());
                options.ValidateOnBuild = validateOnBuild;
            });

            hostBuilder.ConfigureWebHostDefaults((webBuilder) =>
            {
                //webBuilder.ConfigureLogging(builder =>
                //{
                //    builder.
                //});

                webBuilder.ConfigureKestrel((options) =>
                {
                    // Allow sync IO - required by ImportVpax
                    options.AllowSynchronousIO = true;
                    
                    // TODO: randomise the listening port 
                    //var listenAddress = NetworkHelper.GetLoopbackAddress();
                    //options.Listen(listenAddress, port: 0, (listenOptions) =>
                    options.ListenLocalhost(port: 5000, (listenOptions) =>
                    {
#if DEBUG
                        listenOptions.UseConnectionLogging();
#endif
                        //listenOptions.UseHttps(); // TODO: do we need https ?
                    }); 
                });

                webBuilder.UseStartup<Startup>();
            });

            var host = hostBuilder.Build();
            return host;
        }

        private Uri GetHostUri(IHost host)
        {
            var server = host.Services.GetRequiredService<IServer>();
            var feature = server.Features.Get<IServerAddressesFeature>() ?? throw new BravoException($"ServerFeature not found { nameof(IServerAddressesFeature) }");
            var address = feature.Addresses.Single(); // here a single address is expected so let the exception be raised in case of multiple addresses

            var uri = new Uri(address, UriKind.Absolute);
            return uri;
        }
    }
}
