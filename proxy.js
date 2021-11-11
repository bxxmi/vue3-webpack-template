// Proxy는 데이터를 가로채는 용
const user = {
  name: 'bomi' 
}

const proxyUser = new Proxy(user, {
  // Getter
  get(target, key) {
    // target은 user이다.
    return target[key] + '?!'
  },
  // Setter
  set(target, key, value) {
    console.log(target, key, value)
    target[key] = value
  }
})

console.log(proxyUser.name)
proxyUser.age = 26
console.log('user:', user)
