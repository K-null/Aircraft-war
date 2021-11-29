class BiuBiu {
  constructor(config, x, y) {
    this.img = config.img
    this.width = config.width
    this.height = config.height
    this.x = x
    this.y = y
  }
  // 让子弹飞
  init() {
    this.y--
  }
  // 渲染
  paint() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  // 判断子弹是否飞出画布之外
  deletes() {
    return this.y <= -this.height
  }
}