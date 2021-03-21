import { createStore } from 'vuex'

export default createStore({
  state: {
      nextIndex: 1,
      postList: [],
  },
  mutations: {
    addPost(state, newPost) {
      state.postList.push(newPost);
    },
    increment(state) {
      state.nextIndex++;
    },
    deletePost(state, index) {
      state.postList.splice(index, 1);
    },
    savePost(state, post, index) {
      state.postList.splice(index, 1, post);
    }
  },
  actions: {
  },
  modules: {
  },
})
