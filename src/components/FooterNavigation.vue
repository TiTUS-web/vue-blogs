<template>
    <footer class="footer">
        <nav class="nav footer__nav">
            <div class="branding nav__branding">
                <router-link 
                    class="link branding__link" 
                    :style="{color: '#fff'}"
                    to="#" 
                >
                    VueBlogs
                </router-link>
            </div>
        </nav>
    </footer>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterNavigation',
  setup() {
    return {
        
    };
  },
});
</script>
