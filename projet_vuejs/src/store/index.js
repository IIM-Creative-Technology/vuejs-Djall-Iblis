import { createStore } from 'vuex'

export default createStore({
  state: {
      postList: []
  },
  mutations: {
    addPost(state, newPost) {
      state.postList.push(newPost);
    }
  },
  actions: {
  },
  modules: {
  }
})
