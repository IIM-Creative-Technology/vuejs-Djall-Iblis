<template>
  <div class="post" v-if="$route.path.includes('/admin')">
    <div class="image">
      <img class="imgTest" :src="image" alt="image du post">
    </div>
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ metaDescription }}</p>
    </div>
    <div class="buttons">
      <button class="editButton" @click="$emit('edit', this.index)">Editer</button>
      <button class="deleteButton" @click="deletePost(this.index)">Supprimer</button>
    </div>
  </div>
  <div class="post" v-else>
    <div class="image">
      <img class="imgTest" :src="image" alt="image du post">
    </div>
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ metaDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    metaDescription: String,
    metaTitle: String,
    title: String,
    description: String,
    index: Number,
  },
  methods: {
    deletePost(index) {
      this.$store.commit('deletePost', index);
    }
  }
}

</script>

<style>
  .post {
    display: flex;
    width: 90%;
    padding: 20px;
    border: 2px solid black;
    margin: 10px auto auto;
  }

  .image {
    width: 25%;

  }

  .imgTest {
    width: 75px;
    height: 75px;
    background-color: blue;
  }

  .text {
    width: 50%;
    height: 100px;
    text-align: start;
  }

  .buttons {
    width: 25%;
  }
</style>

