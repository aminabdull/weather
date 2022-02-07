<template>
  <div class="topbar" :class="open === true ? 'whitefont': ''">
    <div v-if="open === true">
      <img src="@/assets/backwhite.png" @click="$emit('togglenav')" />
    </div>
    <div v-else>
      <img src="@/assets/menu.png" @click="$emit('togglenav')" />
    </div>
    <div>
      Kec. Cimahi Tengah
    </div>
    <div v-if="open === true">
      <img src="@/assets/setwhite.png"/>
    </div>
    <div v-else>
      <img src="@/assets/set.png"/>
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
        navElements: [
          'user', 'cogs', 'th', 'share-alt', 'star', 'comment'
        ]
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
  }
</style>