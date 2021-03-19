<template>
  <div class="content">
    <post image="logo.png" text="{{ text }}"></post>
    <post image="logo.png" text="Lorem Ipsum"></post>
    <post image="logo.png" text="Lorem Ipsum"></post>


  </div>


</template>

<style scoped>
.content {
  width: 80%;
  margin: auto;
  padding-top: 50px;
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