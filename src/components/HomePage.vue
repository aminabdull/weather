<template>
  <div class="HomePage">
    <router-link
          to="/Detail"
    >
      <div class="MainFeature">
        <div class="grid">
            <div class="14F left-1">
              Chance of Rain 60%
            </div>          
            <div class="twentyfourF left-2">
              Party Cloudy
            </div>
            <div class="image">
              <img src="@/assets/sunny.png" />
            </div>
            <div class="fourteenF row-3">
              <img src="@/assets/Vector.png" height="12px"/> Kec. Cimahi Tengah
            </div>
            <div class="twentyfourF footer-1">
              72 <sup class="sup">o F</sup> 
            </div>
            <div class="twelveF CT footer-2">
              <img src="@/assets/rain.png" />
              10%
            </div>
            <div class="twelveF CT footer-3">
              <img src="@/assets/sun.png" />
              0.5
            </div>
            <div class="twelveF CT footer-4">
              <img src="@/assets/wind.png" />
              124 mp/h
            </div>
        </div>
      </div>
    </router-link>
    <div class="NewsFeature">

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      api_key: 'fdf871cedaf3413c6a23230372c30a02',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: 'reverse?lat=' + localStorage.getItem('latitude') + '&lon=' + localStorage.getItem('longitude'),
      weather: {}
    }
  },
  methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style lang="scss" scoped>
  .HomePage {
    a {
      text-decoration: none;
      cursor: pointer;
      width: 100%;
    }    
    display: flex;
    justify-content: space-between;
    padding: 10px 19px;
    color: #363B64;
    font-size: 16px;
    line-height: 24px;    
    .icon {
      cursor: pointer;
    }
    .icon-circle {
      width: 32px;
      height: 32px;
      padding: 5px;
      margin-left: 10px;
      cursor: pointer;
      color: #222;
      background-color: #FFF;
      border-radius: 50%;
    }
    .MainFeature {
      background: linear-gradient(180deg, #3CD18A 0%, #3C6FD1 0.01%, #7CA9FF 100%);
      border-radius: 20px;
      color: #FFF;
      .left-1 { grid-area: left-1; margin-top: -20px; }
      .left-2 { grid-area: left-2; }
      .image { grid-area: image; margin-top: -20px; }
      .row-3 { grid-area: row-3; margin-top: -20px; font-weight: 500; }
      .footer-1 { grid-area: footer-1; margin-bottom: 10px;}
      .footer-2 { grid-area: footer-2; margin-bottom: 5px; }
      .footer-3 { grid-area: footer-3; margin-bottom: 5px; }
      .footer-4 { grid-area: footer-4; margin-bottom: 5px; }
      .grid {
        display: grid;
        grid-template-areas:
          'left-0 left-0 image image'
          'left-1 left-1 image image'
          'left-2 left-2 image image'
          'left-4 left-4 image image'
          'row-3 row-3 row-3 row-3'
          'footer-1 footer-2 footer-3 footer-4';
        grid-gap: 10px;
        padding: 10px;
        text-align: left;
        align-items:center;
        align-self: center;
      }
      .image {
        img {
          padding-top: 20px;
        }
      }
    }
    .sup {
      vertical-align: super;
      font-size: 10px;
    }
    .twentyfourF {
      font-size: 24px;
    }
    .fourteenF {
      font-size: 14px;
    }
    .twelveF {
      font-size: 12px;
    }
  }
</style>