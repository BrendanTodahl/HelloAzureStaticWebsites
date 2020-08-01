<template>
  <div @click="go">{{ provider }}</div>
</template>

<script>
export default {
  props: ['provider'],
  methods: {
    go() {
      const pathName = window.location;
      const redirect = `post_login_redirect_uri=${pathName}`;
      const url = `/.auth/login/${this.provider.toLowerCase()}?${redirect}`;
      window.location.href = url;
    }
  }
}
</script>

<style>
</style>
