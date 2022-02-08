<template>
  <div class="container hundredvh graylight">
    <div class="head">
      <TopbarSearch />
    </div>
    <div class="row">
      <div class="wrap">
        <div class="search">
          <img src="@/assets/magnifier.png" />
          <input
            type="text"
            class="searchTerm"
            placeholder="Search City"
            v-model="query"
            @keypress="fetcn"
          />
        </div>
      </div>
    </div>
    <div class="openstreetmap">
      <l-map
        style="height: 100vh"
        :zoom="zoom"
        :center="center"
        @click="onMapClick"
      >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker
          v-for="(location, index) in locations"
          :lat-lng="location.position"
          v-bind:key="index"
        >
          <l-popup :content="location.name"></l-popup>
        </l-marker>
        <l-marker ref="marker" :lat-lng="[newLt, newLng]" :icon="icon">
          <l-popup
            ref="popup"
            :content="newLoc"
            :options="{ autoClose: false, closeOnClick: false }"
          ></l-popup>
        </l-marker>
      </l-map>
    </div>
    <div class="bottomsearch">
      <div class="row">
        <div class="col70 titlecity">
          <img src="@/assets/pointblack.png" /> {{ city }}
        </div>
        <div class="col30 titletemp">
          <img :src="`https://openweathermap.org/img/wn/${iconCloud}@2x.png`" />
          {{ temp }}<sup>o</sup>
        </div>
        <div class="hr"></div>
        <div class="col70">
          <div class="row">
            <div class="col100 title">Longitude and latitude</div>
            <div class="col100 desc">{{ lat }}, {{ long }}</div>
          </div>
        </div>
        <div class="col30">
          <div class="row">
            <div class="col100 title">Wind</div>
            <div class="col100 desc">{{ speed }} mp/h</div>
          </div>
        </div>
        <div class="col100">
          <button @click="b">Change Location</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import TopbarSearch from "@/components/TopbarSearch.vue";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.imagePath = "";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  name: "Openstreetmap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    TopbarSearch,
  },
  data: () => ({
    zoom: 15,
    center: L.latLng(localStorage.getItem("lat"), localStorage.getItem("long")),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    newLoc: "",
    newLt: 0,
    newLng: 0,
    weather: [],
    locations: [
      {
        name: "",
        position: [localStorage.getItem("lat"), localStorage.getItem("long")],
      },
    ],
    icon: L.icon({ iconUrl: "null" }),
    lat: localStorage.getItem("lat"),
    long: localStorage.getItem("long"),
    api_key: "fdf871cedaf3413c6a23230372c30a02",
    url_base: "https://api.openweathermap.org/data/2.5/",
    query: "",
    city: "",
    iconCloud: "",
    temp: "",
    speed: "",
  }),
  mounted() {
    this.$nextTick(() => {
      this.$refs.marker.leafletObject.openPopup();
    });
    this.newLoc = this.locations[0].name;
    this.newLt = this.locations[0].position[0];
    this.newLng = this.locations[0].position[1];
    fetch(
      `${this.url_base}weather?lat=${this.lat}&lon=${this.long}&units=Imperial&APPID=${this.api_key}`
    )
      .then((res) => {
        return res.json();
      })
      .then(this.setResults);
      if (!localStorage.getItem("city")) {
        this.$router.push({ name: "Home" });
      }
  },
  methods: {
    onMapClick(e) {
      (this.query = "lat=" + e.latlng.lat + "&lon=" + e.latlng.lng),
        fetch(
          `${this.url_base}weather?${this.query}&units=Imperial&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
    },
    b() {
      if (this.query != "") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=Imperial&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    fetcn(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=Imperial&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
      this.locations = [
        {
          name: results.name,
          position: [results.coord.lat, results.coord.lon],
        },
      ];
      this.center = L.latLng(results.coord.lat, results.coord.lon);
      this.city = results.name;
      this.speed = results.wind.speed;
      this.temp = results.main.temp;
      this.iconCloud = results.weather[0].icon;
    },
  },
};
</script>
<style lang="scss" scoped>
.leaflet-popup-close-button {
  display: none;
}
.bottomsearch {
  position: fixed;
  bottom: 0;
  z-index: 100000;
  background: #ffffff;
  width: 100%;
  height: 239px;
  max-width: 600px;
  border-radius: 20px 20px 0px 0px;
  .row {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    padding: 25px;
    text-align: left;
    button {
      width: calc(100% - 50px);
      margin: 30px 25px;
      background: linear-gradient(
        180deg,
        #3cd18a 0%,
        #3c6fd1 0.01%,
        #7ca9ff 100%
      );
      border-radius: 24px;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      letter-spacing: 0.3px;
      color: #ffffff;
      padding: 5px;
    }
    .titlecity {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.3px;
      color: #363b64;
      display: flex;
      align-items: center;
      img {
        height: 16px;
        margin-right: 10px;
      }
    }
    .titletemp {
      font-weight: 400;
      font-size: 19px;
      line-height: 28px;
      letter-spacing: 0.3px;
      color: #363b64;
      display: flex;
      align-items: center;
      sup {
        vertical-align: super;
        font-size: 14px;
        margin-top: -12px;
      }
      img {
        width: 45px;
        margin-right: 5px;
      }
    }
    .title {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.3px;
      color: #a098ae;
    }
    .desc {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.3px;
      color: #363b64;
    }
  }
  .col70 {
    width: 70%;
    .row {
      padding: 0;
    }
  }
  .col30 {
    width: 30%;
    .row {
      padding: 0;
    }
  }
  .col100 {
    width: 100%;
  }
  .hr {
    border: 0.5px solid #a098ae;
    width: 100%;
    margin: 15px 0;
  }
}
.search {
  width: 345px;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    margin: 15px 0 0 15px;
    left: 0;
  }
}

.searchTerm {
  width: 345px;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 5px 5px 5px 45px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.003em;
  color: #363b64;
  &:focus {
    color: #363b64;
  }
  &:placeholder {
    margin-left: 30px;
  }
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>