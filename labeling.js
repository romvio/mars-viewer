import { marsLabels } from 'assets/marsLabels_2.js';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3OWY2YTM5OS05MzRhLTRjYjUtOGIzNS04NGFhOWQ5NzkxNzkiLCJpZCI6MzA3MTQzLCJpYXQiOjE3NDg0Mzc2Njh9.-Ht_KaU6h829k1UDY8jwzu2o5KyUO7PTzC-biOQMJHU';
const marsEllipsoid = new Cesium.Ellipsoid(3396190,3396190,3396190);
const viewer = new Cesium.Viewer('cesiumContainer',{ imageryProvider: false,
      baseLayerPicker: false,
      geocoder: false,
      timeline: false,
      animation: false,
      infoBox: false,
      navigationHelpButton: false,
      homeButton: false,
      sceneModePicker: true,
      fullscreenButton: false,
      shouldAnimate: true,
      automaticallyTrackDataSourceClocks: false,
      globe: new Cesium.Globe(marsEllipsoid),
      sceneMode: Cesium.SceneMode.SCENE3D, });

viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(-135,18,200_000) });

marsLabels.forEach(site => {
  viewer.entities.add({
    name: site.name,
    position: Cesium.Cartesian3.fromDegrees(site.lon, site.lat, 0, marsEllipsoid),
    label: {
      text: site.name,
      font: '18px MarsFont',
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 2,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    },
    properties: { blurb: site.blurb, img: site.img }
  });
});
