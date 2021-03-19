<template>
  <div class="content">
    <h1>Créer une nouvelle page de blog</h1>

    <div class="blocMetaData">
      <div class="blocInfo">
        <p class="title">Titre de la page :</p>
        <label class="input">
          <input type="text">
        </label>
        <p class="title">Meta Title :</p>
        <label class="input">
          <input type="text">
        </label>
        <p class="title">Meta Description :</p>
        <label class="input">
          <input type="text">
        </label>
      </div>

      <div class="blocImg">
        <div class="image"></div>
        <p>Ajouter une image</p>

      </div>
    </div>

    <div class="blocPostBody">
      <p class="title">Meta Description :</p>
      <label class="input">
        <input type="textarea">
      </label>
    </div>

  </div>

</template>

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
  width: 50%;
  margin: auto;
}

.input {
  width: 50%;
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
  background-color: green;
  margin: auto;
  border-radius: 100px;
}

.blocPostBody {
  width: 100%;
  justify-content: start;
}

.content {
  width: 80%;
  height: 500px;
  margin: auto;
  background-color: grey;
  padding-top: 5px;
}

</style>
