<template>
    <div class="home">
        <blog-post></blog-post>
    </div>
</template>

<script lang="ts">
import BlogPost from '@/modules/home/components/BlogPost.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    BlogPost
  },
  setup() {
    return {
            
    };
  },
});
</script>
