<template>
    <form class="register">

        <h2 class="title register__title">Create Your Blog Account</h2>

        <div class="container register__container">
            <div class="block firstname__block">
                <input 
                  class="input register__input register__input--firstname" 
                  type="text"
                  v-model="sFirstName" 
                  placeholder="First Name" 
                  name="firstname" 
                  required
                />
            </div>
            <div class="block lastname__block">
                <input 
                  class="input register__input register__input--lastname" 
                  type="text"
                  v-model="sLastName" 
                  placeholder="Last Name" 
                  name="lastname" 
                />
            </div>
            <div class="block username__block">
                <input 
                  class="input register__input register__input--username" 
                  type="text"
                  v-model="sUsername" 
                  placeholder="Username" 
                  name="username" 
                />
            </div>
            <div class="block email__block">
                <input 
                  class="input register__input register__input--email" 
                  type="text"
                  v-model="sEmail" 
                  placeholder="Email" 
                  name="email" 
                />
            </div>
            <div class="block password__block">
                <input 
                  class="input register__input register__input--password" 
                  type="password"
                  v-model="sPassword" 
                  placeholder="Password" 
                  name="password" 
                />

                <img 
                  class="icon-hide" 
                  :class="{'icon-hide--active': !isPasswordHide}" 
                  @click="toggleViewPassword"
                  src="@/assets/icons/password--hide.svg" 
                  alt="password--hide"
                >
            </div>
            <div class="block repeat__block">
                <input 
                  class="input register__input register__input--repeat" 
                  type="password"
                  v-model="sRepeatPassword" 
                  placeholder="Repeat Password" 
                  name="repeat" 
                />

                <img 
                  class="icon-hide"
                  :class="{'icon-hide--active': !isPasswordRepeatHide}"
                  @click="toggleViewPasswordRepeat" 
                  src="@/assets/icons/password--hide.svg" 
                  alt="repeat--hide"
                >
            </div>
        </div>


        <p v-if="sErrorMessageFirstName" class="error register__error">{{ sErrorMessageFirstName }}</p>
        <p v-if="sErrorMessageLastName" class="error register__error">{{ sErrorMessageLastName }}</p>
        <p v-if="sErrorMessageUsername" class="error register__error">{{ sErrorMessageUsername }}</p>
        <p v-if="sErrorMessageEmail" class="error register__error">{{ sErrorMessageEmail }}</p>
        <p v-if="sErrorMessagePassword" class="error register__error">{{ sErrorMessagePassword }}</p>
        <p v-if="sErrorMessageRepeatPassword" class="error register__error">{{ sErrorMessageRepeatPassword }}</p>
        
        <p class="text register__text">
          Already have an account? 
          <router-link to="/auth/login" class="link register__text--link">
            Sign in
          </router-link> 
        </p>

        <button @click.prevent="register" class="button register__button">Sign Up</button>
    </form>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '@/firebase/firebaseinit';
import CreateAccount from '@/classes/CreateAccount';

import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'Register',
  setup() {
    const verification: CreateAccount = new CreateAccount();

    const sFirstName: Ref<string | null> = ref(null);
    const sLastName: Ref<string | null> = ref(null);
    const sUsername: Ref<string | null> = ref(null);
    const sEmail: Ref<string | null> = ref(null);
    const sPassword: Ref<string | null> = ref(null);
    const sRepeatPassword: Ref<string | null> = ref(null);

    let sErrorMessageFirstName: Ref<string> = ref('');
    let sErrorMessageLastName: Ref<string> = ref('');
    let sErrorMessageUsername: Ref<string> = ref('');
    let sErrorMessageEmail: Ref<string> = ref('');
    let sErrorMessagePassword: Ref<string> = ref('');
    let sErrorMessageRepeatPassword: Ref<string> = ref('');


    let isPasswordHide: Ref<boolean> = ref(true);

    function toggleViewPassword() {
      const passwordField: Ref<Element | null> = ref(document.querySelector('.register__input--password'));

      if (!passwordField.value) return;

      if (passwordField.value.getAttribute('type') === 'password') {
        passwordField.value.setAttribute('type', 'text');
        isPasswordHide.value = false;
      } else {
        passwordField.value.setAttribute('type', 'password');
        isPasswordHide.value = true;
      }
    }

    let isPasswordRepeatHide: Ref<boolean> = ref(true);

    function toggleViewPasswordRepeat() {
      const passwordRepeatField: Ref<Element | null> = ref(document.querySelector('.register__input--repeat'));

      if (!passwordRepeatField.value) return;

      if (passwordRepeatField.value.getAttribute('type') === 'password') {
        passwordRepeatField.value.setAttribute('type', 'text');
        isPasswordRepeatHide.value = false;
      } else {
        passwordRepeatField.value.setAttribute('type', 'password');
        isPasswordRepeatHide.value = true;
      }
    }

    function registerValidation(): boolean {
      let bCheckError = false;
      sErrorMessageFirstName.value = '';
      sErrorMessageLastName.value = '';
      sErrorMessageUsername.value = '';
      sErrorMessageEmail.value = '';
      sErrorMessagePassword.value = '';
      sErrorMessageRepeatPassword.value = '';

      if (!verification.checkFirstNameValue(sFirstName.value as string)) {
        sErrorMessageFirstName.value = 'The first name must consist of the letters';
        bCheckError = true;
      }

      if (!verification.checkLastNameValue(sLastName.value as string)) {
        sErrorMessageLastName.value = 'The last name must consist of at least 3 letters';
        bCheckError = true;
      }

      if (!verification.checkUsernameValue(sUsername.value as string)) {
        sErrorMessageUsername.value = 'The username must consist of at least 5 letters';
        bCheckError = true;
      }

      if (!verification.checkEmailValue(sEmail.value as string)) {
        sErrorMessageEmail.value = 'The mail must be correct';
        bCheckError = true;
      }

      if (!verification.checkPasswordValue(sPassword.value as string)) {
        sErrorMessagePassword.value = 'The password must be 7 to 15 characters long, containing at least one number and a special character';
        bCheckError = true;
      }

      if (!verification.checkPasswordRepeatValue(sPassword.value as string, sRepeatPassword.value as string)) {
        sErrorMessageRepeatPassword.value = 'The repeat password must be appropriate';
        bCheckError = true;
      }

      if (bCheckError) return false;

      return true;
    }

    async function firebaseCreateUser() {
      const firebaseAuth = firebase.auth();
      const createUser = firebaseAuth.createUserWithEmailAndPassword(sEmail.value as string, sPassword.value as string);
      const result = await createUser;
      const dataBase = db.collection('users').doc(result.user?.uid);
      console.log(createUser);
      await dataBase.set({
        firstName: sFirstName.value,
        lastName: sLastName.value,
        username: sUsername.value,
        email: sEmail.value,
      });
    }

    function register() {
      if (!registerValidation()) {
        return;
      }

      firebaseCreateUser();
      
      this.$router.push('/home/');
    }

    return {
      sFirstName,
      sLastName,
      sUsername,
      sEmail,
      sPassword,
      sRepeatPassword,

      sErrorMessageFirstName,
      sErrorMessageLastName,
      sErrorMessageUsername,
      sErrorMessageEmail,
      sErrorMessagePassword,
      sErrorMessageRepeatPassword,

      isPasswordHide,
      isPasswordRepeatHide,

      register,
      toggleViewPassword,
      toggleViewPasswordRepeat,
    };
  }
});
</script>