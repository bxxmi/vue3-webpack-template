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
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    async logIn() {
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
    }
  }
}

</script>
