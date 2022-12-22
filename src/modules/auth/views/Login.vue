<template>
    <form class="login" action="#">

        <h2 class="title login__title">Login to VueBlogs</h2>

        <div class="container login__container">
            <div class="block email__block">
                <input 
                  class="input login__input login__input--email" 
                  type="text" 
                  v-model="sEmail" 
                  placeholder="Email" 
                  name="email" 
                />
            </div>
            <div class="block password__block">
                <input 
                  class="input login__input login__input--password"
                  type="password" 
                  v-model="sPassword" 
                  placeholder="Password" 
                  name="password" 
                />

                <img
                  @click="toggleViewPassword" 
                  :class="{'icon-hide--active': !isPasswordHide}"
                  class="icon-hide" 
                  src="@/assets/icons/password--hide.svg" 
                  alt="password--hide"
                >
            </div>
        </div>

        <p v-if="sErrorMessageLogin" class="error register__error">{{ sErrorMessageLogin }}</p>
        
        <p class="text login__text">Forgot your password?</p>
        <p class="text login__text">Don't have an account? 
          <router-link to="/auth/register" class="link login__text--link">
            Register
          </router-link>
        </p>

        <button @click.prevent="login" class="button login__button" type="submit">Sign In</button>
    </form>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/auth';
import {useRouter} from 'vue-router';
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'Login',
  setup() {
    const $router = useRouter();
    const sEmail: Ref<string | null> = ref(null);
    const sPassword: Ref<string | null> = ref(null);

    let sErrorMessageLogin: Ref<string> = ref('');

    let isPasswordHide: Ref<boolean> = ref(true);

    function toggleViewPassword() {
      const passwordField: Ref<Element | null> = ref(document.querySelector('.login__input--password'));

      if (!passwordField.value) return;

      if (passwordField.value.getAttribute('type') === 'password') {
        passwordField.value.setAttribute('type', 'text');
        isPasswordHide.value = false;
      } else {
        passwordField.value.setAttribute('type', 'password');
        isPasswordHide.value = true;
      }
    }

    function firebaseSignIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
              sEmail.value as string, sPassword.value as string
        )
        .then(() => {
          sErrorMessageLogin.value = '';
          $router.push('/home/');
        })
        .catch((err) => {
          sErrorMessageLogin.value = 'Make sure your email and password are correct';
          console.error(err);
        });
    }

    function login() {
      sErrorMessageLogin.value = '';
      firebaseSignIn();
    }

    return {
      sEmail,
      sPassword,

      sErrorMessageLogin,

      isPasswordHide,

      login,
      toggleViewPassword,
    };
  }
});
</script>