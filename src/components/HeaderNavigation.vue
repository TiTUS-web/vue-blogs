<template>
    <header class="header">
        <nav class="nav header__nav">
            <div class="branding nav__branding">
                <router-link 
                  class="link branding__link" 
                  to="/"  
                >
                  VueBlogs
                </router-link>
            </div>
            <div class="links nav__links">
                <div v-show="!bMobileMode" class="list links__list">
                    <template v-if="!isEmpty(oProfile)">
                      <router-link class="link list__link" to="#">Create Post</router-link>
                      <div class="profile" @click="showProfileMenu">
                        <span class="initials profile__initials">
                          {{oProfile.initials}}
                        </span>
                        <ProfileMenu v-show="bShowProfileMenu"></ProfileMenu>
                      </div>
                    </template> 

                    <template v-else>
                      <router-link class="link list__link" to="/auth/login">Login / Register</router-link>
                    </template>
                </div>
            </div>
        </nav>

        <svg class="icon menu--icon" v-show="bMobileMode" @click="toggleMobileNavigation"  aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#fff" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627  0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12  12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z">
          </path>
        </svg>

        <transition name="list-mobile">
            <div v-show="bMobileToggle" class="list-mobile links__list-mobile">
                <router-link class="link list__link list__link--mobile" to="/">Home</router-link>
                <router-link class="link list__link list__link--mobile" to="#">Blogs</router-link>
                <router-link class="link list__link list__link--mobile" to="#">Create Post</router-link>
                <router-link class="link list__link list__link--mobile" to="/auth/login">Login/Register</router-link>
            </div>
        </transition>
    </header>
</template>

<script lang="ts">
import ProfileMenu from '@/components/ui/ProfileMenu.vue';

import isEmpty from '@/utils/isEmpty';
import { computed, defineComponent, ref, Ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HeaderNavigation',
  components: {
    ProfileMenu,
  },
  setup() {
    const store = useStore();

    let bMobileMode: Ref<boolean | null> = ref(null);
    let bMobileToggle: Ref<boolean | null> = ref(null);
    let iWindowWidth: Ref<number | null> = ref(null);
    let bShowProfileMenu: Ref<boolean> = ref(false);

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

    function showProfileMenu() {
      bShowProfileMenu.value = !bShowProfileMenu.value;
    }

    return {
      oProfile: computed(() => store.state.auth.oProfile),

      bMobileMode,
      bMobileToggle,
      bShowProfileMenu,
        
      checkScreen,
      toggleMobileNavigation,
      showProfileMenu,
      isEmpty,
    };
  },
});
</script>
