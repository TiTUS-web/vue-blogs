<template>
  <header-navigation />
  <main class="content app__content">
      <router-view />
  </main>
  <footer-navigation />
</template>

<script lang="ts">
import HeaderNavigation from '@/components/ui/HeaderNavigation.vue';
import FooterNavigation from '@/components/ui/FooterNavigation.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueBlogs',
  components: {
    HeaderNavigation,
    FooterNavigation,
  },
});
</script>
