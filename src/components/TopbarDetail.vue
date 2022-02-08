<template>
  <div class="topbar">
    <div>
      <router-link to="/MainPage">
        <img src="@/assets/backwhite.png" />
      </router-link>
    </div>
    <div>
       {{city}}
    </div>
    <div>
      <img src="@/assets/dothorizontal.png"/>
    </div>

  </div>
</template>

<script>
  export default {
    props: [
      'open'
    ],
    data: () => {
      return {
        city: localStorage.getItem('city'),
      }
    },
  }
</script>

<style lang="scss" scoped>
  .topbar {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 10px 19px;
    color: #FFF;
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
      color: #FFF;
      background-color: #FFF;
      border-radius: 50%;
    }
  }
</style>