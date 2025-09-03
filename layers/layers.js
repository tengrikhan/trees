var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'НП',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> НП'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Села',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Села'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'дерев': 'дерев', 'Год о�': 'Год о�', });
lyr__2.set('fieldAliases', {'Село': 'Село', 'Год о�': 'Год о�', 'Церко': 'Церко', 'Год п�': 'Год п�', 'Соста': 'Соста', 'Ссылк': 'Ссылк', });
lyr__1.set('fieldImages', {'дерев': 'TextEdit', 'Год о�': 'TextEdit', });
lyr__2.set('fieldImages', {'Село': 'TextEdit', 'Год о�': 'TextEdit', 'Церко': 'TextEdit', 'Год п�': 'TextEdit', 'Соста': 'TextEdit', 'Ссылк': 'TextEdit', });
lyr__1.set('fieldLabels', {'дерев': 'no label', 'Год о�': 'no label', });
lyr__2.set('fieldLabels', {'Село': 'no label', 'Год о�': 'no label', 'Церко': 'no label', 'Год п�': 'no label', 'Соста': 'no label', 'Ссылк': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});