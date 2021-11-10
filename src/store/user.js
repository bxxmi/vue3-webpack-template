export default {
  // 모듈이라고 명시
  namespaced: true,
  state: () => ({
    currentUser: null
  }),
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  }
}
