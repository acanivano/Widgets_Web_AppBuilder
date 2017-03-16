///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  units: { // label shown in config UI dialog box(options for dropdown)
    miles: "@ar Miles",
    kilometers: "@ar Kilometers",
    feet: "@ar Feet",
    meters: "@ar Meters",
    uSSurveyFeet: "@ar US Survey Feet",
    standardUnit: "@ar Standard Unit",
    metricUnit: "@ar Metric Unit",
    decimalDegree: "@ar Decimal Degree", // Shown as label for Decimal Degree in direction or angle unit dropdown
    degreeMinuteSeconds: "@ar Degree Minute Seconds" // Shown as label for Degree Minute Seconds in direction or angle unit dropdown,
  },
  analysisTab: {
    analysisTabLabel: "@ar Analysis", // shown as label in config UI for first tab.
    selectAnalysisLayerLabel: "@ar Select analysis layers", // shown as main label in config UI for Add Layer section.
    addLayerLabel: "@ar Add Layers", // shown as label in config UI for button add layer for Add Layer section.
    noValidLayersForAnalysis: "@ar No valid layers found in the selected webmap.", // shown as label in config UI if no valid layers found in the selected webmap.
    noValidFieldsForAnalysis: "@ar No valid fields found in the selected webmap. Please remove the selected layer.", // shown as label in config UI if no valid fields found in the selected webmap.
    addLayersHintText: "@ar Hint: Select layers and fields to analyze and display in report", // shown as hint text in config UI for Add layers section.
    addLayerNameTitle: "@ar Layer Name", // shown as title in config UI for add layer Name in Add Layer section.
    addLayerLabelTitle: "@ar Label", // shown as title in config UI for add layer label in Add Layer section.
    addLayerActionsTitle: "@ar Actions", // shown as title in config UI for add layer Actions in Add Layer section.
    addFieldsLabel: "@ar Add Field", // shown as label in config UI for button add field for Add Fields section.
    addFieldsPopupTitle: "@ar Select Fields", // shown as title in config UI for add Fields Popup title in Add Fields section.
    addFieldsLabelTitle: "@ar Label", // shown as title in config UI for add Fields Fields in Add Fields section.
    addFieldsNameTitle: "@ar Field Names", // shown as title in config UI for add Fields Name in Add Fields section.
    addFieldsActionsTitle: "@ar Actions", // shown as title in config UI for add Fields Actions in Add Fields section.
    aoiToolsLegendLabel: "@ar AOI Tools", // shown as legend for fieldset in config UI for AOI Tools.
    aoiToolsDescriptionLabel: "@ar Enable tools to create areas of interest and specify their labels", // shown as label in config UI for AOI tools description label in AOI Tools
    placenameLabel: "@ar Placename", // shown as label in config UI for placename in AOI Tools section
    drawToolsLabel: "@ar Draw Tools", // shown as label in config UI for drawTools in AOI Tools section
    uploadShapeFileLabel: "@ar Upload a Shapefile", // shown as label in config UI for uploadShapeFile in AOI Tools section
    coordinatesLabel: "@ar Co-ordinates", // shown as label in config UI for coordinates in AOI Tools section
    coordinatesDrpDwnHintText: "@ar Hint: Select unit to display entered traverses", // Shown as hint text in config UI for coordinates DropDown hint text.
    coordinatesBearingDrpDwnHintText: "@ar Hint: Select bearing to display entered traverses", // Shown as hint text in config UI for coordinates DropDown hint text.
    allowShapefilesUploadLabel: "@ar Allow uploading shapefiles to analysis", // shown as main label in config UI for allow uploading shapefiles section.
    areaUnitsLabel: "@ar Show areas/lengths in", // shown as main label in config UI for area units dropdown section.
    allowShapefilesUploadLabelHintText: "@ar Hint: Display 'Upload shapefile in Analysis' in Report Tab", // Shown as hint text in config UI for area units DropDown hint text.
    maxFeatureForAnalysisLabel: "@ar Max features for analysis", // Shown as the label for max features for analysis
    maxFeatureForAnalysisHintText: "@ar Hint: Set the maximum number of features for analysis" // Shown as the hint text for max features for analysis
  },
  downloadTab: {
    downloadLegend: "@ar Download Settings", // Shown as fieldset legend for download settings
    reportLegend: "@ar Report Settings", // Shown as fieldset legend for report settings
    downloadTabLabel: "@ar Download", // Shown as the label of the tab
    syncEnableOptionLabel: "@ar Feature Layers", // Shown as the label for sync enable download option
    syncEnableOptionHint: "@ar Hint: Used to download feature information for features intersecting the area of interest in the indicated formats.", // Shown as the hint text for sync enable download option
    syncEnableOptionNote: "@ar Note: Sync enabled feature services are required for File Geodatabase and Shapefile options. Shapefile format is only supported with ArcGIS Online hosted feature layers.", // Shown as the special note in the hint text for sync enable download option
    extractDataTaskOptionLabel: "@ar Extract Data Task geoprocessing service", // Shown as the label for extract data task download option
    extractDataTaskOptionHint: "@ar Hint: Use a published Extract Data Task geoprocessing service to download features that intersect the area of interest in File Geodatabase or Shapefile formats.", // Shown as the hint for extract data task download option
    cannotDownloadOptionLabel: "@ar Disable download", // Shown as the label for disabling download option in widget
    syncEnableTableHeaderTitle: {
      layerNameLabel: "@ar Layer name", // Shown as the table header for layer name
      csvFileFormatLabel: "@ar CSV", // Shown as the table header for CSV file format
      fileGDBFormatLabel: "@ar File Geodatabase", // Shown as the table header for File Geodatabase file format
      ShapefileFormatLabel: "@ar Shapefile", // Shown as the table header for Shapefile file format
      allowDownloadLabel: "@ar Allow Download" // Shown as the table header for allowing download option checkboxes for the respective layers
    },
    setButtonLabel: "@ar Set", // Shown as the Set button label for selecting gp service for both Extract data task and Print task service
    GPTaskLabel: "@ar Specify url to geoprocessing service", // Shown as the label for selecting print task gp service
    printGPServiceLabel: "@ar Print Service URL", // Shown as the label to specify print service url
    setGPTaskTitle: "@ar Specify required Geoprocessing Service URL", // Shown as the title of the popup for selecting geoprocessing url
    logoLabel: "@ar Logo", // Shown as the label for selecting logo
    logoChooserHint: "@ar Hint: Click on image icon to change the image", // Shown as the hint for logo chooser
    footnoteLabel: "@ar Footnote", // Shown as the label for footnote textarea
    errorMessages: {
      invalidGPTaskURL: "@ar Invalid geoprocessing service. Please select geoprocessing service containing Extract Data Task.", // Shown as the error message on selecting invalid geoprocessing service
      noExtractDataTaskURL: "@ar Please select any geoprocessing service containing Extract Data Task." // Shown as the error message when no geoprocessing service is selected on setting the configuration
    }
  },
  generalTab: {
    generalTabLabel: "@ar General", // shown as label in config UI for third tab
    tabLabelsLegend: "@ar Tab Labels", // shown as label in config UI for Tab Labels Fieldset legend
    tabLabelsHint: "@ar Hint: Specify Labels", // shown as hint in config UI for Tab Labels Fieldset
    AOITabLabel: "@ar Area of Interest Tab", // shown as label in config UI for Tab Labels Fieldset AOI Tab Option
    ReportTabLabel: "@ar Report Tab", // shown as label in config UI for Tab Labels Fieldset Report Tab Option
    bufferSettingsLegend: "@ar Buffer Settings", // shown as label in config UI for Buffer Settings Fieldset legend
    defaultBufferDistanceLabel: "@ar Default Buffer Distance", // shown as label in config UI for Buffer Settings Fieldset Default Buffer Distance Option
    defaultBufferUnitsLabel: "@ar Buffer Units", // shown as label in config UI for Buffer Settings Fieldset Default Buffer Units Option
    maxBufferDistanceLabel: "@ar Max Buffer Distance", // shown as label in config UI for Buffer Settings Fieldset Max Buffer Distance Option
    maxBufferUnitsLabel: "@ar Max Buffer Units", // shown as label in config UI for Buffer Settings Fieldset Max Buffer Units Option
    generalBufferSymbologyHint: "@ar Hint: Set symbology to be used for displaying buffers around defined areas of interest", // shown as hint in config UI for Buffer Settings Fieldset for Buffer Symbology Option
    aoiGraphicsSymbologyLegend: "@ar AOI Graphics Symbology", // shown as label in config UI for AOI Graphics Symbology Fieldset legend
    aoiGraphicsSymbologyHint: "@ar Hint: Set symbology to be used while defining point, line and polygon areas of interest", // shown as hint in config UI for AOI Graphics Symbology Fieldset
    pointSymbologyLabel: "@ar Point", // shown as label in config UI for AOI Graphics Symbology Fieldset point Symbology
    previewLabel: "@ar Preview", // shown as label in config UI for AOI Graphics Symbology Fieldset preview
    lineSymbologyLabel: "@ar Line", // shown as label in config UI for AOI Graphics Symbology Fieldset line Symbology
    polygonSymbologyLabel: "@ar Polygon", // shown as label in config UI for AOI Graphics Symbology Fieldset polygon Symbology
    aoiBufferSymbologyLabel: "@ar Buffer Symbology", // shown as label in config UI for AOI Graphics Symbology Fieldset AOI Symbology
    pointSymbolChooserPopupTitle: "@ar Address or location symbol", // shown as title in config UI for Symbol chooser popup for point symbology
    polygonSymbolChooserPopupTitle: "@ar Select symbol to highlight polygon", // shown as title in config UI for Symbol chooser popup for polygon symbology
    lineSymbolChooserPopupTitle: "@ar Select symbol to highlight line", // shown as title in config UI for Symbol chooser popup for line symbology
    aoiSymbolChooserPopupTitle: "@ar Set buffer symbol" // shown as title in config UI for Symbol chooser popup for aoi symbology
  },
  searchSourceSetting: {
    searchSourceSettingTabTitle: "@ar Search Source Settings", // shown as a label in config UI dialog box for search source setting
    searchSourceSettingTitle: "@ar Search Source Settings", // shown as a label in config UI dialog box for search source setting
    searchSourceSettingTitleHintText: "@ar Add and configure geocode services or feature layers as search sources. These specified sources determine what is searchable within the search box", // shown as a hint text in config UI dialog box for search source setting
    addSearchSourceLabel: "@ar Add Search Source", // Shown as a label in config UI for button
    featureLayerLabel: "@ar Feature Layer", // Shown as a label in config UI for dropDown menu
    geocoderLabel: "@ar Geocoder", // Shown as a label in config UI for dropDown menu
    nameTitle: "@ar Name", // Shown as a title in table
    generalSettingLabel: "@ar General Setting", // Shown as a label in config UI
    allPlaceholderLabel: "@ar Placeholder text for searching all:", // Shown as a label in config UI
    allPlaceholderHintText: "@ar Hint: Enter text to be shown as placeholder while searching all layers and geocoder", // shown as a hint text in config UI
    generalSettingCheckboxLabel: "@ar Show pop-up for the found feature or location", // Shown as a label of checkbox
    countryCode: "@ar Country or Region Code(s)", // Shown as a label in config UI
    countryCodeEg: "@ar e.g. ", // Shown as a placeholder in config UI
    countryCodeHint: "@ar Leaving this value blank will search all countries and regions", // Shown as a hint text in config UI for country code textbox
    questionMark: "@ar ؟", //Shown as a question mark in config UI for help
    searchInCurrentMapExtent: "@ar Only search in current map extent", // Shown as a label in config UI for checkbox
    zoomScale: "@ar Zoom Scale", // Shown as a label in config UI
    locatorUrl: "@ar Geocoder URL", // Shown as a label in config UI for layer chooser
    locatorName: "@ar Geocoder Name", // Shown as a label in config UI
    locatorExample: "@ar Example", // Shown as a label in config UI
    locatorWarning: "@ar This version of geocoding service is not supported. The widget supports geocoding service 10.0 and above.",
    locatorTips: "@ar Suggestions are not available because the geocoding service doesn't support suggest capability.",
    layerSource: "@ar Layer Source", // Shown as a label in config UI
    setLayerSource: "@ar Set Layer Source", // Shown as a popup title while selecting layers
    setGeocoderURL: "@ar Set Geocoder URL", // Shown as a popup title while selecting geocoder URL
    searchLayerTips: "@ar Suggestions are not available because the feature service doesn't support pagination capability.", // Show as msg if suggestions would not be available
    placeholder: "@ar Placeholder Text", // Shown as a placeholder in config UI
    searchFields: "@ar Search Fields", // Shown as a label in config UI
    displayField: "@ar Display Field", // Shown as a label in config UI
    exactMatch: "@ar Exact Match", // Shown as a label in config UI for checkbox
    maxSuggestions: "@ar Maximum Suggestions", // Shown as a label in config UI
    maxResults: "@ar Maximum Results", // Shown as a label in config UI
    enableLocalSearch: "@ar Enable local search", // Shown as a label in config UI for checkbox
    minScale: "@ar Min Scale", // Shown as a label in config UI
    minScaleHint: "@ar When the map scale is larger than this scale, local search will be applied",
    radius: "@ar Radius", // Shown as a label in config UI
    radiusHint: "@ar Specifies the radius of an area around current map center that is used to boost the rank of geocoding candidates so that candidates closest to the location are returned first", // Shown as a hint for radius
    meters: "@ar Meters", // Shown as a label in config UI for radius unit
    setSearchFields: "@ar Set Search Fields", // Shown as a title for selecting search fields
    set: "@ar Set", // Shown as a label in config UI for button
    fieldName: "@ar Name", // Shown as a label in config UI
    invalidUrlTip: "@ar The URL ${URL} is invalid or inaccessible.", // Shown as error message if URL is invalid
    invalidSearchSources: "@ar Invalid search source settings" // Show as error msg if search source settings are invalid
  },
  errorMsg: {
    textboxFieldsEmptyErrorMsg: "@ar Please fill the required fields", // Shown as error message if textbox fields are empty.
    bufferDistanceFieldsErrorMsg: "@ar Please enter valid values", // Shown as error message if number textbox fields has invalid values.
    defaultLessThanMaxBufferDistanceFieldErrorMsg: "@ar Max buffer distance should not be 0 or less than default buffer distance", // Shown as error message if default buffer distance textbox field value less than max buffer distance textbox field.
    atLeastOneCheckboxCheckedErrorMsg: "@ar Invalid configuration", // Shown as error message if no checkbox field checked in AOI Tools section.
    noLayerAvailableErrorMsg: "@ar No layers available", // Shown as error message if no valid layer available.
    layerNotSupportedErrorMsg: "@ar Not Supported ", // Shown as error message if layer type is not supported.
    noFieldSelected: "@ar Please use the edit action to select a field", // Shown as error message if no field selected for add layers section
    duplicateFieldsLabels: "@ar Duplicate label '${labelText}' added for : '${itemNames}'", // Shown as error message if duplicate labels selected for layers/ fields in add layers section
    noLayerSelected: "@ar Please select at least one layer for analysis", // Shown as error message if no layer selected for add layers section
    errorInSelectingLayer: "@ar Unable to complete the operation of selecting layer. Please try again.", // Shown as error message when error in selecting layer in dropdown
    errorInMaxFeatureCount: "@ar Please enter valid max features count for analysis." // Shown as an error message if max count is less then 1 or invalid
  }
});
