exports.handler = async function(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'bomi',
      age: 26,
      email: 'bomi@naver.com'
    })
  }
}
