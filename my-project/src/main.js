import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import './style.css';
import {Feature, Map, Overlay, View} from 'ol/index';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Point} from 'ol/geom';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {useGeographic} from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import {Fill, Stroke, Style} from 'ol/style';
useGeographic();
//lon, lat N, E
const place = [15.8664639, 50.3836289];

const point = new Point(place);

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
        source: new VectorSource({
          features: [new Feature(point)],
        }),
        style: {
          'circle-radius': 9,
          'circle-fill-color': 'red',
        }
    }),
    new VectorLayer({
        source: new VectorSource({
          url: "https://openlayers.org/en/latest/examples/data/geojson/countries.geojson",
          format: new GeoJSON()
        }),
        style: new Style({
            stroke: new Stroke({
              color: 'red',
              width: 10,
            })
          }),
    })
  ],
  view: new View({
    center: place,
    zoom: 9
  })
});