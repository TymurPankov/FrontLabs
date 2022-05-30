<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="!$auth.isAuthenticated.value" to="/">Home</router-link>
            <router-link v-if="$auth.isAuthenticated.value" to="/game">Tic-Tac-Toe</router-link>
            | <router-link to="/about">About</router-link> |
            <router-link v-if="$auth.isAuthenticated.value" to="/profile">Profile</router-link>
            <div v-if="!$auth.loading.value">
                <button v-if="!$auth.isAuthenticated.value" @click="login">Log in</button>
                <button v-if="$auth.isAuthenticated.value" @click="logout">Log out</button>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        login() {
            this.$auth.loginWithRedirect();
        },
        logout() {
            this.$auth.logout();
            this.$router.push({ path: '/' });
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    display: flex;
    justify-content: center;
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 5px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
