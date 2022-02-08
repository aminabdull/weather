<template>
  <div class="topbar">
    <div>
      <router-link to="/MainPage">
        <img src="@/assets/backblack.png" />
      </router-link>
    </div>
    <div>Change Location</div>
    <div>
      <img src="@/assets/set.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["open"],
  data: () => {
    return {
      navElements: ["user", "cogs", "th", "share-alt", "star", "comment"],
    };
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 10px 19px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.003em;
  color: #363b64;
  .icon {
    cursor: pointer;
  }
  .icon-circle {
    width: 32px;
    height: 32px;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    color: #fff;
    background-color: #fff;
    border-radius: 50%;
  }
}
</style>