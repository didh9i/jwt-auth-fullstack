<template>
  <login-form class="login-form" v-if="!auth.user"/>
  <div v-else class="user-form">

  </div>
  <div class="stack">
    <h2 @click="stackVisible = !stackVisible"> Stack {{ stackVisible ? '⏶' : '⏷' }} </h2>
    <div class="stack__dropdown" :style="{ maxHeight: !stackVisible ? '0' : '100vh', padding: !stackVisible ? '0' : '16px' }">
      <img alt="Vue logo" src="src/assets/logo.png" width="704" />
    </div>
  </div>
  <table v-if="users">
    <thead>
      <tr>
        <td>

        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>

        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
import useAuth from './store/auth'
import { ref } from 'vue'

const auth = useAuth()
const stackVisible = ref(false)
const users = ref(null)
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #BBB;
  font-family: -apple-system, 'SF Pro Text', Avenir, Helvetica, Arial, sans-serif;
}

html {
  background-color: #2b2b2b;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100vw, 600px);
  margin: 60px auto 0;
  gap: 16px;
  border-radius: 12px;
  padding: 16px;
  border: 2px solid #323232;
  background-color: #3C3F41;
  font-family: -apple-system, 'SF Pro Text', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  img {
    max-width: 100%;
  }
  .stack {
    display: flex;
    flex-flow: column;

    h2 {
      cursor: pointer;
      user-select: none;
    }

    .stack__dropdown {
      padding: 16px;
      overflow: hidden;
      transition: .3s;
    }
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 512px;
  margin: 0 auto;
  padding: 16px;
  gap: 8px;
  h1 {
    margin-bottom: 8px;
  }

  input {
    appearance: none;
    border: 1px solid #5E6060;
    outline: 0 solid #3D6185;
    height: 24px;
    font-size: 14px;
    padding: 3px 7px;
    color: #BBBBBB;
    font-weight: 500;
    background-color: #4C5052;
    border-radius: 1px;
    transition: .16s;
    width: 256px;
    margin: auto;

    &:focus, &:active {
      border: 1px solid #456A90;
      outline: 2px solid #3D6185;
    }

    &:invalid {
      border: 1px solid #73454B;
      outline: 2px solid #8B3C3C;
    }
  }

  button {
    appearance: none;
    border: 1px solid #5E6060;
    outline: 0 solid #3D6185;
    height: 24px;
    font-size: 14px;
    padding: 0 7px;
    color: #BBBBBB;
    font-weight: 500;
    background-color: #4C5052;
    border-radius: 4px;
    transition: .05s;
    width: 256px;
    margin: auto;

    &.primary {
      border: 1px solid #4C708C;
      background-color: #365880;
    }

    &:hover {

    }
    &:focus, &:active {
      border: 1px solid #456A90;
      outline: 2px solid #3D6185;
    }
  }
}
</style>
