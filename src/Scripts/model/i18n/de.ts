/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
 * 
 * German translation by: MarcusWegener
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "de", //DO NOT TRANSLATE
    enName: "German", //DO NOT TRANSLATE
    name: "Deutsch",

    strings: {
        [_.addCtrlTitle]: "Öffnen",
        [_.aggregatedTableName]: "Mehrere Tabellen",
        [_.AnalyzeModel]: "Modell analysieren",
        [_.analyzeModelSummary]: `Ihr Dataset ist <strong>{size:bytes}</strong> groß und enthält <strong>{count}</strong> Spalte{{n}}`,
        [_.analyzeModelSummary2]: `, <span class="text-highlight"><strong>{count}</strong> von denen {{sind|ist}} nicht innerhalb des Modells referenziert.</span>`,
        [_.appName]: "Bravo for Power BI", //DO NOT TRANSLATE
        [_.appUpdateAvailable]: "Neue Version verfügbar: {version}",
        [_.appUpdateChangelog]: "Änderungsprotokoll",
        [_.appUpdateDownload]: "Herunterladen",
        [_.appUpdateViewDetails]: "Details anzeigen",
        [_.appUpToDate]: "Bravo ist auf dem neuesten Stand",
        [_.appVersion]: "Version {version}",
        [_.backupReminder]: "Bevor Sie fortfahren, denken Sie daran, eine Sicherung Ihres Berichts zu erstellen - <b>Einige Änderungen können nicht rückgängig gemacht werden</b>.",
        [_.BestPractices]: "Beste Vorgehensweise",
        [_.canceled]: "Abgebrochen",
        [_.changeStatusAdded]: "A",
        [_.changeStatusAddedTitle]: "Hinzugefügt",
        [_.changeStatusDeleted]: "D",
        [_.changeStatusDeletedTitle]: "Gelöscht",
        [_.changeStatusModified]: "M",
        [_.changeStatusModifiedTitle]: "Geändert",
        [_.clearCtrlTitle]: "Leeren",
        [_.closeCtrlTitle]: "Schließen",
        [_.closeOtherTabs]: "Andere schließen",
        [_.closeTab]: "Schließen",
        [_.collapseAllCtrlTitle]: "Alle reduzieren",
        [_.columnExportedCompleted]: "Diese Tabelle wurde erfolgreich exportiert.",
        [_.columnExportedFailed]: "Diese Tabelle wurde aufgrund eines nicht spezifizierten Fehlers nicht exportiert.",
        [_.columnExportedTruncated]: "Diese Tabelle wurde abgeschnitten, weil die Anzahl der Zeilen die zulässige Höchstzahl überschritten hat.",
        [_.columnMeasureFormatted]: "Dieses Measure ist bereits formatiert.",
        [_.columnMeasureNotFormattedTooltip]: "Dieses Measure ist nicht formatiert.", 
        [_.columnMeasureWithError]: "Dieses Measure enthält Fehler.",
        [_.columnUnreferencedExplanation]: `<span class="text-highlight">Unreferenzierte Spalten</span> können im Allgemeinen aus dem Modell entfernt werden, um die Leistung zu optimieren. Bevor Sie sie entfernen, stellen Sie sicher, dass Sie diese Spalten nicht in Berichten verwenden, was Bravo nicht feststellen kann.`,
        [_.columnUnreferencedTooltip]: "Diese Spalte wird in Ihrem Modell nicht referenziert.",
        [_.confirmTabCloseMessage]: "Es scheint, dass Sie die Änderungen an diesem Dokument nicht gespeichert haben.<br>Sind Sie sicher, dass Sie es schließen wollen?",
        [_.connectBrowse]: "Durchsuchen",
        [_.connectDatasetsTableEndorsementCol]: "Endorsement",
        [_.connectDatasetsTableNameCol]: "Name",
        [_.connectDatasetsTableOwnerCol]: "Besitzer",
        [_.connectDatasetsTableWorkspaceCol]: "Arbeitsbereich",
        [_.connectDialogAttachPBIMenu]: "Datasets in powerbi.com",
        [_.connectDialogConnectPBIMenu]: "Aktive Berichte in Power BI Desktop",
        [_.connectDialogOpenVPXMenu]: "VPAX-Dateien",
        [_.connectDialogTitle]: "Öffnen",
        [_.connectDragFile]: "Ziehen Sie eine VPAX-Datei hierher<br>oder durchsuchen Sie Ihren Computer",
        [_.connectNoReports]: "Keine aktiven Berichte gefunden.<br>Öffnen Sie einen Bericht mit Power BI Desktop und warten Sie, bis er hier erscheint.",
        [_.copiedErrorDetails]: "Kopiert!",
        [_.copy]: "Kopieren",
        [_.copyErrorDetails]: "Fehler kopieren",
        [_.copyFormulaCtrlTitle]: "Formatiertes Measure kopieren",
        [_.copyMessage]: "Meldung kopieren",
        [_.copyright]: "Alle Rechte vorbehalten.",
        [_.createIssue]: "Problem melden",
        [_.cut]: "Ausschneiden",
        [_.dataUsageLink]: "Wie werden Ihre Daten verwendet?",
        [_.dataUsageMessage]: `Um Ihren Code zu formatieren, sendet Bravo die Measures dieses Datasets über eine sichere Verbindung an DAX Formatter, einen von SQLBI verwalteten Service.<p><strong>Der Service speichert Ihre Daten nirgendwo.</strong></p><p>Einige Informationen wie die am häufigsten verwendeten DAX-Funktionen, ein Komplexitätsindex und die durchschnittliche Abfragelänge können zu statistischen Zwecken gespeichert werden.</p>`,
        [_.dataUsageTitle]: "Wie werden Ihre Daten verwendet?",
        [_.DaxFormatter]: "DAX formatieren",
        [_.daxFormatterAgreement]: "Um DAX zu formatieren, sendet Bravo Ihre Measures an den DAX Formatter Service.", 
        [_.daxFormatterAnalyzeConfirm]: "Um eine Analyse durchzuführen, muss Bravo alle Measures an den DAX Formatter Service senden. Sind Sie sicher, dass Sie fortfahren möchten?",
        [_.daxFormatterAutoPreviewOption]: "Automatische Vorschau",
        [_.daxFormatterFormat]: "Auswahl Formatieren",
        [_.daxFormatterFormatDisabled]: "Format (nicht unterstützt)",
        [_.daxFormatterFormattedCode]: "Formatiert (Vorschau)",
        [_.daxFormatterOriginalCode]: "Aktuell",
        [_.daxFormatterPreviewAllButton]: "Vorschau aller Measures",
        [_.daxFormatterPreviewButton]: "Vorschau",
        [_.daxFormatterPreviewDesc]: "Um eine Vorschau zu generieren, muss Bravo dieses Measure an den DAX Formatter Service senden.", 
        [_.daxFormatterSuccessSceneMessage]: "Herzlichen Glückwunsch, <strong>{count} Measure{{s}}</strong> {{wurden|wurde}} erfolgreich formatiert.",
        [_.daxFormatterSummary]: `Ihr Dataset enthält {count} Measure{{s}}: <span class="text-error"><strong>{errors:number}</strong> mit Fehlern</strong></span>, <span class="text-highlight"><strong>{formattable:number}</strong> zu formatieren</span>, <strong>{analyzable:number}</strong> zu analysieren (<span class="link manual-analyze">jetzt analysieren</span>).`,
        [_.daxFormatterSummaryNoAnalysis]: `Ihr Dataset enthält <strong>{count}</strong> Measure{{s}}: <span class="text-error"><strong>{errors:number}</strong> mit Fehlern</strong></span> und <span class="text-highlight"><strong>{formattable:number}</strong> zu formatieren.</span>`,
        [_.defaultTabName]: "Unbenannt",
        [_.dialogCancel]: "Abbrechen",
        [_.dialogOK]: "OK",
        [_.dialogOpen]: "Öffnen",
        [_.docLimited]: "Eingeschränkt",
        [_.docLimitedTooltip]: "Nicht alle Funktionen sind für dieses Dokument verfügbar.",
        [_.doneCtrlTitle]: "Erledigt",
        [_.emailAddress]: "E-Mail Adresse",
        [_.emailAddressPlaceholder]: "Geben Sie Ihre E-Mail Adresse ein",
        [_.error]: "Fehler",
        [_.errorAborted]: "Vorgang abgebrochen.",
        [_.errorAnalysisServicesConnectionFailed]: "Es ist ein Verbindungsproblem zwischen dem Server und Bravo aufgetreten.",
        [_.errorCheckForUpdates]: "Es kann nicht nach Updates gesucht werden - der Remote-Server ist nicht erreichbar.",
        [_.errorConnectionUnsupported]: "Die Verbindung zur angeforderten Ressource wird nicht unterstützt.", 
        [_.errorDatasetConnectionUnknown]: "Nicht spezifizierte Verbindung.",
        [_.errorDatasetsEmptyListing]: "Keine offenen Berichte verfügbar.",
        [_.errorDatasetsListing]: "Die Liste der Datasets von Power BI Service kann nicht abgerufen werden.",
        [_.errorExportDataFileError]: "Beim Exportieren der Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        [_.errorManageDateTemplateError]: "Beim Ausführen der DAX-Template-Engine ist eine Ausnahme aufgetreten.",
        [_.errorNetworkError]: "Sie sind nicht mit dem Internet verbunden.",
        [_.errorNone]: "Nicht spezifizierter Fehler.",
        [_.errorNotAuthorized]: "Sie sind nicht berechtigt, die angegebene Ressource anzuzeigen.",
        [_.errorNotConnected]: "Sie sind nicht mit Power BI verbunden - bitte melden Sie sich an, um fortzufahren.",
        [_.errorNotFound]: "Es kann keine Verbindung zur angegebenen Ressource hergestellt werden.",
        [_.errorReportConnectionUnknown]: "Ungültige Verbindung.",
        [_.errorReportConnectionUnsupportedAnalysisServecesCompatibilityMode]: "Der Kompatibilitätsmodus der Power BI Desktop Analysis Services-Instanz ist nicht PowerBI.",
        [_.errorReportConnectionUnsupportedAnalysisServecesConnectionNotFound]: "Power BI Desktop Analysis Services TCP-Verbindung nicht gefunden.",
        [_.errorReportConnectionUnsupportedAnalysisServecesProcessNotFound]: "Power BI Desktop Analysis Services-Instanzprozess nicht gefunden.",
        [_.errorReportConnectionUnsupportedConnectionException]: "Bei der Verbindung mit der Power BI Desktop Analysis Services-Instanz wurde eine Ausnahme ausgelöst.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionIsEmpty]: "Die Power BI Desktop Analysis Services-Instanz enthält keine Datenbanken. Versuchen Sie, über das Bravo-Symbol in den externen Tools von Power BI Desktop eine Verbindung zum Bericht herzustellen.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "Die Power BI Desktop Analysis Services-Instanz enthält eine unerwartete Anzahl von Datenbanken (> 1), während wir null oder eine erwarten.",
        [_.errorReportConnectionUnsupportedProcessNotYetReady]: "Power BI Desktop-Prozess wird geöffnet oder die Analysis Services-Instanz ist noch nicht bereit.",
        [_.errorReportsEmptyListing]: "Keine ungeöffneten Berichte verfügbar.",
        [_.errorRetry]: "Wiederholen",
        [_.errorSignInMsalExceptionOccurred]: "Unerwarteter Fehler in der Anmeldeanforderung.",
        [_.errorSignInMsalTimeoutExpired]: "Die Anmeldeanforderung wurde abgebrochen, weil die Zeitüberschreitung abgelaufen ist, bevor der Vorgang abgeschlossen werden konnte.",
        [_.errorTimeout]: "Zeitüberschreitung der Anfrage.",
        [_.errorTitle]: "Ups...",
        [_.errorTOMDatabaseDatabaseNotFound]: "Die Datenbank existiert nicht in der Sammlung oder der Benutzer hat keine Administratorrechte, um auf sie zuzugreifen.",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "Die angeforderte Aktualisierung steht im Konflikt mit dem aktuellen Zustand der Zielressource.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "Die angeforderte Aktualisierung ist fehlgeschlagen, weil eine oder mehrere Measures Fehler enthalten.",
        [_.errorTOMDatabaseUpdateFailed]: "Die Datenbankaktualisierung ist beim Speichern der lokalen Änderungen am Modell auf dem Datenbankserver fehlgeschlagen.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `Die angeforderte Aktualisierung ist fehlgeschlagen, weil die folgenden Measures Fehler enthalten:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "Unbehandelter Fehler - bitte melden Sie ihn und geben Sie die Trace-ID an, falls verfügbar.", 
        [_.errorUnspecified]: "Nicht spezifizierter Fehler.",
        [_.errorUserSettingsSaveError]: "Die Einstellungen können nicht gespeichert werden.",
        [_.errorVpaxFileImportError]: "Beim Importieren der VPAX-Datei ist ein Fehler aufgetreten.",
        [_.errorVpaxFileExportError]: "Beim Exportieren der VPAX-Datei ist ein Fehler aufgetreten.",
        [_.expandAllCtrlTitle]: "Alle erweitern",
        [_.ExportData]: "Daten exportieren",
        [_.exportDataCSVCustomDelimiter]: "Benutzerdefiniertes Feldtrennzeichen",
        [_.exportDataCSVDelimiter]: "Felder Trennzeichen",
        [_.exportDataCSVDelimiterComma]: "Komma",
        [_.exportDataCSVDelimiterDesc]: `Wählen Sie das Zeichen, das als Trennzeichen für jedes Feld verwendet werden soll. <em>Automatisch</em> verwendet das Standardzeichen Ihres Gebietsschemas.`,
        [_.exportDataCSVDelimiterOther]: "Andere...",
        [_.exportDataCSVDelimiterPlaceholder]: "Zeichen",
        [_.exportDataCSVDelimiterSemicolon]: "Semikolon",
        [_.exportDataCSVDelimiterSystem]: "Automatisch",
        [_.exportDataCSVDelimiterTab]: "Tab",
        [_.exportDataCSVEncoding]: "Kodierung",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVFolder]: "In einem Unterordner sparen",
        [_.exportDataCSVFolderDesc]: "Speichern Sie generierte CSV -Dateien in einem Unterordner.",
        [_.exportDataCSVQuote]: "Zeichenketten in Anführungszeichen einschließen",
        [_.exportDataCSVQuoteDesc]: "Stellt sicher, dass jede Zeichenkette in doppelte Anführungszeichen gesetzt wird.",
        [_.exportDataExcelCreateExportSummary]: "Export Zusammenfassung",
        [_.exportDataExcelCreateExportSummaryDesc]: "Fügt der Exportdatei ein zusätzliches Blatt mit der Zusammenfassung des Auftrags hinzu.",
        [_.exportDataExport]: "Auswahl exportieren",
        [_.exportDataExportAs]: "Exportieren als",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "Exportiere {table}...",
        [_.exportDataExportingDone]: "Erledigt!",
        [_.exportDataNoColumns]: "Diese Tabelle ist nicht exportierbar, da sie keine Spalten enthält.",
        [_.exportDataNotQueryable]: "Diese Tabelle kann nicht exportiert werden, da sie eine oder mehrere Spalten enthält, die mit einem ungültigen Ausdruck berechnet wurden, oder Spalten, die neu errechnet werden müssen.",
        [_.exportDataOpenFile]: "Öffne Export-Datei",
        [_.exportDataOpenFolder]: "Öffne Export-Ordner",
        [_.exportDataOptions]: "Export Optionen",
        [_.exportDataStartExporting]: "Initialisiere...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} Tabelle{{n}}</strong> {{wurden|wurde}} erfolgreich exportiert.",
        [_.exportDataSummary]: "Ihr Dataset entält <strong>{count} Tabelle{{n}}</strong> die exportiert werden {{können|kann}}.",
        [_.exportDataTypeCSV]: "CSV (Trennzeichen getrennt)",
        [_.exportDataTypeXLSX]: "Excel Arbeitsblatt",
        [_.failed]: "Fehlgeschlagen",
        [_.filterMeasuresWithErrorsCtrlTitle]: "Nur unformatierte Measures/Measures mit Fehlern anzeigen",
        [_.filterUnrefCtrlTitle]: "Nur nicht referenzierte Spalten anzeigen",
        [_.formattingMeasures]: "Formatiere Measures...",
        [_.goBackCtrlTitle]: "Abbrechen und zurückgehen",
        [_.groupByTableCtrlTitle]: "Gruppierung nach Tabelle",
        [_.helpConnectVideo]: "Wie Sie sich verbinden",
        [_.helpCtrlTitle]: "Hilfe",
        [_.hideUnsupportedCtrlTitle]: "Nur unterstützte",
        [_.less]: "Weniger",
        [_.license]: "Veröffentlicht unter MIT-Lizenz.",
        [_.loading]: "Lade...",
        [_.ManageDates]: "Datum verwalten",
        [_.manageDatesApplyCtrlTitle]: "Änderungen anwenden",
        [_.manageDatesAuto]: "Auto",
        [_.manageDatesAutoScan]: "Automatischer Scan",
        [_.manageDatesAutoScanActiveRelationships]: "Aktive Beziehungen",
        [_.manageDatesAutoScanDesc]: "Wählen Sie <em>Vollständig</em>, um alle Spalten mit Datumsangaben zu scannen. Wählen Sie <em>Spalten auswählen...</em>, um die zu verwendenden Spalten auszuwählen. Wählen Sie <em>Aktive Beziehungen</em> und <em>Inaktive Beziehungen</em>, um nur Spalten mit Beziehungen zu scannen.",
        [_.manageDatesAutoScanDisabled]: "Deaktiviert",
        [_.manageDatesAutoScanFirstYear]: "Erstes Jahr",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "Vollständig",
        [_.manageDatesAutoScanInactiveRelationships]: "Inaktive Beziehungen",
        [_.manageDatesAutoScanLastYear]: "Letztes Jahr",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "Spalten auswählen...",
        [_.manageDatesBrowserPlaceholder]: "Keine Elemente zu ändern",
        [_.manageDatesCalendarDesc]: "Wählen Sie eine Kalendervorlage, die auf dieses Modell angewendet werden soll. Bravo erstellt die erforderlichen Tabellen oder aktualisiert sie, wobei die bestehenden Beziehungen intakt bleiben.",
        [_.manageDatesCalendarTemplateName]: "Kalendervorlage",
        [_.manageDatesCalendarTemplateNameDesc]: "Wählen Sie <em>Monatlich</em> für einen Kalender, der auf einer unterschiedlichen Anzahl von Monaten basiert. Wählen Sie <em>Wöchentlich</em> für 445-454-544-ISO-Kalender. Verwenden Sie <em>Benutzerdefiniert</em> für flexible Kalender mit variabler Länge.", 
        [_.manageDatesCreatingTables]: "Aktualisiere das Modell...",
        [_.manageDatesDatesDesc]: "Konfigurieren Sie das Format und die Lokalisierung vom Datum in Ihrem Modell.", 
        [_.manageDatesDatesTableDesc]: "Dies ist die Tabelle, die in Berichten für Datum verwendet wird.",
        [_.manageDatesDatesTableName]: "Datum Tabelle",
        [_.manageDatesDatesTableReferenceDesc]: "Dies ist eine versteckte Tabelle, die alle DAX-Funktionen enthält, die zur Erzeugung von Datumswerten verwendet werden.",
        [_.manageDatesDatesTableReferenceName]: "Datum Definitionstabelle",
        [_.manageDatesHolidaysDesc]: "Fügen Sie Ihrem Modell Feiertage hinzu. Bravo erstellt die erforderlichen Tabellen oder aktualisiert sie, wobei die bestehenden Beziehungen intakt bleiben. ",
        [_.manageDatesHolidaysEnabledDesc]: "Fügt die Feiertagstabelle zu Ihrem Modell hinzu.",
        [_.manageDatesHolidaysEnabledName]: "Feiertage",
        [_.manageDatesHolidaysTableDefinitionDesc]: "Dies ist eine versteckte Tabelle, die alle DAX-Funktionen enthält, die zur Erstellung von Feiertagen verwendet werden.",
        [_.manageDatesHolidaysTableDefinitionName]: "Feiertage Definitionstabelle",
        [_.manageDatesHolidaysTableDesc]: "Dies ist die Tabelle, die in Berichten für Feiertage zu verwenden ist.",
        [_.manageDatesHolidaysTableName]: "Feiertage Tabelle",
        [_.manageDatesIntervalDesc]: "Wählen Sie ein Datumsintervall für Ihr Modell.",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "Feiertage Land",
        [_.manageDatesISOCustomFormatDesc]: "Geben Sie ein regionales Format unter Verwendung des IETF BCP 47 Sprachkennzeichens ein. Z.B. en-US",
        [_.manageDatesISOCustomFormatName]: "Benutzerdefiniertes Format",
        [_.manageDatesISOFormatDesc]: "Wählen Sie das regionale Format für die Datumsangaben.",
        [_.manageDatesISOFormatName]: "Regionales Format",
        [_.manageDatesISOFormatOther]: "Andere...",
        [_.manageDatesISOFormatOtherPlaceholder]: "Region",
        [_.manageDatesMenuCalendar]: "Kalender",
        [_.manageDatesMenuDates]: "Datum",
        [_.manageDatesMenuHolidays]: "Feiertage",
        [_.manageDatesMenuInterval]: "Intervall",
        [_.manageDatesMenuPreviewCode]: "Ausdruck",
        [_.manageDatesMenuPreviewModel]: "Modelländerungen",
        [_.manageDatesMenuPreviewTable]: "Beispieldaten",
        [_.manageDatesMenuPreviewTreeDate]: "Datum",
        [_.manageDatesMenuPreviewTreeDateHolidays]: "Datum & Feiertage",
        [_.manageDatesMenuPreviewTreeTimeIntelligence]: "Zeitintelligenz",
        [_.manageDatesMenuTimeIntelligence]: "Zeitintelligenz",
        [_.manageDatesModelCheck]: "Modell prüfen",
        [_.manageDatesPreview]: "Vorschau",
        [_.manageDatesPreviewCtrlTitle]: "Änderungsvorschau", 
        [_.manageDatesSampleData]: "Beispieldaten",
        [_.manageDatesSampleDataError]: "Es können keine Beispieldaten erzeugt werden.", 
        [_.manageDatesStatusCompatible]: `<div class="hero">Dieses Modell enthält bereits einige mit Bravo <b>kompatible Datumstabellen</b>.</div> Wenn Sie hier etwas ändern, werden diese Tabellen aktualisiert und ihre Beziehungen bleiben intakt.`, 
        [_.manageDatesStatusError]: `<div class="hero">Die aktuellen Einstellungen können nicht übernommen werden.</div>{error}`,
        [_.manageDatesStatusIncompatible]: `<div class="hero">Dieses Modell enthält some einige mit Bravo <b>nicht kompatible Datumstabellen</b>.</div>Um hier Änderungen vorzunehmen, müssen Sie einen anderen Namen für eine oder mehrere Tabellen wählen, die mit diesem Tool erstellt werden sollen.<br><br><b>Datum</b> und <b>Feiertage</b> prüfen.`,
        [_.manageDatesStatusNotAvailable]: `<div class="hero">Dieses Modell ist nicht mehr verfügbar.</div> Versuchen Sie, die Anwendung neu zu starten.`, 
        [_.manageDatesStatusOk]: `<div class="hero">Dieses Modell <b>ist mit der Funktion Datum verwalten kompatibel</b>.</div>Sie können neue Datums-Tabellen erstellen, ohne sich Sorgen machen zu müssen, dass Measures oder Berichte beschädigt werden.`,
        [_.manageDatesSuccessSceneMessage]: "Herzlichen Glückwunsch, Ihr Modell wurde erfolgreich aktualisiert.",
        [_.manageDatesTemplateFirstDayOfWeek]: "Erster Tag der Woche",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "Für Wöchentlich ISO stellen Sie <em>Montag</em> ein.",
        [_.manageDatesTemplateFirstFiscalMonth]: "Erster Monat des Jahres",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "Für Wöchentlich ISO stellen Sie <em>Januar</em> ein.",
        [_.manageDatesTemplateMonthsInYear]: "Monate im Jahr",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "Standard",
        [_.manageDatesTemplateNameConfig02]: "Monatlich",
        [_.manageDatesTemplateNameConfig03]: "Benutzerdefiniert",
        [_.manageDatesTemplateNameConfig04]: "Wöchentlich",
        [_.manageDatesTemplateQuarterWeekType]: "Wochensystem",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "Erster Tag des Geschäftsjahrs",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "Für Wöchentlich ISO stellen Sie <em>Letzte des Jahres</em> ein.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "Erster des Jahres",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "Letzte des Jahres",
        [_.manageDatesTemplateWeeklyType]: "Letzter Wochentag des Jahres",
        [_.manageDatesTemplateWeeklyTypeDesc]: "Wenn Ihre Woche am Sonntag beginnt, dann ist der letzte Wochentag der Samstag. Wenn Sie <em>Letzte des Jahres</em> wählen, endet das Geschäftsjahr am letzten Samstag des letzten Monats. Andernfalls endet das Geschäftsjahr an dem Samstag, der dem letzten Tag des letzten Monats am nächsten liegt - das kann auch im nächsten Jahr sein. Für Wöchentliche ISO, setzen Sie <em>Am nächsten zum Jahresende</em>",
        [_.manageDatesTemplateWeeklyTypeLast]: "Letzte des Jahres",
        [_.manageDatesTemplateWeeklyTypeNearest]: "Am nächsten zum Jahresende",
        [_.manageDatesTimeIntelligenceDesc]: "Erstellen Sie die gängigsten Zeitintelligenz DAX-Funktionen, die in Ihrem Modell verfügbar sind.", 
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "Zeitintelligenz-Funktionen",
        [_.manageDatesTimeIntelligenceTargetMeasuresAll]: "Alle Measures",
        [_.manageDatesTimeIntelligenceTargetMeasuresChoose]: "Measures auswählen...",
        [_.manageDatesTimeIntelligenceTargetMeasuresDesc]: "Wählen Sie das Measure, das zur Erstellung der Zeitintelligenz-Funktionen verwendet wird.",
        [_.manageDatesTimeIntelligenceTargetMeasuresName]: "Ziel Measures", 
        [_.manageDatesYearRange]: "Datumsintervall",
        [_.manageDatesYearRangeDesc]: "Legen Sie fest, wie das Datumsintervall des Modells bestimmt werden soll. Lassen Sie <em>Erstes Jahr</em> und/oder <em>Letztes Jahr</em> leer, um den automatischen Scan zu verwenden.",
        [_.menuCtrlTitle]: "Erweitern/Reduzieren Menü",
        [_.minimizeCtrlTitle]: "Minimieren",
        [_.modelLanguage]: "Modellspache ({culture})",
        [_.more]: "Mehr",
        [_.notificationCtrlTitle]: "Benachrichtigungen",
        [_.notificationsTitle]: "{count} Benachrichtigung{{en}}",
        [_.openSourcePayoff]: "{appName} ist ein Open-Source-Tool, das von SQLBI und der Github-Community entwickelt und gepflegt wird. Besuchen Sie uns unter",
        [_.openWithDaxFormatterCtrlTitle]: "Online formatieren mit DAX Formatter",
        [_.optionAccount]: "Power BI-Konto",
        [_.optionAccountDescription]: "Legen Sie das Konto für den Zugriff auf Power BI Online-Datensätze fest.",
        [_.optionDiagnostic]: "Diagnosestufe",
        [_.optionDiagnosticDescription]: "Fehler und Protokolle in einem Diagnosefenster anzeigen. Wählen Sie <em>Standard</em>, um nur einige Meldungen zu protokollieren. <em>Ausführlich </em> protokolliert alle Meldungen.",
        [_.optionDiagnosticLevelBasic]: "Standard",
        [_.optionDiagnosticLevelNone]: "Keine",
        [_.optionDiagnosticLevelVerbose]: "Ausführlich",
        [_.optionDiagnosticMore]: "Um ein Anwendungsproblem zu melden, bitte folgenden Link verwenden",
        [_.optionFormattingBreaks]: "Name-Ausdruck Trennung",
        [_.optionFormattingBreaksAuto]: "Auto",
        [_.optionFormattingBreaksDescription]: "Wählen Sie, wie der Measurename und Ausdruck voneinander getrennt werden sollen. Stellen Sie auf <em>Auto</em>, um den im Modell verwendeten Stil automatisch zu bestimmen.",
        [_.optionFormattingBreaksInitial]: "Zeilenumbruch",
        [_.optionFormattingBreaksNone]: "Gleiche Zeile",
        [_.optionFormattingIncludeTimeIntelligence]: "Zeit intelligenz einbeziehen",
        [_.optionFormattingIncludeTimeIntelligenceDescription]: "Fügen Sie die automatischen Maßnahmen ein, die durch Verwaltung von Daten für die Zeit intelligenz erstellt wurden.",
        [_.optionFormattingLines]: "Zeilen",
        [_.optionFormattingLinesDescription]: "Wählen Sie, ob Sie die Zeilen kurz oder lang halten wollen.",
        [_.optionFormattingLinesValueLong]: "Lange Zeilen",
        [_.optionFormattingLinesValueShort]: "Kurze Zeilen",
        [_.optionFormattingPreview]: "Automatische Vorschau",
        [_.optionFormattingPreviewDescription]: "Automatisches senden von Measures an DAX Formatter, um Vorschauen zu generieren.",
        [_.optionFormattingSeparators]: "Trennzeichen",
        [_.optionFormattingSeparatorsDescription]: "Wählen Sie die Trennzeichen für Zahlen und Listen.",
        [_.optionFormattingSeparatorsValueAuto]: "Auto",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "Leerzeichen",
        [_.optionFormattingSpacesDescription]: "Behandlung von Leerzeichen nach Funktionsnamen.",
        [_.optionFormattingSpacesValueBestPractice]: "Beste Vorgehensweise",
        [_.optionFormattingSpacesValueFalse]: "Kein Leerzeichen - IF( ",
        [_.optionFormattingSpacesValueTrue]: "Leerzeichen - IF ( ",
        [_.optionLanguage]: "Sprache",
        [_.optionLanguageDescription]: "Wählen Sie die Sprache von Bravo. Neuladen erforderlich.",
        [_.optionLanguageResetConfirm]: "Möchten Sie Bravo neu laden, um die neue Sprache anzuwenden?",
        [_.optionsDialogAboutMenu]: "Über",
        [_.optionsDialogFormattingMenu]: "Formatierung",
        [_.optionsDialogGeneralMenu]: "Allgemein",
        [_.optionsDialogTelemetryMenu]: "Diagnose",
        [_.optionsDialogTitle]: "Einstellungen",
        [_.optionTelemetry]: "Telemetrie",
        [_.optionTelemetryDescription]: "Senden Sie anonyme Nutzungsdaten an SQLBI.",
        [_.optionTelemetryMore]: "Helfen Sie uns zu verstehen, wie Sie Bravo nutzen und wie wir es verbessern können. Es werden keine persönlichen Informationen gesammelt. Bitte beachten Sie, dass das Entwicklungsteam bei Deaktivierung dieser Option nicht in der Lage ist, nicht bearbeitete Fehler zu sammeln und zusätzliche Informationen oder Unterstützung bereitzustellen.",
        [_.optionTheme]: "Design",
        [_.optionThemeDescription]: "Legt das Design von Bravo fest. Lassen Sie <em>System</em> stehen, um das Betriebsystem entscheiden zu lassen.",
        [_.optionThemeValueAuto]: "System",
        [_.optionThemeValueDark]: "Dunkel",
        [_.optionThemeValueLight]: "Hell",
        [_.otherColumnsRowName]: "Kleinere Spalten...",
        [_.paste]: "Einfügen", 
        [_.powerBiObserving]: "Warten auf das Öffnen der Datei in Power BI Desktop...",
        [_.powerBiObservingCancel]: "Abbrechen",
        [_.powerBiSigninDescription]: "Melden Sie sich bei Power BI Service an, um Bravo mit Ihren Online-Datasets zu verbinden.",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "Mit Power BI Desktop verbinden",
        [_.quickActionConnectPBITitle]: "Verbinden mit Power BI Service",
        [_.quickActionOpenVPXTitle]: "Öffnen einer Vertipaq Analyzer-Datei",
        [_.refreshCtrlTitle]: "Aktualisieren",
        [_.refreshPreviewCtrlTitle]: "Vorschau aktualisieren",
        [_.saveVpaxCtrlTile]: "Speichern als VPAX",
        [_.savingVpax]: "Erzeuge VPAX...",
        [_.sceneUnsupportedReason]: "Diese Funktion ist für diese Datenquelle nicht verfügbar.",
        [_.sceneUnsupportedReasonManageDatesAutoDateTimeEnabled]: `Modelle mit aktivierter Autom. Datum/Uhrzeit Option werden nicht unterstützt.<br><span class="link" href="https://www.sqlbi.com/tv/disabling-auto-date-time-in-power-bi/">Autom. Datum/Uhrzeit in Power BI deaktivieren (Video)</span>`,
        [_.sceneUnsupportedReasonManageDatesEmptyTableCollection]: "Diese Funktion wird nur von Datenbanken unterstützt, die mindestens eine Tabelle haben.",
        [_.sceneUnsupportedReasonManageDatesPBIDesktopModelOnly]: "Diese Funktion wird nur von Modellen im Power BI Desktop-Modus unterstützt.",
        [_.sceneUnsupportedReasonMetadataOnly]: "Die Datenbank wurde aus einer VPAX-Datei erstellt, die nur die Metadaten enthält.",
        [_.sceneUnsupportedReasonReadOnly]: "Die Verbindung zu dieser Datenbank ist nur lesend.",
        [_.sceneUnsupportedReasonXmlaEndpointNotSupported]: "Der XMLA-Endpunkt wird für dieses Datast nicht unterstützt.",
        [_.sceneUnsupportedTitle]: "Nicht unterstützt",
        [_.searchColumnPlaceholder]: "Spalte suchen",
        [_.searchDatasetPlaceholder]: "Dataset suchen",
        [_.searchEntityPlaceholder]: "Tabelle/Spalte suchen",
        [_.searchMeasurePlaceholder]: "Measure suchen",
        [_.searchPlaceholder]: "Suchen",
        [_.searchTablePlaceholder]: "Tabelle Suchen",
        [_.settingsCtrlTitle]: "Einstellungen",
        [_.sheetOrphan]: "Nicht verfügbar",
        [_.sheetOrphanPBIXTooltip]: "Der Bericht wurde in Power BI Desktop geschlossen. Jeder Schreibvorgang ist nicht zulässig.",
        [_.sheetOrphanTooltip]: "Dieses Modell ist nicht mehr verfügbar. Jeder Schreibvorgang ist nicht zulässig.",
        [_.showDiagnosticPane]: "Details anzeigen",
        [_.sideCtrlTitle]: "Umschalten der Nebeneinanderansicht",
        [_.signedInCtrlTitle]: "Angemeldet als {name}",
        [_.signIn]: "Anmelden",
        [_.signInCtrlTitle]: "Anmelden",
        [_.signOut]: "Abmelden",
        [_.sqlbiPayoff]: "Bravo ist ein Projekt von SQLBI.",
        [_.syncCtrlTitle]: "Synchronisieren",
        [_.tableColCardinality]: "Kardinalität",
        [_.tableColCardinalityTooltip]: "Anzahl eindeutiger Elemente",
        [_.tableColColumn]: "Spalte",
        [_.tableColColumns]: "Spalten",
        [_.tableColMeasure]: "Measure",
        [_.tableColPath]: "Tabelle \\ Spalte",
        [_.tableColRows]: "Zeilen",
        [_.tableColSize]: "Größe",
        [_.tableColTable]: "Tabelle",
        [_.tableColWeight]: "Gewicht",
        [_.tableSelectedCount]: "{count} Ausgewählt",
        [_.tableValidationInvalid]: "Dieser Name kann nicht verwendet werden.",
        [_.tableValidationValid]: "Dieser Name ist gültig.",
        [_.themeCtrlTitle]: "Design ändern",
        [_.toggleTree]: "Baum umschalten",
        [_.traceId]: "Trace-ID",
        [_.unknownMessage]: "Ungültige Meldung erhalten",
        [_.updateChannelBeta]: "Beta",
        [_.updateChannelCanary]: "Canary",
        [_.updateChannelDev]: "Dev",
        [_.updateChannelStable]: "Stable",
        [_.updateMessage]: "Eine neue Version von Bravo ist verfügbar: {version}",
        [_.validating]: "Überprüfe...",
        [_.version]: "Version",
        [_.welcomeHelpText]: "Schau dir die folgenden Videos an, um zu lernen, wie man Bravo verwendet:",
        [_.welcomeHelpTitle]: "Wie verwende ich Bravo?",
        [_.welcomeText]: "Bravo ist ein praktisches Power BI-Werkzeug, mit dem Sie Ihre Modelle analysieren, Measures formatieren, Datumstabellen erstellen und Daten exportieren können.",
        [_.whitespacesTitle]: "Leerzeichen",
        [_.wrappingTitle]: "Automatischer Zeilenumbruch",
    }
}
export default locale;