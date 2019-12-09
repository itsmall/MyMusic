import {
  request4,
  request3
} from './request'


export function getMusic(keywords) {
  return request4({
    url: '/search',
    params: {
      keywords
    }
  })
}
