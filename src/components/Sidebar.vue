<template>

    <div class="sidebar" v-if="open">
     
          <div class="top">
              <div class="sidebar-element"><div class="title">Current Location</div></div>
              <div class="sidebar-element"><img src="@/assets/Vector.png"/><div class="desc">Kec. Cimahi Tengah</div></div>
          </div>
          <div class="middle">
              <div class="sidebar-element" @click="locatorButtonPressed"><img src="@/assets/VectorPlus.png" class="plus"/><div class="title">Add Location</div></div>
              <div class="sidebar-element"><img src="@/assets/Vector.png"/><div class="desc">Kec. Antapani</div></div>
              <div class="sidebar-element"><img src="@/assets/Vector.png"/><div class="desc">Kec. Arcamanik</div></div>
              <div class="sidebar-element"><img src="@/assets/Vector.png"/><div class="desc">Kec. Astana Anyar</div></div>
          </div>
          <div class="bottom">
            <a href="#" class="sidebar-element">
            settings
            </a>
            <a href="#" class="sidebar-element">
            share this app
            </a>
            <a href="#" class="sidebar-element">
            rate this app
            </a>
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
    methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          localStorage.setItem('lat', position.coords.latitude)
          localStorage.setItem('long', position.coords.longitude)
        },
        error => {
          console.log(error.message);
        },
      )   
    },
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 50px);
    padding: 0 19px 48px 19px;
    color: #fefefe;
    text-decoration: none;
    letter-spacing: 0.3px;
    .top {
        position: absolute;
        top: 12px;
            .sidebar-element {
                display: flex;
                margin-bottom: 16px;
                cursor: pointer;
                .title {
                    font-size: 14px;
                    line-height: 21px;
                    font-weight: 300;
                }
                .desc {
                    font-size: 18px;
                    line-height: 20px;
                    font-weight: 700;                    
                }
                img {
                    width: 14px;
                    padding-right: 13px;
                }
            }
    }
    .middle {
        position: absolute;
        top: 180px;
            .sidebar-element {
                display: flex;
                margin-bottom: 16px;
                cursor: pointer;
                .title {
                    font-size: 18px;
                    line-height: 27px;
                    font-weight: 700;
                }
                .desc {
                    font-size: 18px;
                    line-height: 27px;
                    font-weight: 300;                    
                }
                img {
                    width: 14px;
                    padding-right: 13px;
                }
                img.plus {
                    width: 19px;
                    padding-right: 8px;
                }
            }
    }
    .bottom {
        position: absolute;
        bottom: 152px;
            .sidebar-element {
                display: flex;
                margin-bottom: 16px;
                cursor: pointer;
                font-size: 18px;
                line-height: 24px;
                color: #fefefe;
                text-decoration: none;
                letter-spacing: 0.3px;
            }
    }
  }
  .show {
    &-enter, &-leave-to {
      opacity: 0;
      transform: translateX(-60px);
    }
    &-enter-active, &-leave-active {
      transition: all 500ms;
    }
  }
  .fade {   
    &-enter {
      opacity: 0;
      transform: translateX(-60px);
    }
    &-enter-active { 
      transition: all 500ms ease-in-out;
      transition-delay: calc( 50ms * var(--index) );
    }   
  }
</style>