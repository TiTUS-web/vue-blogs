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

import { useStore } from 'vuex';
import { defineComponent } from 'vue';
import { ActionTypes } from '@/types/auth';

export default defineComponent({
  name: 'VueBlogs',
  components: {
    HeaderNavigation,
    FooterNavigation,
  },
  setup() {
    const store = useStore();

    store.dispatch(ActionTypes.updateUser);
  },
});
</script>
