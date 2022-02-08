<template>
  <div class="row">
    <img src="@/assets/1.png" />

    <div class="detail">
      <div class="title">
        Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature
      </div>
      <div class="time">14 minutes ago</div>
      <div class="author">R Media</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>


<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  padding: 10px 19px;
  color: #363b64;
  font-size: 16px;
  line-height: 24px;
  flex-wrap: wrap;
  img {
    width: 100%;
  }
  .detail {
    background: #eaeaea;
    text-align: left;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 0 0 20px 20px;
    .title {
      width: 100%;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.3px;
      color: #363b64;
      margin-bottom: 20px;
    }
    .time {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.3px;
      color: #a098ae;
    }
    .author {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      text-align: right;
      letter-spacing: 0.3px;
      color: #363b64;
    }
  }
}
</style>