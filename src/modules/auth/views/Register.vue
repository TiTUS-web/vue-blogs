<script lang="ts">
import CreateAccount from '@/classes/CreateAccount';
import {useStore} from 'vuex';
import {computed, defineComponent, ref, Ref} from 'vue';
import {ActionTypes} from '@/types/auth';

export default defineComponent({
  name: 'Register',
  setup() {
    const store = useStore();
    const verification: CreateAccount = new CreateAccount();

    const sFirstName: Ref<string | null> = ref(null);
    const sLastName: Ref<string | null> = ref(null);
    const sUsername: Ref<string | null> = ref(null);
    const sEmail: Ref<string | null> = ref(null);
    const sPassword: Ref<string | null> = ref(null);

    let sErrorMessageFirstName: Ref<string> = ref('');
    let sErrorMessageLastName: Ref<string> = ref('');
    let sErrorMessageUsername: Ref<string> = ref('');
    let sErrorMessageEmail: Ref<string> = ref('');
    let sErrorMessagePassword: Ref<string> = ref('');

    let isPasswordHide: Ref<boolean> = ref(true);

    const inputPassword = ref(null);

    function toggleViewPassword() {
      if (!inputPassword.value) return;

      const passwordField: HTMLInputElement = inputPassword.value;

      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
        isPasswordHide.value = false;
      } else {
        passwordField.setAttribute('type', 'password');
        isPasswordHide.value = true;
      }
    }

    function registerValidation(): boolean {
      let bCheckError = false;
      sErrorMessageFirstName.value = '';
      sErrorMessageLastName.value = '';
      sErrorMessageUsername.value = '';
      sErrorMessageEmail.value = '';
      sErrorMessagePassword.value = '';

      if (!verification.checkFirstNameValue(sFirstName.value as string)) {
        sErrorMessageFirstName.value =
          'The first name must consist of the letters';
        bCheckError = true;
      }

      if (!verification.checkLastNameValue(sLastName.value as string)) {
        sErrorMessageLastName.value =
          'The last name must consist of at least 3 letters';
        bCheckError = true;
      }

      if (!verification.checkUsernameValue(sUsername.value as string)) {
        sErrorMessageUsername.value =
          'The username must consist of at least 5 letters';
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

      if (bCheckError) return false;

      return true;
    }

    function register() {
      if (!registerValidation()) {
        return;
      }

      const oCredentials = {
        sEmail: sEmail.value,
        sPassword: sPassword.value,
        sFirstName: sFirstName.value,
        sLastName: sLastName.value,
        sUsername: sUsername.value,
      };

      store.dispatch(ActionTypes.register, oCredentials);
    }

    return {
      isRegisterButtonLoading: computed(
        () => store.state.auth.isRegisterButtonLoading
      ),

      sFirstName,
      sLastName,
      sUsername,
      sEmail,
      sPassword,

      sErrorMessageFirstName,
      sErrorMessageLastName,
      sErrorMessageUsername,
      sErrorMessageEmail,
      sErrorMessagePassword,

      isPasswordHide,

      register,
      toggleViewPassword,

      inputPassword
    };
  },
});
</script>

<template>
  <section class="register">
      <form class="register-form">

        <h2 class="title register-form__title">Создайте свой аккаунт</h2>
        <p class="subtitle login-form__subtitle">Пожалуйста, введите свои данные для регистрации в системе</p>

        <div class="container register-form__container">
            <div class="block firstname__block">
                <input 
                  class="input register-form__input register-form__input--firstname" 
                  type="text"
                  v-model="sFirstName" 
                  placeholder="Имя" 
                  name="firstname" 
                  required
                />
            </div>
            <div class="block lastname__block">
                <input 
                  class="input register-form__input register-form__input--lastname" 
                  type="text"
                  v-model="sLastName" 
                  placeholder="Фамилия" 
                  name="lastname" 
                />
            </div>
            <div class="block username__block">
                <input 
                  class="input register-form__input register-form__input--username" 
                  type="text"
                  v-model="sUsername" 
                  placeholder="Имя пользователя" 
                  name="username" 
                />
            </div>
            <div class="block email__block">
                <input 
                  class="input register-form__input register-form__input--email" 
                  type="text"
                  v-model="sEmail" 
                  placeholder="Email" 
                  name="email" 
                />
            </div>
            <div class="block password__block">
                <input 
                  ref="inputPassword"
                  class="input register-form__input register-form__input--password" 
                  type="password"
                  v-model="sPassword" 
                  placeholder="Пароль" 
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
        </div>

        <p v-if="sErrorMessageFirstName" class="error register-form__error">{{ sErrorMessageFirstName }}</p>
        <p v-if="sErrorMessageLastName" class="error register-form__error">{{ sErrorMessageLastName }}</p>
        <p v-if="sErrorMessageUsername" class="error register-form__error">{{ sErrorMessageUsername }}</p>
        <p v-if="sErrorMessageEmail" class="error register-form__error">{{ sErrorMessageEmail }}</p>
        <p v-if="sErrorMessagePassword" class="error register-form__error">{{ sErrorMessagePassword }}</p>
        
        <button @click.prevent="register" :disabled="isRegisterButtonLoading" class="button register-form__button">Зарегистрироваться</button>

        <p class="text register-form__text">
          Уже есть аккаунт ?
          <router-link to="/auth/login" class="link register-form__text--link">
            Войти
          </router-link> 
        </p>
    </form>
  </section>
</template>
