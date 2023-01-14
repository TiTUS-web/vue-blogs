<template>
  <header-navigation />
  <main class="content app__content">
      <router-view />
  </main>
  <footer-navigation />
</template>

<script lang="ts">
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import FooterNavigation from '@/components/FooterNavigation.vue';

import firebase from 'firebase/app';
import 'firebase/auth';

import { useStore } from 'vuex';
import { defineComponent } from 'vue';
import { ActionTypes, MutationTypes } from '@/types/auth';

export default defineComponent({
  name: 'VueBlogs',
  components: {
    HeaderNavigation,
    FooterNavigation,
  },
  setup() {
    const store = useStore();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.commit(MutationTypes.updateUser, user);
        store.dispatch(ActionTypes.getCurrentUser);
      }
    });
  },
});
</script>
