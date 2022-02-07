<template>
  <div class="container hundredvh" :class="navOpen === true ? 'bluelight' : '' ">  
    <Topbar @togglenav="navOpen = !navOpen" :open="navOpen" />  
    <Sidebar :open="navOpen" />
    <transition name="show">
    <HomePage />
    </transition>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import HomePage from '@/components/HomePage.vue'
export default {
  name: 'MainPage',
  data: () => {
    return {
      navOpen: false
    }
  },
  components: {
    Topbar,
    Sidebar,
    HomePage
  }
}
</script>

