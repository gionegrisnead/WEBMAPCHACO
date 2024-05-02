var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_dist_agm_2021_1 = new ol.format.GeoJSON();
var features_dist_agm_2021_1 = format_dist_agm_2021_1.readFeatures(json_dist_agm_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dist_agm_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dist_agm_2021_1.addFeatures(features_dist_agm_2021_1);
var lyr_dist_agm_2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dist_agm_2021_1, 
                style: style_dist_agm_2021_1,
                popuplayertitle: "dist_agm_2021",
                interactive: true,
                title: '<img src="styles/legend/dist_agm_2021_1.png" /> dist_agm_2021'
            });
var lyr_S2A_chacomarzo24_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "S2A_chacomarzo24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/S2A_chacomarzo24_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6907685.448976, -2480888.334395, -6839588.958538, -2419915.410757]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_dist_agm_2021_1.setVisible(true);lyr_S2A_chacomarzo24_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_dist_agm_2021_1,lyr_S2A_chacomarzo24_2];
lyr_dist_agm_2021_1.set('fieldAliases', {'DIST_DESC': 'DIST_DESC', 'DPTO_DESC': 'DPTO_DESC', 'SubZona': 'SubZona', });
lyr_dist_agm_2021_1.set('fieldImages', {'DIST_DESC': '', 'DPTO_DESC': '', 'SubZona': '', });
lyr_dist_agm_2021_1.set('fieldLabels', {'DIST_DESC': 'no label', 'DPTO_DESC': 'no label', 'SubZona': 'no label', });
lyr_dist_agm_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});