<template>
  <div class="container hundredvh graylight">
    <div class="head">
      <Topbar @togglenav="navOpen = !navOpen" :open="navOpen" />
      <Detail
        @togglecel="(units = 'Celcius'), (met = 'metric'), b()"
        @togglefah="(units = 'Fahrenheit'), (met = 'Imperial'), b()"
        :weather="weather"
        :date="date"
      />
    </div>
    <Detail2 :weather="weather" :units="units" />
  </div>
</template>

<script>
import Topbar from "@/components/TopbarDetail.vue";
import Detail from "@/components/Detail.vue";
import Detail2 from "@/components/Detail2.vue";
export default {
  name: "Detail Page",
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
    Detail,
    Detail2,
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
    b() {
      fetch(
        `${this.url_base}onecall?${this.query}&units=${this.met}&APPID=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
      this.date = this.dateBuilder();
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${date} ${month} ${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  background: linear-gradient(180deg, #3cd18a 0%, #3c6fd1 0.01%, #7ca9ff 100%);
  border-radius: 0 0 20px 20px;
}
</style>
