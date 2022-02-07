<template>
  <div class="HomePage">
      <div class="Details">
        <div class="row">
          <div class="title">
            Details
          </div>
        </div>  
        <div class="row">
          <div class="col6">
            <div class="row whitedl">
              <div class="col4">
                <img src="@/assets/termo.png" />
              </div>
              <div class="col8">
                <div class="row">
                  <div class="col12 text">
                    72<sup class="sup">o</sup>
                  </div>          
                  <div class="col12 text2">
                    Fahrenheit
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div class="col6">
            <div class="row whitedl">
              <div class="col4">
                <img src="@/assets/windmed.png" />
              </div>
              <div class="col8">
                <div class="row">
                  <div class="col12 text">
                    134 mp/h
                  </div>          
                  <div class="col12 text2">
                    Pressure
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div class="col6">
            <div class="row whitedl">
              <div class="col4">
                <img src="@/assets/sunmed.png" />
              </div>
              <div class="col8">
                <div class="row">
                  <div class="col12 text">
                    0.2
                  </div>          
                  <div class="col12 text2">
                    UV Index
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div class="col6">
            <div class="row whitedl">
              <div class="col4">
                <img src="@/assets/rainmed.png" />
              </div>
              <div class="col8">
                <div class="row">
                  <div class="col12 text">
                    48%
                  </div>          
                  <div class="col12 text2">
                    Humidity
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
        </div>  
        <div class="row top10">
          <div class="title">
            Tips
          </div>
        </div>
        <div class="row">
          <div class="tips">
            <div class="texttips">
              It's ok to hangout with your friend
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
  .HomePage {
    display: block;
    flex-wrap: wrap;
    padding: 10px 19px;
    color: #363B64;
    font-size: 16px;
    line-height: 24px;  
    .Details {
      color: #363B64;
      padding: 20px 0 0 0;
      .title {
        font-size: 16px;
        line-height: 18px;
        text-align: left;
        width: 100%;
        margin-bottom: 8px;
      }
      .tips {
        background: linear-gradient(258.12deg, #FFFFFF 1.16%, rgba(255, 255, 255, 0) 192.15%);
        border-radius: 20px;
        color: #363B64;
        font-size: 14px;
        line-height: 25px;
        padding: 5px 10px;    
        width: 100%;
        display: flex;        
        .texttips {
          padding: 14px 0 0 10px;
        }
      }
      .tips::before{
        content:url('../assets/tips.png');
        padding-top: 10px;
      }
      .top10 {
        margin-top: 10px;
      }
      .row {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        .col6 {
          background: linear-gradient(258.12deg, #FFFFFF 1.16%, rgba(255, 255, 255, 0) 192.15%);
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          width: calc(50% - 10px);
          margin: 5px;
        }
        .col12 {
          width: 100%;
        }
        .col8 {
          width: 75%;
          .row {
            margin-left: 12px;
          }
        }
        .col4 {
          width: 25%;
          img {
            display: flex;
            align-items: center;
          }
        }
        .whitedl {
          text-align: left;
          padding: 20px;
        }
        .text {
          font-size: 16px;
          line-height: 16px;
          letter-spacing: 0.3px;
          color: #363B64;
              .sup {
                vertical-align: super;
                font-size: 10px;
              }
        }
        .text2 {
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.3px;
          color: #A098AE;
          margin-top: 5px;
        }
      }
    }
  }
</style>