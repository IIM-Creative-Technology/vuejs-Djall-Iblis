<template>
  <router-link to="/createNewPage" class="buttonCreate">Créer une page</router-link>

  <div class="main">
    <div :class="['content', {'reduce':isReduce}]">
      <ul>
        <li v-for="(item, index) in postList" :key="index">
          <post v-bind:title="item.title"
                v-bind:metaDescription="item.metaDescription"
                v-bind:image="item.image"
                v-bind:index="index"
                v-on:edit="editPost($event, index)">
          </post>
        </li>
      </ul>
    </div>

    <editPost v-show="isReduce" v-bind:index="editIndex" v-on:edit="editPost($event)"></editPost>
  </div>



</template>

<script>
import Post_component from "@/components/Post_component"
import { mapState } from 'vuex'
import editPost_compenent from "@/components/editPost_component";

export default {
  components: {
    "post": Post_component,
    "editPost": editPost_compenent,
  },
  data() {
    return {
      isReduce: false,
      editIndex: null,
    }
  },
  computed: mapState( {
    postList: state => state.postList,
  }),
  methods: {
    editPost(index) {
      this.isReduce = !this.isReduce;
      this.editIndex = index;
    }
  },

}
</script>

<style scoped>
  .main {
    display: flex;
    margin-top: 50px;
  }

  .buttonCreate {
    width: 100%;
    height: 50px;
    text-align: end;
    text-decoration: none;
    color: black;
    border: 2px solid grey;
    background-color: lightgrey;
    padding: 5px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .content {
    width: 80%;
    margin: auto;
    padding-top: 50px;
  }

  .reduce {
    width: 50%;
    margin: 0;
  }

</style>

