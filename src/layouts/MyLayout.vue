<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" aria-label="Menu" />
        <q-toolbar-title>
          <div class="q-px-lg q-pt-xt q-mb-md">
            <div class="text-h3">My App</div>
            <div class="text-subtitle1">{{ todaysDate }}</div>
          </div>
          <q-img src="statics/mountains.jpg" class="header-image absolute-top"></q-img>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="600">

      <q-scroll-area
        style="height: calc(100% - 194px); margin-top: 194px; border-right: 1px solid #ddd"
      >
        <q-list padding>
        <q-item-label header>Applications</q-item-label>

          <q-item to="/todo" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="matMenu" />
            </q-item-section>
            <q-item-section>Todo</q-item-section>
          </q-item>

          <q-item to="/blogs" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="matMenu" />
            </q-item-section>
            <q-item-section>Blogs</q-item-section>
          </q-item>

          <q-item to="/show" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="thumb_up" />
            </q-item-section>
            <q-item-section>ShowBlogs</q-item-section>
          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section>Help</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="statics/mountains.jpg" style="height: 194px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Adrian Balint</div>
          <div>@BBoysCluj</div>
        </div>
      </q-img>

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from "quasar";
import Vue from "vue";

export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    todaysDate() {
      // this.$forceUpdate();
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd D MMMM");
    }
  }
};
</script>

