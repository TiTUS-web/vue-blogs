<template>
    <form class="recover" action="#">

        <h2 class="title recover__title">Recover password</h2>

        <p class="text recover__text recover__text--center recover__text--bottom">
            Forgot your password ? Enter your email to recover your password
        </p>

        <div class="container recover__container">
            <div class="block email__block">
                <input 
                  class="input recover__input recover__input--email" 
                  type="text" 
                  v-model="sEmail" 
                  placeholder="Email" 
                  name="email" 
                />
            </div>
        </div>

        <p v-if="sErrorMessageRecover" class="error recover__error">{{ sErrorMessageRecover }}</p>
        <p v-show="sSuccessMessageRecover" class="text recover__text recover__text--success">{{ sSuccessMessageRecover }}</p>
        
        <button @click.prevent="recover" class="button recover__button">Recover</button>
    </form>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/auth';

import {useRouter} from 'vue-router';
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'Recover',
  setup() {
    const $router = useRouter();
    const sEmail: Ref<string | null> = ref(null);

    let sErrorMessageRecover: Ref<string> = ref('');
    let sSuccessMessageRecover: Ref<string> = ref('');

    function firebaseRecover() {
      firebase
        .auth()
        .sendPasswordResetEmail(sEmail.value as string)
        .then(() => {
          sErrorMessageRecover.value = '';
          sSuccessMessageRecover.value = 'If your account exists, you will receive an email';
          $router.push('/auth/login');
        })
        .catch((err) => {
          sSuccessMessageRecover.value = '';
          sErrorMessageRecover.value = 'Make sure your email are correct';
          console.error(err);
        });
    }

    function recover() {
      if (!sEmail.value) {
        sErrorMessageRecover.value = 'Make sure your email and password are correct';
      }

      firebaseRecover();
    }

    return {
      sEmail,
      sErrorMessageRecover,
      sSuccessMessageRecover,

      recover,
    };
  }
});


</script>