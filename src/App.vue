<template>
  <div class="d-flex flex-column min-vh-100">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>


<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { useAuthStore } from '@/stores/AuthStore';

export default {
  setup() {
    const AuthStore = useAuthStore();
    // localStorage.setItem('token', 'lolya ngm');
    const token = localStorage.getItem('token')
    console.log('token = ',token);
    if (token !== null ) {
      AuthStore.isAuth = true;
      AuthStore.token = localStorage.getItem('token');
      console.log(token);
    }
    return {
      // you can return the whole store instance to use it in the template
      AuthStore,
    }
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: var(--bs-body-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ebf1f2;
}
</style>
