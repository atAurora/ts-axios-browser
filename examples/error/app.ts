import axios, { AxiosError } from '../../src/index'


axios({
  url: '/error/get'
}).then((res) => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log(e.config)
  console.log(e.code)
})

setTimeout(() => {
  axios({
    url: '/error/get'
  }).then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
}, 5000)

axios({
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})
