// 点击按钮开始游戏
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.zzc').style.display = 'none'
  document.querySelector('button').style.display = 'none'
  // 修改游戏状态
  game = RUNNING
  // 开始计时
  test = setInterval(() => {
    time++
  }, 1000)
})
// 让飞机跟着鼠标动起来
canvas.addEventListener('mousemove', e => {
  if (game === RUNNING) {
    // 调整飞机位置
    hero.x = e.offsetX - hero.width / 2
    hero.y = e.offsetY - hero.height / 2
  }
})
// 渲染文字
function Texts() {
  if (game == RUNNING || game == GAMEOVER) {
    document.querySelector('.w span:nth-child(1)').innerHTML = `分数 : ${fensum}`
    document.querySelector('.w span:nth-child(2)').innerHTML = `飞行时间 : ${time}s`
    // 游戏结束的时间
    document.querySelector('.siw p').innerHTML = time
  } else {
    document.querySelector('.w span:nth-child(1)').innerHTML = `分数 : 0`
    document.querySelector('.w span:nth-child(2)').innerHTML = `飞行时间 : 0s`
  }
}

let TIME = document.querySelector('.siw #dw')