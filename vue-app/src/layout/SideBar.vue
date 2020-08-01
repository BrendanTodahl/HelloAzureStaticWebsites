<template>
  <div>
    <nav class="side-nav" role="navigation">
      <p>MENU</p>
      <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/secret">Secret</router-link>
          <router-link to="/super-secret">Super Secret</router-link>
      </ul>

      <p>AUTH</p>
      <ul v-if="!userInfo">
        <template v-for="provider in providers">
          <auth-login :key="provider" :provider="provider" />
        </template>
      </ul>
      <ul v-if="userInfo">
        <auth-logout />
      </ul>
      <div class="user" v-if="userInfo">
        <p>Welcome</p>
        <p>{{ userInfo.userDetails }} - {{ userInfo.identityProvider }}</p>
      </div>
    </nav>
  </div>
</template>

<script>
import AuthLogin from '../components/AuthLogin'
import AuthLogout from '../components/AuthLogout'

export default {
  components: {
    AuthLogin,
    AuthLogout
  },
  data() {
    return {
      userInfo: {
        type: Object,
        default() {},
      },
      providers: ['Twitter', 'GitHub', 'AAD', 'Google', 'Facebook']
    }
  },
  async created() {
    this.userInfo = await this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      } catch (error) {
        console.error('No profile could be found');
        return undefined;
      }
    },
  }
}
</script>

<style lang="scss">
.side-nav {
  margin-left: 2em;
}

ul {
  list-style: none;
  padding: 0;

  a, div {
    display: block;
    padding: 5px 10px;
    border-left: 1px solid #42b883;
    color: black;
  }

  a.active, a:hover, div.active, div:hover {
    cursor: pointer;
    background-color: #42b883;
    color: white;
    text-decoration: none;
  }
}

.user {
  font-size: 14px;
  color: grey;

  p {
    margin: 0;

    &:not(:first-of-type) {
      margin-left: 0.5em;
    }
  }
}
</style>
