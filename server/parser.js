const axios = require('axios')
let out

module.exports = {

  urlType(url) {
    let n = url.match(/www\.(\S*)\./)
    return n ? n[1].substring(0,8) : null
  }

}



// let cid
// // 解析哔哩哔哩
// router.get('/bili/', async ctx => {
//   let start = ctx.query.url
//
//
//   start = start.replace('www.', 'm.')
//
//   axios.get(start).then(res => {
//     let avid = res.data.match(/aid(\S*)cid/)
//     cid = res.data.match(/cid(\S*)cover/)
//     if (avid && cid) {
//       avid = avid[1].substring(2, 10)
//       cid = cid[1].substring(2, 10)
//     }
//     axios.get('https://api.bilibili.com/x/player/playurl', {
//       params: {
//         cid,
//         avid,
//         platform: 'html5',
//         otype: 'json',
//         qn: 16,
//         type: 'mp4'
//       }
//     }).then(res => {
//       out = res.data
//     })
//   })
//
//   ctx.body = out
//
// })
