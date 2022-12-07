<template>
    <header class="header">
        <nav class="nav header__nav">
            <div class="branding nav__branding">
                <router-link class="link branding__link" to="#">VueBlogs</router-link>
            </div>
            <div class="links nav__links">
                <ul v-show="!bMobileMode" class="list links__list">
                    <router-link class="link list__link" to="#">Home</router-link>
                    <router-link class="link list__link" to="#">Blogs</router-link>
                    <router-link class="link list__link" to="#">Create Post</router-link>
                    <router-link class="link list__link" to="#">Login / Register</router-link>
                </ul>
            </div>
        </nav>

        <img
            class="icon menu--icon" 
            v-show="bMobileMode"
            @click="toggleMobileNavigation" 
            src="@/assets/icons/menu.svg" 
            alt="menu-icon" 
        />

        <transition name="list-mobile">
            <ul v-show="bMobileToggle" class="list-mobile links__list-mobile">
                <router-link class="link list__link list__link--mobile" to="#">Home</router-link>
                <router-link class="link list__link list__link--mobile" to="#">Blogs</router-link>
                <router-link class="link list__link list__link--mobile" to="#">Create Post</router-link>
                <router-link class="link list__link list__link--mobile" to="#">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'HeaderNavigation',
  setup() {
    let bMobileMode: Ref<boolean | null> = ref(null);
    let bMobileToggle: Ref<boolean | null> = ref(null);
    let iWindowWidth: Ref<number | null> = ref(null);

    window.addEventListener('resize', checkScreen);
    checkScreen();

    function checkScreen() {
      iWindowWidth.value = window.innerWidth;

      if (iWindowWidth.value <= 750) {
        bMobileMode.value = true;
        return;
      }

      bMobileMode.value = false;
      bMobileToggle.value = false;
      return;
    }

    function toggleMobileNavigation() {
      bMobileToggle.value = !bMobileToggle.value;
    }

    return {
      bMobileMode,
      bMobileToggle,
        
      checkScreen,
      toggleMobileNavigation,
    };
  },
});
</script>
