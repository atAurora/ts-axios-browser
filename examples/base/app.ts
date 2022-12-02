import axios from '../../src/index'

axios({
  url: '/base/get',
  params: {
    a: [1,2,3],
    b: '@:S'
  }
})

axios({
  url: '/base/post',
  method: 'post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
})

let arr = new Int32Array([21, 31])
axios({
  url: '/base/buffer',
  method: 'post',
  data: arr
}).then((res) => {
  console.log(res)
})
