<template>
  <div class="container bluelight hundredvh" @click="keypress">
    <div class="splashcontent verticalcenter">
      <img src="@/assets/cloud.png" v-if="next === true" />
      <div class="title" v-if="next === true">Gerimis</div>
      <div class="description" v-if="next === true">
        Dont worry about <br />
        the weather we all here <br />
        <span>Click Anywhere To Go To The Next Page </span>
      </div>
      <div class="description" v-else>Please Allow Geo Location on Browser</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      api_key: "fdf871cedaf3413c6a23230372c30a02",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      lat: "",
      long: "",
      next: false,
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        localStorage.setItem("lat", position.coords.latitude);
        localStorage.setItem("long", position.coords.longitude);
        this.next = true;
      },
      (error) => {
        console.log(error.message);
      }
    );
  },
  methods: {
    keypress() {
      this.lat = localStorage.getItem("lat");
      this.long = localStorage.getItem("long");
      this.query = "lat=" + this.lat + "&lon=" + this.long;
      fetch(
        `${this.url_base}onecall?${this.query}&units=Imperial&APPID=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
      fetch(
        `${this.url_base}weather?${this.query}&units=Imperial&APPID=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults2);
    },
    setResults(results) {
      this.weather = results;
      localStorage.setItem("weather", JSON.stringify(results));
    },
    setResults2(results) {
      localStorage.setItem("city", results.name);
      if (!localStorage.getItem("city")) {
        this.$router.push({ name: "Home" });
      } else {
        this.$router.push({ name: "MainPage" });
      }
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
      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>


