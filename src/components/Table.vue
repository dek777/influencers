<template>
  <div class="table">
    <div class="table__header">
      <p class="table__header-cell table__header-cell_influencer">Информация</p>
      <p class="table__header-cell" @click="sortByFollowers">
        Подписчиков <span class="table__arrow">&#9660;</span>
      </p>
      <p class="table__header-cell" @click="sortByER">
        ER <span class="table__arrow">&#9660;</span>
      </p>
    </div>
    <div class="table__body">
      <TableRow
        v-for="(influencer, i) in influencers"
        :key="i"
        :influencer="influencer"
      />
    </div>
  </div>
</template>

<script>
import TableRow from "@/components/TableRow.vue";

export default {
  data(){
    return{
      sortByFollowersReverse: true,
      sortByErReverse: true
    }
  },
  props: {
    influencers: {
      type: [Array, Object],
    },
  },
  methods: {
    sortByFollowers() {
      if (this.sortByFollowersReverse){
        this.sortByFollowersReverse = false;
        return this.influencers.sort((a, b) => a.followers - b.followers);
      }
      this.sortByFollowersReverse = true;
      return this.influencers.sort((a, b) => b.followers - a.followers);
    },
    sortByER() {
      if (this.sortByErReverse){
        this.sortByErReverse = false;
        return this.influencers.sort((a, b) => a.er - b.er);
      }
      this.sortByErReverse = true;
      return this.influencers.sort((a, b) => b.er - a.er);
    },
  },
  components: {
    TableRow,
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  max-width: 900px;
  margin: 50px auto;
  background-color: #fff;
  padding: 50px;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  -moz-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.5);
}
@media(max-width: 920px){
  .table {
    padding: 15px;
  }
}

.table__header {
  display: flex;
  align-items: center;
  padding: 10px;
}

.table__header-cell {
  flex-basis: 33%;
  text-align: right;
  font-weight: 700;
  cursor: pointer;
}

.table__header-cell_influencer {
  text-align: left;
  cursor: default;
}

.table__arrow {
  font-size: 0.9rem;
}
</style>