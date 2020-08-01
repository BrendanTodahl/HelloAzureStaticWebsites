<template>
  <div @click="go">Logout</div>
</template>

<script>
export default {
  methods: {
    go() {
      const pathName = window.location;
      const redirect = `post_logout_redirect_uri=${pathName}`;
      const url = `/.auth/logout?${redirect}`;
      window.location.href = url;
    }
  }
}
</script>

<style>
</style>
