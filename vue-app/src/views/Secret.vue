<template>
  <div>
    <div v-if="!errorMessage">
      {{ secret }}
    </div>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      secret: '',
      errorMessage: ''
    }
  },
  async created() {
    this.secret = await this.getSecret()
  },
  methods: {
    async getSecret() {
      try {
        const response = await axios.get('api/secret')
        if (response.status !== 200) throw Error(response.message)
        return response.data
      } catch (error) {
        this.errorMessage = 'Unauthorized'
      }
    }
  }
}
</script>

<style>
</style>
