class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // static 키워드가 붙은 메소드(=정적 메소드)를 사용할 때
  // 해당 메소드가 속한 클래스를 사용한다.
  // ex) console.log(User.div(매개변수));
  static div(fullName) {
    return fullName.split('');
  }
}

const bomi = new User('보미', '김');
console.log(User.div('김보미'));

function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
}

function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(456);
    }, 2000);
  });
}

async function xyz() {
  // Promise.all을 통해 Promise 인스턴스들을 넣으면 
  // 한꺼번에(=동시에) 순서대로 잘 실행된다.
  // 동시에 실행되어야 할 경우에 사용된다.
  const [x, y] = await Promise.all([a(), b()]);
  console.log(x, y);
}

xyz();
