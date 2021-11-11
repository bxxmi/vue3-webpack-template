<template>
  <h1>About page..</h1>
  <div>
    <input
      type="file"
      @change="selectFile" />
  </div>
  <div>
    <img
      :src="profileImgBase64"
      alt="이미지" />
  </div>
  <button @click="updateUser">
    수정하기
  </button>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      profileImgBase64: null
    }
  },
  methods: {
    selectFile(event) {
      const { files } = event.target
      // files는 유사배열이기 때문에 객체 리스트들을 담는 for ... of 사용해야한다
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', () => {
          console.log(reader.result)
          this.profileImgBase64 = reader.result
        })
      }
    },
    async updateUser() {
      const token = sessionStorage.getItem('accessToken')
      const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user',
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202110',
          'username': 'KimBoMi',
          authorization: `Bearer ${token}`
        },
        data: {
          profileImgBase64: this.profileImgBase64
        }
      })
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-item {
  margin-top: 100px;
}
</style>
