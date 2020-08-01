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
      <ul>
        <auth-link :provider="'Twitter'" />
        <auth-link :provider="'GitHub'" />
        <auth-link :provider="'AAD'" />
        <auth-link :provider="'Google'" />
        <auth-link :provider="'Facebook'" />
      </ul>
    </nav>
  </div>
</template>

<script>
import AuthLink from '../components/AuthLink'

export default {
  components: {
    AuthLink
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
</style>
