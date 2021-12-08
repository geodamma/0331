ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([169574.613077, 2699067.728501, 176251.849526, 2706169.297722]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_1_1 = new ol.format.GeoJSON();
var features_1_1 = format_1_1.readFeatures(json_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_1.addFeatures(features_1_1);
var lyr_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_1, 
                style: style_1_1,
                interactive: true,
                title: '<img src="styles/legend/1_1.png" /> 1'
            });
var format_00_2 = new ol.format.GeoJSON();
var features_00_2 = format_00_2.readFeatures(json_00_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_00_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_00_2.addFeatures(features_00_2);
var lyr_00_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_00_2, 
                style: style_00_2,
                interactive: true,
                title: '<img src="styles/legend/00_2.png" /> 00'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1_1.setVisible(true);lyr_00_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1_1,lyr_00_2];
lyr_1_1.set('fieldAliases', {'村名': '村名', });
lyr_00_2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr_1_1.set('fieldImages', {'村名': '', });
lyr_00_2.set('fieldImages', {'Build_STR': '', 'Build_NO': '', '樓高': '', });
lyr_1_1.set('fieldLabels', {'村名': 'no label', });
lyr_00_2.set('fieldLabels', {'Build_STR': 'no label', 'Build_NO': 'no label', '樓高': 'no label', });
lyr_00_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});