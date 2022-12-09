<template>
    <div class="home">
        <list-posts></list-posts>
    </div>
</template>

<script lang="ts">
import ListPosts from '@/modules/home/components/ListPosts.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    ListPosts
  },
  setup() {
    return {
            
    };
  },
});
</script>
