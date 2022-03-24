<template>
  <form @submit.prevent="isLoginForm ? auth.login(email, password) : auth.registration(email, password)">
    <h1>
      {{ !isLoginForm ? 'Регистрация' : 'Логин' }}
    </h1>
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" minlength="3" maxlength="32" v-model="password" placeholder="Пароль">
    <button type="submit" class="primary">
      {{ !isLoginForm ? 'Зарегистрироваться' : 'Войти' }}
    </button>
    <button @click.prevent.stop="isLoginForm = !isLoginForm">
      {{ isLoginForm ? 'Регистрация' : 'Логин' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useAuth from '../store/auth'

const isLoginForm = ref(true)
const email = ref('')
const password = ref('')

const auth = useAuth()
</script>

<style lang="scss" scoped>

</style>
