<template>
  <div class="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
    <HelloWorld msg="Welcome to Tic-Tac-Toe game" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <p v-if="!$auth.isAuthenticated">You must log in before use app</p>
    <p v-if="!$auth.isAuthenticated">Now you can play Tic-Tac_toe game.</p>
    <p>Have a nice time!</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};

</script>
