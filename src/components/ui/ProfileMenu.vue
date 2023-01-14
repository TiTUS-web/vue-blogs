<template>
    <div class="menu profile__menu">
        <ul class="list menu__list">
            <li class="item menu__item">
                <router-link class="link menu__link" to="/profile">Profile</router-link>
            </li>
            <li class="item menu__item">
                <button @click="signOut" class="button menu__button">Sign Out</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/auth';

import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    
    function signOut() {
      firebase.auth().signOut();
      window.location.reload();
      window.location.replace('/auth/login');
    }

    return {
      store,
      signOut,
    };
  },
});
</script>
