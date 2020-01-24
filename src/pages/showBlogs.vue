<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h4>All Blog Articles</h4>
    <input type="text" v-model="search" placeholder="search blogs" />

    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.title">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h5>{{blog.title | to_uppercase}}</h5>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>

<div >
    <q-btn
    v-go-back=" '/show' "
    color="primary"
    label="Home"
    square
    icon="home"

  />
  </div>
  </div>
</template>

<script>
import searchMixin from "../components/searchMixin";

export default
{
  data() {
    return {
      blogs: [],
      search: "",
      blog_href:""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://bboysclujfb1.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {},
  filters: {
    "to_uppercase": function(value) {
      return value.toUpperCase();
    },
    "snippet": function(value) {
	return value.slice(0, 100);
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
      }},
    theme:  {
      bind(el, binding) {
        if (binding.value == "wide") {
          el.style.maxWidth = "1200px";
        } else if (binding.value == "narrow") {
          el.style.maxWidth = "560px";
        }
        if (binding.arg == "column") {
          el.style.background = "#ddd";
          el.style.padding = "20px";
        }
      }}

  },

  mixins: [searchMixin]
}

</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 20px auto;
}

</style>
