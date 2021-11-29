/*
 * 这里是Knull~,这个飞机大战是面向对象写的
 * 我也是一个正在学习的小白~~
 * GitHub : https://github.com/K-null
 */

const canvas = document.querySelector('#canvas')
// 画布大小
canvas.width = 480
canvas.height = 640
// 画布 2d
const ctx = canvas.getContext('2d')

// 定义飞机状态
const START = 0
const RUNNING = 1
const GAMEOVER = 2
// 初始化飞机状态
let game = START

// 分数
let fensum = 0
// 飞行时间
let time = 0
// 计时器
let test = null

// 敌人的生成时间
let enemyNewSpeed = 800
// 存储敌人的数组
let enemyNewList = []
// 获取现在时间毫秒
let enemyNewLastTime = new Date().getTime()

// 天空数据
const SKY = {
  img: bg,
  width: canvas.width,
  height: canvas.height,
  x: 0,
  y1: 0,
  y2: -canvas.height
}
// 敌人数据
const HERO = {
  img: heroImg,
  width: 106,
  height: 76,
  x: canvas.width / 2,
  y: canvas.height
}
// 子弹数据
const BIUBIU = {
  img: biuImg,
  width: 10,
  height: 35,
}
// 白色飞机
const ENEMY_1 = {
  // 类型
  type: 1,
  img: enemyImg[0],
  width: 98,
  height: 76,
  x: 0,
  y: 0,
  // 生命
  life: 2,
  // 分数
  fen: 10
}
// 蓝色飞机
const ENEMY_2 = {
  // 类型
  type: 2,
  img: enemyImg[1],
  width: 104,
  height: 74,
  x: 0,
  y: 0,
  // 生命
  life: 6,
  // 分数
  fen: 30
}
// 红色飞机
const ENEMY_3 = {
  // 类型
  type: 3,
  img: enemyImg[2],
  width: 116,
  height: 82,
  x: 0,
  y: 0,
  // 生命
  life: 10,
  // 分数
  fen: 50
}

// 实例化天空
const sky = new Sky(SKY)
// 实例化飞机
const hero = new Hero(HERO)

// 开始游戏
setInterval(() => {
  draw(game)
}, 30)