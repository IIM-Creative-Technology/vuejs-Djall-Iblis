<template>
  <div class="content">
    <h1>{{ post.title }}</h1>

    <div class="blocMetaData">
      <div class="blocInfo">
        <p class="title">{{ post.title }}</p>
        <p class="title">{{ post.metaTitle }}</p>
        <p class="title">{{ post.metaDescription }}</p>
      </div>

      <div class="blocImg">
        <div class="image"><img :src="post.image" alt=""></div>
      </div>
    </div>

    <div class="blocPostBody">
      <p class="title">{{ post.body }}</p>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    index: Number,
  },
  computed: {
    post() {
      return typeof this.index !== 'undefined' && this.index !== null && this.$store.state.postList.length > this.index ? this.$store.state.postList[this.index] : {
        title: "",
        metaTitle: "",
        metaDescription: "",
        body: "",
        image: "",
        index: this.$store.state.nextIndex,
      };
    },
  },
  methods: {
    savePost(){
      this.$store.commit('savePost', this.post, this.index);
      this.$emit('edit', this.index);
    }
  },
}

</script>

<style scoped>

.blocMetaData {
  display: flex;
  width: 80%;
  margin: auto;
}

.blocInfo {
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 40% 0 20px ;
}

.title {
  width: 100%;
  margin: auto;
}

.blocImg {
  width: 30%;
  height: 150px;
  padding-top: 20px;
}

.image {
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 100px;
}

.image img {
  width: 150px;
  height: 150px;
}

.blocPostBody {
  margin-top: 150px;
  width: 70%;
  display: flex;
}

textarea {
  width: 500px;
  height: 250px;
}

.content {
  width: 80%;
  margin: auto;
  padding-top: 5px;
}
</style>