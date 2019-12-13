import {
  request4,
  request3,
  get
} from './request'

//歌曲搜索
export function getMusic(keywords) {
  return request4({
    url: '/search',
    params: {
      keywords
    }
  })
}
// 歌曲热搜推荐
export function getSearchHot() {
  return get({
    url: 'search/hot/detail'
  })
}
//歌曲地址
export function getMusicUrl(id) {
  return request4({
    url: '/song/url',
    params: {
      id
    }
  })
}
//歌曲详情
export function getMusicCover(ids) {
  return request4({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
//歌曲评论
export function getMusicComment(type, id) {
  return request4({
    url: '/comment/hot',
    params: {
      type,
      id
    }
  })
}
//mv
export function getMusicMv(id) {
  return request4({
    url: '/mv/url',
    params: {
      id
    }
  })
}

// export class Music {
//   constructor() {
//     this.title = "",
//       this.author = "",
//       this.url = "",
//       this.pic = "",
//       this.lrc = ""
//   }
// }
