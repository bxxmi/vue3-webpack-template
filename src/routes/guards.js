import auth from '~/utils/auth'
import router from './index'
import store from '~/store'

// 로그인 한 사용자 정보를 가져오기
router.beforeEach(async () => {
  try {
    const user = await auth()
    console.log(user)

    store.commit('user/assignState', {
      currentUser: user
    })
  // error: 하나의 객체 데이터
  } catch (error) {
    console.log(error.response.data)
  }
})
