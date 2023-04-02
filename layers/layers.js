var wms_layers = [];

var format_2022shp_0 = new ol.format.GeoJSON();
var features_2022shp_0 = format_2022shp_0.readFeatures(json_2022shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022shp_0.addFeatures(features_2022shp_0);
var lyr_2022shp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022shp_0, 
                style: style_2022shp_0,
                interactive: true,
                title: '<img src="styles/legend/2022shp_0.png" /> 2022shp'
            });
var format_2019_1 = new ol.format.GeoJSON();
var features_2019_1 = format_2019_1.readFeatures(json_2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_1.addFeatures(features_2019_1);
var lyr_2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_1, 
                style: style_2019_1,
                interactive: true,
                title: '<img src="styles/legend/2019_1.png" /> 2019'
            });
var format_2016shp_2 = new ol.format.GeoJSON();
var features_2016shp_2 = format_2016shp_2.readFeatures(json_2016shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016shp_2.addFeatures(features_2016shp_2);
var lyr_2016shp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016shp_2, 
                style: style_2016shp_2,
                interactive: true,
                title: '<img src="styles/legend/2016shp_2.png" /> 2016shp'
            });
var format_2014shp_3 = new ol.format.GeoJSON();
var features_2014shp_3 = format_2014shp_3.readFeatures(json_2014shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014shp_3.addFeatures(features_2014shp_3);
var lyr_2014shp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2014shp_3, 
                style: style_2014shp_3,
                interactive: true,
                title: '<img src="styles/legend/2014shp_3.png" /> 2014shp'
            });
var format_2011_4 = new ol.format.GeoJSON();
var features_2011_4 = format_2011_4.readFeatures(json_2011_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2011_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011_4.addFeatures(features_2011_4);
var lyr_2011_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2011_4, 
                style: style_2011_4,
                interactive: true,
                title: '<img src="styles/legend/2011_4.png" /> 2011'
            });
var format_2009_5 = new ol.format.GeoJSON();
var features_2009_5 = format_2009_5.readFeatures(json_2009_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2009_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2009_5.addFeatures(features_2009_5);
var lyr_2009_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2009_5, 
                style: style_2009_5,
                interactive: true,
                title: '<img src="styles/legend/2009_5.png" /> 2009'
            });
var format_poligon2006_6 = new ol.format.GeoJSON();
var features_poligon2006_6 = format_poligon2006_6.readFeatures(json_poligon2006_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligon2006_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligon2006_6.addFeatures(features_poligon2006_6);
var lyr_poligon2006_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligon2006_6, 
                style: style_poligon2006_6,
                interactive: true,
                title: '<img src="styles/legend/poligon2006_6.png" /> poligon2006'
            });

lyr_2022shp_0.setVisible(true);lyr_2019_1.setVisible(true);lyr_2016shp_2.setVisible(true);lyr_2014shp_3.setVisible(true);lyr_2011_4.setVisible(true);lyr_2009_5.setVisible(true);lyr_poligon2006_6.setVisible(true);
var layersList = [lyr_2022shp_0,lyr_2019_1,lyr_2016shp_2,lyr_2014shp_3,lyr_2011_4,lyr_2009_5,lyr_poligon2006_6];
lyr_2022shp_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', 'area': 'area', });
lyr_2019_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', 'Area': 'Area', });
lyr_2016shp_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', 'Area': 'Area', });
lyr_2014shp_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', 'area': 'area', });
lyr_2011_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Наиме': 'Наиме', 'Стран': 'Стран', 'Облас': 'Облас', 'Впада': 'Впада', 'Вытек': 'Вытек', 'Тип': 'Тип', 'Площа': 'Площа', 'Объём': 'Объём', 'Абсол': 'Абсол', 'Берег': 'Берег', 'Средн': 'Средн', 'Наибо': 'Наибо', 'Площ_1': 'Площ_1', });
lyr_2009_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Наиме': 'Наиме', 'Стран': 'Стран', 'Облас': 'Облас', 'Впада': 'Впада', 'Вытек': 'Вытек', 'Тип': 'Тип', 'Площа': 'Площа', 'Объём': 'Объём', 'Абсол': 'Абсол', 'Берег': 'Берег', 'Средн': 'Средн', 'Наибо': 'Наибо', 'Площ_1': 'Площ_1', });
lyr_poligon2006_6.set('fieldAliases', {'fid_1': 'fid_1', 'DN': 'DN', 'Name': 'Name', 'area': 'area', 'country': 'country', 'тип в�': 'тип в�', 'реки': 'реки', });
lyr_2022shp_0.set('fieldImages', {'fid': '', 'DN': '', 'Name': '', 'area': '', });
lyr_2019_1.set('fieldImages', {'fid': '', 'DN': '', 'Name': '', 'Area': '', });
lyr_2016shp_2.set('fieldImages', {'fid': '', 'DN': '', 'Name': '', 'Area': '', });
lyr_2014shp_3.set('fieldImages', {'fid': '', 'DN': '', 'Name': '', 'area': '', });
lyr_2011_4.set('fieldImages', {'OBJECTID': '', 'Наиме': '', 'Стран': '', 'Облас': '', 'Впада': '', 'Вытек': '', 'Тип': '', 'Площа': '', 'Объём': '', 'Абсол': '', 'Берег': '', 'Средн': '', 'Наибо': '', 'Площ_1': '', });
lyr_2009_5.set('fieldImages', {'OBJECTID': '', 'Наиме': '', 'Стран': '', 'Облас': '', 'Впада': '', 'Вытек': '', 'Тип': '', 'Площа': '', 'Объём': '', 'Абсол': '', 'Берег': '', 'Средн': '', 'Наибо': '', 'Площ_1': '', });
lyr_poligon2006_6.set('fieldImages', {'fid_1': '', 'DN': '', 'Name': '', 'area': '', 'country': '', 'тип в�': '', 'реки': '', });
lyr_2022shp_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Name': 'no label', 'area': 'no label', });
lyr_2019_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Name': 'no label', 'Area': 'no label', });
lyr_2016shp_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Name': 'no label', 'Area': 'no label', });
lyr_2014shp_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Name': 'no label', 'area': 'no label', });
lyr_2011_4.set('fieldLabels', {'OBJECTID': 'no label', 'Наиме': 'no label', 'Стран': 'no label', 'Облас': 'no label', 'Впада': 'no label', 'Вытек': 'no label', 'Тип': 'no label', 'Площа': 'no label', 'Объём': 'no label', 'Абсол': 'no label', 'Берег': 'no label', 'Средн': 'no label', 'Наибо': 'no label', 'Площ_1': 'no label', });
lyr_2009_5.set('fieldLabels', {'OBJECTID': 'no label', 'Наиме': 'no label', 'Стран': 'no label', 'Облас': 'no label', 'Впада': 'no label', 'Вытек': 'no label', 'Тип': 'no label', 'Площа': 'no label', 'Объём': 'no label', 'Абсол': 'no label', 'Берег': 'no label', 'Средн': 'no label', 'Наибо': 'no label', 'Площ_1': 'no label', });
lyr_poligon2006_6.set('fieldLabels', {'fid_1': 'no label', 'DN': 'no label', 'Name': 'no label', 'area': 'no label', 'country': 'no label', 'тип в�': 'no label', 'реки': 'no label', });
lyr_poligon2006_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});