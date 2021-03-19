<template>
  <div class="buttonCreate">
    <button>Créer une page</button>
  </div>

  <div class="content">
    <post image="logo.png" text="{{ text }}"></post>
    <post image="logo.png" text="Lorem Ipsum"></post>
    <post image="logo.png" text="Lorem Ipsum"></post>


  </div>


</template>

<style scoped>
  .buttonCreate {
    width: 100%;
    height: 50px;
  }

  .content {
    width: 80%;
    height: 500px;
    margin: auto;
    background-color: grey;
    padding-top: 5px;

  }

</style>

<script>
import Post_component from "@/components/Post_component";
// import { mapState } from 'vuex'

export default {
  components: {
    "post": Post_component,
  },
  data() {
    return {
      text: "LoL", //this.$store.state.text
    }
  },
  computed: {

  }
}
</script>