import Vue from 'vue'
import Vuex from 'vuex'
import FieldService from '@/FieldService'
import Influencer from '@/models/Influencer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    influencers: [],
  },
  mutations: {
    SET_INFLUENCERS_TO_STATE: (state, influencers) => {
      state.influencers = influencers;
    }
  },
  actions: {
    async GET_INFLUENCERS({commit}){
      const fieldService = new FieldService();
      const influencers = await fieldService.getInfluencers();
      commit('SET_INFLUENCERS_TO_STATE', influencers);
    }
  },
  getters: {
    INFLUENCERS(state){
      return state.influencers;
    }
  },
  modules: {
  }
})
