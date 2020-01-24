<template>
  <div>
    <h5>{{ blog.title }}</h5>
    <article>
      <div>{{ blog.content }}</div>
    </article>
    <p class="text-h5">Author:{{ blog.author }}</p>
    <ul>
      <li v-for="category in blog.categories" v-bind:key="category">
        Category: {{ category }}
      </li>
    </ul>
    <!-- Logout button -->

  <div class="action">
    <q-btn
      v-go-back=" '/' "
      color="primary"
      label="Home  "
      icon="home"
    />
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("https://bboysclujfb1.firebaseio.com/posts/" + this.id + ".json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      })
  }
};
</script>
