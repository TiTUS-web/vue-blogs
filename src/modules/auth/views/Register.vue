<template>
    <form class="register" action="#">

        <h2 class="title register__title">Create Your Blog Account</h2>

        <div class="container register__container">
            <div class="block firstname__block">
                <input 
                  class="input register__input register__input--firstname" 
                  type="text" 
                  placeholder="First Name" 
                  name="firstname" 
                />
            </div>
            <div class="block lastname__block">
                <input 
                  class="input register__input register__input--lastname" 
                  type="text" 
                  placeholder="Last Name" 
                  name="lastname" 
                />
            </div>
            <div class="block email__block">
                <input 
                  class="input register__input register__input--email" 
                  type="text" 
                  placeholder="Email" 
                  name="email" 
                />
            </div>
            <div class="block password__block">
                <input 
                  class="input register__input register__input--password" 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                />

                <img 
                  class="icon-hide" 
                  src="@/assets/icons/password--hide.svg" 
                  alt="password--hide"
                >
            </div>
            <div class="block repeat__block">
                <input 
                  class="input register__input register__input--repeat" 
                  type="password" 
                  placeholder="Repeat Password" 
                  name="repeat" 
                />

                <img 
                  class="icon-hide" 
                  src="@/assets/icons/password--hide.svg" 
                  alt="repeat--hide"
                >
            </div>
        </div>
        
        <p class="text register__text">Forgot your password?</p>
        <p class="text register__text">Already have an account? Sign in</p>

        <button class="button register__button" type="submit">Sign Up</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Register',
});
</script>