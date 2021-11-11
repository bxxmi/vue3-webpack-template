<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import axios from 'axios'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  },
  async created() {
    const { data } = await axios({
      url: './netlify/functions/test',
      method: 'GET'
    })
    console.log(data)
  }
}
</script>
