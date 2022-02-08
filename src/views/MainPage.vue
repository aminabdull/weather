<template>
  <div
    class="container hundredvh"
    :class="navOpen === true ? 'bluelight' : ''"
  >
    <Topbar @togglenav="navOpen = !navOpen" :open="navOpen" />
    <Sidebar :open="navOpen" />
    <transition name="show">
      <HomePage :weather="weather" />
    </transition>
    <News />
    <News />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import HomePage from "@/components/HomePage.vue";
import News from "@/components/News.vue";
export default {
  name: "MainPage",
  data: () => {
    return {
      navOpen: false,
      api_key: "fdf871cedaf3413c6a23230372c30a02",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: JSON.parse(localStorage.getItem("weather")),
      lat: localStorage.getItem("lat"),
      long: localStorage.getItem("long"),
      date: "",
      units: "Fahrenheit",
      met: "Imperial",
    };
  },
  components: {
    Topbar,
    Sidebar,
    HomePage,
    News,
  },
  async mounted() {
    this.lat = localStorage.getItem("lat");
    this.long = localStorage.getItem("long");
    (this.query = "lat=" + this.lat + "&lon=" + this.long),
      fetch(
        `${this.url_base}onecall?${this.query}&units=${this.met}&APPID=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
  },
  methods: {
    setResults(results) {
      this.weather = results;
      this.date = this.dateBuilder();
    },
  },
};
</script>

