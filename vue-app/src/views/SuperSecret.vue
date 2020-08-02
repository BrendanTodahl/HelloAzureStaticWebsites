<template>
  <div>
    <h2>Super Secret</h2>
    <div v-if="!errorMessage">
      {{ superSecret }}
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
      superSecret: '',
      errorMessage: ''
    }
  },
  async created() {
    this.superSecret = await this.getSuperSecret()
  },
  methods: {
    async getSuperSecret() {
      try {
        const response = await axios.get('api/super-secret')
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
