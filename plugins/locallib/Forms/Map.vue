<template>
  <div class="">
    <!-- <v-autocomplete label="Pais" solo rounded flat></v-autocomplete> -->
    <v-textarea
      v-model="textInputValue"
      auto-grow
      label="Dirección"
      :prepend-inner-icon="isHome ? 'mdi-home' : 'mdi-office-building'"
      flat
      rounded
      solo
      @input="searchTrigger"
    >
    </v-textarea>
    <v-alert v-if="result && isHome">
      <v-icon> mdi-alert </v-icon>
      Falta el número del departamento, si es una casa omita este mensaje
      <div class="text-right">
        <v-btn
          color="blue"
          text
          class="text-none"
          style="letter-spacing: 0"
          @click="inputDpto"
          >Introducir departamento</v-btn
        >
      </div>
    </v-alert>
    <div
      v-show="textInputValue"
      style="overflow: hidden; border-radius: 30px; height: 300px"
    >
      <div ref="map" style="height: 350px"></div>
    </div>
    <v-icon v-show="result" ref="mapMarker" color="blue">
      {{ isHome ? "mdi-home" : "mdi-office-building" }}
    </v-icon>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import qs from "qs";
import lodash from "lodash";
const key = "AIzaSyDsnEDQhFAAeI70VBUxgDUE2b5r0057ODc";
const styles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];
export default {
  components: {},
  props: { value: { type: Object, default: () => ({}) } },
  data() {
    return {
      map: {},
      makers: [],
      textInputValue: "",
      result: undefined,
    };
  },
  computed: {
    isHome() {
      return (
        this.result &&
        !this.result.address_components.find((a) =>
          a.types.includes("subpremise")
        )
      );
    },
  },
  watch: {
    value: {
      handler() {
        if (this.value.formatted_address) {
          this.textInputValue = this.value.formatted_address;
        }

        if (this.value.coordinates) {
          if (this.map) {
            this.map.setCenter({
              lat: this.value.coordinates[1],
              lng: this.value.coordinates[0],
            });
          }
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      const loader = new Loader({
        apiKey: key,
        version: "weekly",
        libraries: ["places"],
      });
      const mapOptions = {
        styles,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,

        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 4,
      };
      loader.load().then(() => {
        this.map = new window.google.maps.Map(this.$refs.map, mapOptions);
      });
    });
  },
  methods: {
    inputDpto() {
      this.$dialog
        .prompt({
          text: "Ingrese el número del departamento",
          actions: {
            cancel: "Cancelar",
            search: { text: "Ingresar", color: "primary" },
          },
        })
        .then((value) => {
          this.textInputValue = this.textInputValue.replace(
            /(\n|$)/i,
            "\nDPTO " + value + "\n"
          );
          this.searchTrigger();
        });
    },
    emit() {
      this.$emit("input", {
        type: "Point",
        coordinates: [
          this.result.geometry.location.lng,
          this.result.geometry.location.lat,
        ],
      });
    },
    setMarker(latLng) {
      const ctx = this;
      function HTMLMarker({ lat, lng }) {
        this.lat = lat;
        this.lng = lng;
        this.draggable = true;
        this.pos = new window.google.maps.LatLng(lat, lng);
      }

      HTMLMarker.prototype = new window.google.maps.OverlayView();
      HTMLMarker.prototype.onRemove = function () {};

      HTMLMarker.prototype.onAdd = function () {
        const div = ctx.$refs.mapMarker.$el;
        const panes = this.getPanes();
        panes.overlayImage.appendChild(div);
      };

      HTMLMarker.prototype.draw = function () {
        const overlayProjection = this.getProjection();
        const position = overlayProjection.fromLatLngToDivPixel(this.pos);
        const panes = this.getPanes();
        panes.overlayImage.style.left = position.x + "px";
        panes.overlayImage.style.top = position.y - 30 + "px";
      };

      // to use it
      const htmlMarker = new HTMLMarker(latLng);
      htmlMarker.setMap(this.map);
    },
    searchTrigger: lodash.debounce(function () {
      const query = {
        key,
        address: this.textInputValue,
      };
      fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?" +
          qs.stringify(query)
      )
        .then((a) => a.json())
        .then(({ results }) => {
          if (results.length) {
            this.result = results[0];
            this.textInputValue = this.result.formatted_address.replace(
              /(, )/gi,
              "\n"
            );
            this.map.setCenter(this.result.geometry.location);
            this.map.setZoom(17);
            this.setMarker(this.result.geometry.location);
            this.emit();
          }
        });
    }, 2000),
  },
};
</script>
