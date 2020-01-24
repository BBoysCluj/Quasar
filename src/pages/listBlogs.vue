<template>
  <!-- column is an argument; theme is a custom directive; to-upercase and snippet are custom filters-->
  <div id="show-blogs">
    <h3>List Blog Titles</h3>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.title">
      <h5 v-rainbow>{{ blog.title | to_uppercase }}</h5>
    </div>
  </div>
</template>

<script>
import searchMixin from "../components/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  filters: {
    "to_uppercase": function(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
