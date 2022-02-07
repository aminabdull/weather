<template>
  <div class="HomePage">
      <div class="MainFeature">

        <label class="switch">
          <input type="checkbox">
          <span class="slider round">
            <span class="left-span bluecolor">Fahrenheit</span>
            <span class="right-span whitecolor">Celcius</span>
          </span>
        </label>
        <div class="img">
          <img src="@/assets/sunny.png" />
        </div>
        <div class="suhu">
          72<sup class="sup">o</sup>
        </div>
        <div class="coordinate">
          {{lat}}, {{long}}
        </div>
        <div class="description">
         Partly Cloudy
        </div>
        <div class="date">
         Tuesday, 24 August 2021        
        </div> 
      
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
      weather: {},
      lat: localStorage.getItem('lat'),
      long: localStorage.getItem('long'),
    }
  },
  mounted() {
    this.lat = localStorage.getItem('lat');
    this.long = localStorage.getItem('long');
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
.switch {
  position: relative;
  display: inline-block;
  width: 240px;
  height: 40px;
  input {
    opacity: 0;
    width: 0;
    height: 0;    
 }
  span {
    position: absolute;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.3px;    
    .left-span {
      position: absolute;
      top: 10px;
      left: 25px;      
    }
    .right-span {
      position: absolute;
      top: 10px;
      left: 155px;      
    }
    .bluecolor {
      color: rgba($color: #3C6FD1, $alpha: 0.7);
    }
    .whitecolor {
      color: rgba($color: #FFF, $alpha: 0.5);
    }
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #FFFFFF, $alpha: 0.3);
  -webkit-transition: .4s;
  transition: .4s;
  &:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 120px;
    left: 4px;
    bottom: 4px;
    background-color: rgba($color: #FFFFFF, $alpha: 0.5);
    -webkit-transition: .4s;
    transition: .4s;
  }
}

input:checked + .slider:before {
  -webkit-transform: translateX(120px);
  -ms-transform: translateX(120px);
  transform: translateX(120px);  
}

.slider.round {
  border-radius: 40px;
  &:before {
    border-radius: 40px;
  }
}


  .HomePage {
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
      color: #FFF;
      width: 100%;
      .suhu {
        font-weight: 400;
        font-size: 36px;
        line-height: 54px;
        text-align: center;
        color: #FFFFFF;
        margin: -30px 0 15px 0;
        .sup {
          vertical-align: super;
          font-size: 25px;
        }
      }
      .coordinate {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.3px;
        margin-bottom: 18px;
      }
      .description {
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.3px;
      }
      .date {
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.3px;
        margin-bottom: 30px;
      }
      .img {
        img {
          margin-left: -13px;
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