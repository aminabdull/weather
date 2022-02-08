<template>
  <div class="HomePage">
    <div class="MainFeature">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round">
          <span class="left-span bluecolor" @click="$emit('togglefah')">Fahrenheit</span>
          <span class="right-span whitecolor" @click="$emit('togglecel')" >Celcius</span>
        </span>
      </label>
      <div class="img">
        <img :src="`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`" width="122" />
      </div>
      <div class="suhu">{{ weather.current.temp }}<sup class="sup">o</sup></div>
      <div class="coordinate">
        {{ weather.lat }}, {{ weather.lon }}
      </div>
      <div class="description">
        {{ weather.current.weather[0].main }}
      </div>
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail Component Part I",
  props: ["weather", "date"],
};
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
      color: rgba($color: #3c6fd1, $alpha: 0.7);
    }
    .whitecolor {
      color: rgba($color: #fff, $alpha: 0.5);
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
  background-color: rgba($color: #ffffff, $alpha: 0.3);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 120px;
    left: 4px;
    bottom: 4px;
    background-color: rgba($color: #ffffff, $alpha: 0.5);
    -webkit-transition: 0.4s;
    transition: 0.4s;
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
  color: #363b64;
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
    background-color: #fff;
    border-radius: 50%;
  }
  .MainFeature {
    color: #fff;
    width: 100%;
    .suhu {
      font-weight: 400;
      font-size: 36px;
      line-height: 54px;
      text-align: center;
      color: #ffffff;
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