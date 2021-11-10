<template>
  <input
    v-model="id"
    type="text" />
  <input
    v-model="pw"
    type="password" />
  <button @click="logIn">
    로그인
  </button>
  <!-- <Loader v-if="loading" /> 구문도 가능 -->
  <Loader :loading="loading" />
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: '',
      pw: '',
      loading: false 
    }
  },
  methods: {
    async logIn() {
      if (this.loading) return
      this.loading = true
      // 예외처리
      try {
        const res = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110',
          'username': 'KimBoMi'
        },
        data: {
          email: this.id,
          password: this.pw
        }
      })
      console.log(res.data.accessToken)
      sessionStorage.setItem('accessToken', res.data.accessToken)
      this.$router.push('/')
      } catch (error) {
        console.log(error.response.data)
      } finally {
        this.loading = false 
      }
    }
  }
}

</script>
