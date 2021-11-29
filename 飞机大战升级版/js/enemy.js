class Enemy {
  constructor(config) {
    this.type = config.type
    this.img = config.img
    this.width = config.width
    this.height = config.height
    this.x = config.x + Math.floor(Math.random() * (canvas.width - this.width))
    this.y = config.y - this.height
    this.life = config.life
    this.lastTime = new Date().getTime()
    this.live = false
    this.fen = config.fen
  }
  // 让敌人动起来
  init() {
    this.y++
  }
  // 渲染
  paint() {
    if (!this.live) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  // 判断是否飞出画布
  deletes() {
    return this.y >= canvas.height
  }
  // 碰撞检测
  hit(biu) {
    let bl = biu.x
    let br = biu.x + biu.width
    let bt = biu.y
    let bb = biu.y + biu.height
    let el = this.x
    let er = this.x + this.width
    let et = this.y
    let eb = this.y + this.height
    // 没碰到
    if (bl > er || br < el || bt > eb || bb < et) {
      return false
    } else {
      // 碰到了
      return true
    }
  }
  // 敌机生命
  lifes() {
    this.life--
    if (this.life === 0) {
      // 确认死亡
      this.live = true
      // 加分
      fensum += this.fen
    }
  }
}