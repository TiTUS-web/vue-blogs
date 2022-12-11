<template>
    <div class="home">
      <new-post></new-post>
      <list-posts></list-posts>
    </div>
</template>

<script lang="ts">
import NewPost from '@/modules/home/components/NewPost.vue';
import ListPosts from '@/modules/home/components/ListPosts.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    NewPost,
    ListPosts
  },
  setup() {
    return {
            
    };
  },
});
</script>
