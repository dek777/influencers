<template>
  <div class="row__wrap">
    <a :href="influencer.profileUrl" class="row__cell row__info">
      <img :src="influencer.avatarUrl" class="row__avatar" />
      <p class="row__name">@{{influencer.name}}</p>
    </a>
    <p class="row__cell row__followers">{{influencer.followers}}</p>
    <p class="row__cell row__er">{{influencer.er/100}}%</p>
  </div>
</template>

<script>
export default {
  props: {
    influencer: {
      type: [Array, Object]
    }
  },
}
</script>

<style scoped>
.row__wrap{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #ddd;
}

.row__wrap:hover{
  transition: all 0.1s ease;
  background-color: rgba(221, 221, 221, 0.2);
}

.row__avatar{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
}

.row__info{
  display: flex;
  align-items: center;
}
@media(max-width: 680px){
  .row__info{
    align-items: flex-start;
    flex-direction: column;
  }
}

.row__wrap:hover .row__avatar{
  transition: all 0.1s ease;
  transform: scale(1.1);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  -moz-box-shadow:    2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  box-shadow:         2px 2px 5px 0px rgba(50, 50, 50, 0.5);
}

.row__cell{
  flex-basis: 33%;
  text-align: right;
}

</style>