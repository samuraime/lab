const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const app = new Koa();

router.get('/examples', (ctx, next) => {
  ctx.body = 'example list';
});

app.use(router.routes());

app.use(serve(__dirname + '/public'));

app.listen(3000);
