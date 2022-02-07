<template>
  <div class="container hundredvh graylight">  
    <div class="head">
    <Topbar @togglenav="navOpen = !navOpen" :open="navOpen" />  
    <Detail />
    </div>
    <Detail2 />
  </div>
</template>

<script>
import Topbar from '@/components/TopbarDetail.vue'
import Detail from '@/components/Detail.vue'
import Detail2 from '@/components/Detail2.vue'
export default {
  name: 'MainPage',
  data: () => {
    return {
      navOpen: false
    }
  },
  components: {
    Topbar,
    Detail,
    Detail2,
  }
}
</script>

<style lang="scss" scoped>
  .head {
    background: linear-gradient(180deg, #3CD18A 0%, #3C6FD1 0.01%, #7CA9FF 100%);
    border-radius: 0 0 20px 20px;   
  } 
</style>
