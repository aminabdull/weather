<template>
  <div class="topbar" :class="open === true ? 'whitefont' : ''">
    <div v-if="open === true">
      <img src="@/assets/backwhite.png" @click="$emit('togglenav')" />
    </div>
    <div v-else>
      <img src="@/assets/menu.png" @click="$emit('togglenav')" />
    </div>
    <div>
      {{ city }}
    </div>
    <div v-if="open === true">
      <img src="@/assets/setwhite.png" />
    </div>
    <div v-else>
      <img src="@/assets/set.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["open"],
  data: () => {
    return {
      city: localStorage.getItem("city"),
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
}
</style>