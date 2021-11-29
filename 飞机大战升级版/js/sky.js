class Sky {
  constructor(config) {
    this.width = config.width
    this.height = config.height
    this.img = config.img
    this.x = config.x
    this.y1 = config.y1
    this.y2 = config.y2
  }
  // 让背景动起来
  init() {
    this.y1++
    this.y2++
    if (this.y1 >= canvas.height) {
      this.y1 = 0
      this.y2 = -canvas.height
    }
  }
  // 渲染
  paint() {
    ctx.drawImage(this.img, this.x, this.y1, this.width, this.height)
    ctx.drawImage(this.img, this.x, this.y2, this.width, this.height)
  }
}