<template>
  <div class="HomePage">
    <router-link to="/Detail">
      <div class="MainFeature">
        <div class="grid">
          <div class="14F left-1">
            Chance of Rain {{ weather.current.clouds }}%
          </div>
          <div class="twentyfourF left-2">
            {{ weather.current.weather[0].main }}
          </div>
          <div class="image">
            <img
              :src="`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`"
              width="122"
            />
          </div>
          <div class="fourteenF row-3">
            <img src="@/assets/Vector.png" height="12px" /> {{ city }}
          </div>
          <div class="twentyfourF footer-1">
            {{ weather.current.temp }} <sup class="sup">o F</sup>
          </div>
          <div class="twelveF CT footer-2">
            <img src="@/assets/rain.png" />
            {{ weather.current.clouds }}%
          </div>
          <div class="twelveF CT footer-3">
            <img src="@/assets/sun.png" />
            {{ weather.current.uvi }}
          </div>
          <div class="twelveF CT footer-4">
            <img src="@/assets/wind.png" />
            {{ weather.current.wind_speed }} mp/h
          </div>
        </div>
      </div>
    </router-link>
    <div class="NewsFeature"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["weather"],
  data: () => {
    return {
      city: localStorage.getItem("city"),
    };
  },
};
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
    background: linear-gradient(
      180deg,
      #3cd18a 0%,
      #3c6fd1 0.01%,
      #7ca9ff 100%
    );
    border-radius: 20px;
    color: #fff;
    .left-1 {
      grid-area: left-1;
      margin-top: -20px;
    }
    .left-2 {
      grid-area: left-2;
    }
    .image {
      grid-area: image;
      margin-top: -20px;
    }
    .row-3 {
      grid-area: row-3;
      margin-top: -20px;
      font-weight: 500;
    }
    .footer-1 {
      grid-area: footer-1;
      margin-bottom: 10px;
    }
    .footer-2 {
      grid-area: footer-2;
      margin-bottom: 5px;
    }
    .footer-3 {
      grid-area: footer-3;
      margin-bottom: 5px;
    }
    .footer-4 {
      grid-area: footer-4;
      margin-bottom: 5px;
    }
    .grid {
      display: grid;
      grid-template-areas:
        "left-0 left-0 image image"
        "left-1 left-1 image image"
        "left-2 left-2 image image"
        "left-4 left-4 image image"
        "row-3 row-3 row-3 row-3"
        "footer-1 footer-2 footer-3 footer-4";
      grid-gap: 10px;
      padding: 10px;
      text-align: left;
      align-items: center;
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
    img {
      height: 12px;
    }
  }
  .twelveF {
    font-size: 12px;
  }
}
</style>