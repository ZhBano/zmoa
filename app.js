const Zmoa = require('./Zmoa/lib/application')
const Router = require('./Zmoa/router')
const router = new Router()

let app = new Zmoa()
app.use((ctx, next) => {
  console.log('1 start')
  next()

  console.log('1 end')
})

router.get('/', (ctx, next) => {
  ctx.body = "初始页"
})


router.get('/index', (ctx, next) => {
  ctx.body = "首页"
})

router.get('/xinqing', (ctx, next) => {
  ctx.body = "详情"
})


app.use(router.routes())


app.listen(3000, '127.0.0.1')