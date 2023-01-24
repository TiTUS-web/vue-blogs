<template>
    <div class="menu profile__menu">
        <ul class="list menu__list">
            <li class="item menu__item">
                <router-link class="link menu__link" to="/settings">Profile</router-link>
            </li>
            <li class="item menu__item">
                <button @click="signOut" class="button menu__button">Sign Out</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { ActionTypes } from '@/types/auth';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    
    function signOut() {
      store.dispatch(ActionTypes.signOut);
    }

    return {
      signOut,
    };
  },
});
</script>
