import axios from 'axios'

export default async function () {
  // console.time('타이머 이름'): api 받아오는 시간을 알 수 있음
  console.time('Bomi')
  const token = sessionStorage.getItem('accessToken')
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'KimBoMi',
      authorization: `Bearer ${token}`
    }
  })
  // console.timeEnd('타이머 이름'): 끝내는 콘솔도 있어야한다.
  console.timeEnd('Bomi')
  return data
}
