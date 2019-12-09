import axios from 'axios'

export function request3(config) {
  const instance = axios.create({
    baseURL: 'https://autumnfish.cn',
    timeout: 5000
  })

  instance(config.baseConfig).then(res => {
    config.success(res)
  }).catch(err => {
    config.failure(err)
  })
}



export function request4(config) {
  const instance = axios.create({
    baseURL: 'https://autumnfish.cn',
    timeout: 5000
  })
  return instance(config)
}
