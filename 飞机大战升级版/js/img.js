// 定义图片初始化方法
function createImg(imgurl) {
  let img = new Image()
  img.src = imgurl
  return img
}
// 背景
let bg = createImg('./img/bg.jpg')
// 飞机 ( 自己 )
let heroImg = createImg('./img/me.png')
// 子弹
let biuImg = createImg('./img/b.png')
// 敌人和爆炸动画
let enemyImg = [
  // 白色飞机
  createImg('./img/e1.png'),
  // 蓝色飞机
  createImg('./img/e2.png'),
  // 红色飞机
  createImg('./img/e3.png'),
  // 爆炸动画
  createImg('./img/boom.gif')
]