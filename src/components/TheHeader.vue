<template>
  <header>
    <RouterLink to="/">
      Home.
    </RouterLink>
    <RouterLink to="/about">
      About.
    </RouterLink>
    <template v-if="!currentUser">
      <RouterLink to="/signup">
        SignUp
      </RouterLink>
      <RouterLink to="/login">
        LogIn
      </RouterLink>
    </template>
    <div v-if="currentUser">
      <div
        :style="{ backgroundImage: `url(${currentUser.profileImg})`}"
        class="profile-img"></div>
      {{ currentUser.displayName }}
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
  .profile-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    // cover와 contain 차이 명확하게 알아두기
    background-size: cover;
  }
}
</style>
