<template>
  <div class="post" v-if="$route.path.includes('/admin')">
    <div class="image">
      <img class="imgTest" src="{{ image }}" alt="image du post">
    </div>
    <div class="text">
      <p>
        {{ metaTitle }}
        {{ metaDescritpon }}
      </p>
    </div>
    <div class="buttons">
      <button class="editButton">Edit</button>
      <button class="deleteButton">Delete</button>
    </div>
  </div>
  <div class="post" v-else>
    <div class="image">
      <img class="imgTest" src="{{ image }}" alt="image du post">
    </div>
    <div class="text">
      <p>
        {{ metaTitle }}
        {{ metaDescritpon }}
      </p>
    </div>
  </div>
</template>

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

<script>
  export default {
    props: {
        image: String,
        metaDescritpon: String,
        metaTitle: String,
    }
  }

</script>