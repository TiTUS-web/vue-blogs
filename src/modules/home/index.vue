<script lang="ts">
import Posts from '@/modules/home/components/Posts.vue';
import Popular from '@/modules/home/components/Popular.vue';

import {defineComponent} from 'vue';

export default defineComponent({
  components: {
    Posts,
    Popular,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <section class="home">
    <div class="content home__content">
      <posts />
    </div>
    <popular />
  </section>
</template>
