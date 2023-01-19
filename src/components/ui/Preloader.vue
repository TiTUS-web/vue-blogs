<template>
    <div class="preloader">
        <div 
          class="loader preloader__loader" 
          :style="{
            width: `${size}px`,
            height: `${size}px`,
            'border': `${size / 5}px solid #333333`,
            'border-top': `${size / 5}px solid #1eb8b8`,
          }"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
 
export default defineComponent({
  props: {
    size: {
      default: 25,
    },
  },
  name: 'Preloader',
});
</script>

