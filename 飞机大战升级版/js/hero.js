class Hero {
  constructor(config) {
    this.img = config.img
    this.width = config.width
    this.height = config.height
    this.x = config.x - this.width / 2
    this.y = config.y - this.height * 2
    this.lastTime = new Date().getTime()
    this.biuSpeed = 200
    this.biuList = []
    this.live = false
  }
  // 渲染
  paint() {
    // 判断死亡状态
    if (this.live) {
      // 播放死亡动画
      ctx.drawImage(enemyImg[3], this.x, this.y, this.width, this.height)
      // 游戏结束
      game = GAMEOVER
    } else {
      // 正常渲染
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  // 子弹方法
  biu() {
    let newTime = new Date().getTime()
    if (newTime - this.lastTime >= this.biuSpeed) {
      // 添加存储子弹
      this.biuList.push(new BiuBiu(BIUBIU, this.x + this.width / 2 - 4, this.y - this.height / 2 + 10))
      // 更新时间
      this.lastTime = newTime
    }
  }
  // 生命方法
  lifes() {
    this.live = true
  }
}