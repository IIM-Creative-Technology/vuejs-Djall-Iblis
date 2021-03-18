<template>
  <div class="post">
    <div class="image">
      <img class="imgTest" src="{{ image }}" alt="image du post">
    </div>
    <div class="text">
      <p>
        {{ text }}
      </p>
    </div>
    <div class="buttons">
      <button class="editButton">Edit</button>
      <button class="deleteButton">Delete</button>
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
    width: 50px;
    height: 50px;
    background-color: blue;
  }

  .text {
    width: 50%;
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
        text: String,
    }
  }

</script>