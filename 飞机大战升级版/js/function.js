// 随机生成敌机
function enemyNew() {
  let enemyNewTime = new Date().getTime()
  // 每 800 毫秒生成一架敌机
  if (enemyNewTime - enemyNewLastTime >= enemyNewSpeed) {
    // 随机生成 1~100 的数
    let eRandan = Math.floor(Math.random() * 100)
    if (eRandan <= 60) {
      // 白色飞机
      enemyNewList.push(new Enemy(ENEMY_1))
    } else if (eRandan <= 90) {
      // 蓝色飞机
      enemyNewList.push(new Enemy(ENEMY_2))
    } else {
      // 红色飞机
      enemyNewList.push(new Enemy(ENEMY_3))
    }
    // 更新时间
    enemyNewLastTime = enemyNewTime
  }
}

// 碰撞方法
function pengzhuang() {
  // 敌机撞到自己
  for (let i = 0; i < enemyNewList.length; i++) {
    if (enemyNewList[i].hit(hero)) {
      enemyNewList[i].lifes()
      hero.lifes()
    }
  }
  // 敌机撞到子弹
  for (let i = 0; i < enemyNewList.length; i++) {
    for (let j = 0; j < hero.biuList.length; j++) {
      if (enemyNewList[i].hit(hero.biuList[j])) {
        hero.biuList.splice(j, 1)
        enemyNewList[i].lifes()
      }
    }
    // 判断敌人死亡状态 播放死亡动画
    if (enemyNewList[i].live) {
      ctx.drawImage(enemyImg[3], enemyNewList[i].x, enemyNewList[i].y, enemyNewList[i].width, enemyNewList[i].height)
      enemyNewList.splice(i, 1)
    }
  }
}
// 移动方法
function yidong() {
  // 让敌机动起来
  for (let i = 0; i < enemyNewList.length; i++) {
    enemyNewList[i].init()
  }
  // 让子弹动起来
  for (let i = 0; i < hero.biuList.length; i++) {
    hero.biuList[i].init()
  }
}
// 渲染方法
function xuanran() {
  // 渲染敌机
  for (let i = 0; i < enemyNewList.length; i++) {
    enemyNewList[i].paint()
  }
  // 渲染子弹
  for (let i = 0; i < hero.biuList.length; i++) {
    hero.biuList[i].paint()
  }
}
// 删除方法
function deletes() {
  // 判断敌机是否超出画布
  for (let i = 0; i < enemyNewList.length; i++) {
    if (enemyNewList[i].deletes()) {
      enemyNewList.splice(i, 1)
      // 减去分数的 5 倍
      fensum -= enemyNewList[i].fen * 5
      // 如果分数小于零 结束游戏
      if (fensum <= 0) {
        game = GAMEOVER
      }
    }
  }
  // 判断子弹是否超出屏幕
  for (let i = 0; i < hero.biuList.length; i++) {
    if (hero.biuList[i].deletes()) {
      hero.biuList.splice(i, 1)
    }
  }
}


function draw(game) {
  switch (game) {
    case START:
      sky.paint()
      hero.paint()
      Texts()
      break;
    case RUNNING:
      Texts()
      sky.paint()
      sky.init()
      hero.paint()
      hero.biu()
      enemyNew()
      xuanran()
      yidong()
      deletes()
      pengzhuang()
      break;
    case GAMEOVER:
      clearInterval(test)
      Texts()
      if (time <= 30) {
        TIME.innerHTML = '倔强青铜'
      } else if (time > 30 && time <= 60) {
        TIME.innerHTML = '秩序白银'
      } else if (time > 60 && time <= 90) {
        TIME.innerHTML = '荣耀黄金'
      } else if (time > 120 && time <= 240) {
        TIME.innerHTML = '尊贵铂金'
      } else if (time > 240 && time <= 480) {
        TIME.innerHTML = '永恒钻石'
      } else {
        TIME.innerHTML = '最强王者'
      }
      document.querySelector('.siw').style.display = 'block'
      break;
    default:
      break;
  }
}