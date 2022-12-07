<template>
<div class="app">
  <header-navigation />
  <router-view/>
</div>
</template>

<script lang="ts">
import HeaderNavigation from '@/components/HeaderNavigation.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueBlogs',
  components: {
    HeaderNavigation,
  },
});
</script>
