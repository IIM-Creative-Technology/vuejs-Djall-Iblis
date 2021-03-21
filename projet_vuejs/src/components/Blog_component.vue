<template>
  <div class="content">
    <ul>
      <li v-for="(item, index) in postList" :key="index">
        <router-link to="/post/{{ item.metaTitle }}">
          <post v-bind:title="item.title"
                v-bind:metaDescription="item.metaDescription"
                v-bind:image="item.image"
                v-bind:index="index">
          </post>
        </router-link>
      </li>
    </ul>
  </div>


</template>

<script>
import Post_component from "@/components/Post_component";
import {mapState} from "vuex";

export default {
  components: {
    "post": Post_component,
  },
  computed: mapState( {
    postList: state => state.postList,
  }),
}
</script>

<style scoped>
.content {
  width: 80%;
  margin: auto;
  padding-top: 50px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>