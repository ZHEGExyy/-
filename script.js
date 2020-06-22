let flag = 0
let imgChatBackground, imgChat, imgFirst, imgChat2
let yFirst = 0, pyFirst = 0
let yChat, pyChat, yChat2, pyChat2
let img5, y5, y5Target

let diu, wrong, right, complete

let easing = 0.05
let i = 0
let itime = 0
//背景，后景
let x0, y0, x0Target = 0
let img0

let x1, y1, x1Target = 350
let img1noise, img1quiet, flagn = 0//二的大背景，噪音，反馈
//前景
let x2, y2, x2Target = 950
let img2
let img2noise//噪音

let imgBadFruit, flag2f = 0
let imgAnger
let imgHappy//反馈

let imgLitter, flag2l = 0
let imgBox, flag2b = 0//马路摊（上）
let imgBikeStop, imgBikeRide, xBike, yBike//反馈

let imgNoMask, imgMask, flag2m = 0
let imgGasFall, imgGasUp, flag2g = 0
let imgWireOutOfOrder, imgWireInOrder, flag2w = 0
let imgHotdog//反馈

//马路
let x3, y3, x3Target = 550
let img3Wrong, img3Right//马路摊（下）

//对话框
let biji, flagBiji = 0
let img4, flagWord = 0, time4 = 0

//标志
let x00, y00, x00Target = 0
let img00

let rectX = 300
let rectY, rectYTarget
let rectS, rectSTarget
let n = 0, nn = 1

let time0 = 0///////很重要的工具使用时间

let x11, y11, x11Target, flag11 = 0
let img11

let x21, y21, x21Target, flag21 = 0
let img21

let x30, x30Target
let x31, y31, flag31 = 0
let x32, y32, flag32 = 0
let img31

let x40, x40Target
let x41, y41, flag41 = 0
let x42, y42, flag42 = 0
let x43, y43, flag43 = 0
let img41, img42, img43///////////ok

function preload() {
    imgFirst = loadImage("封面-01.png")
    imgChatBackground = loadImage("聊天背景.png")
    imgChat = loadImage("聊天.png")
    imgChat2 = loadImage("聊天(2).png")
    img5 = loadImage("nb.png")

    diu = loadSound("diu.mp3")
    wrong = loadSound("错误.mp3")
    right = loadSound("正确.mp3")
    complete = loadSound("完成进度.mp3")
    biji = loadSound("biji.mp3")
    //地摊第一部分：两层背景
    //x0,y0
    img0 = loadImage("0.png")
    //x1,y1
    img1noise = loadImage("1吵.png")//可切换图片
    img1quiet = loadImage("1静.png")///////flagn=3,反馈
    //地摊第二部分：前景//x2,y2
    img2 = loadImage("2静.png")
    imgBadFruit = loadImage("2烂水果.png")//消失
    imgAnger = loadImage("2吵架.png")//可切换图片
    imgHappy = loadImage("2和好.png")///////flag2f=3,反馈

    img2noise = loadImage("噪音啊.png")//消失

    imgLitter = loadImage("2有垃圾.png")//消失
    imgBox = loadImage("箱子整理.png")//消失,,,,联合img3
    imgBikeStop = loadImage("车子停.png")//flag2l!=2,falg2b!=2
    imgBikeRide = loadImage("车子走.png")///////flag2l=2,反馈


    imgNoMask = loadImage("口罩无.png")//可切换图片
    imgMask = loadImage("口罩有.png")
    imgGasFall = loadImage("燃气倒.png")//可切换图片
    imgGasUp = loadImage("燃气起.png")
    imgWireOutOfOrder = loadImage("电线乱.png")//可切换图片
    imgWireInOrder = loadImage("电线齐.png")
    imgHotdog = loadImage("热狗.png")

    //地摊第三部分：马路
    img3Wrong = loadImage("3有衣服.png")
    img3Right = loadImage("3无衣服.png")

    //地摊第四部分：对话框
    img4 = loadImage("对话框.png")
    //按钮
    img00 = loadImage("街道.png")
    img11 = loadImage("11扔水果.png")//排除不合格
    img21 = loadImage("21音量减少.png")//调小音量
    img31 = loadImage("31扫帚.png")//扫垃圾
    img32 = loadImage("32纸箱.png")//收拾马路
    img41 = loadImage("41插头.png")//电线
    img42 = loadImage("42扶煤气.png")//煤气
    img43 = loadImage("43口罩.png")//口罩//////ok
}
function setup() {
    createCanvas(1000, 600)
    yChat = height - 10
    pyChat = height - 10

    yChat2 = height
    pyChat2 = height

    y5Target = height
    y5 = y5Target

    x0 = x0Target
    y0 = height
    x1 = x1Target
    y1 = height + 120
    x2 = x2Target
    y2 = height + 220
    x3 = x3Target
    y3 = height + 320



    x00 = 0
    y00 = height
    rectYTarget = height
    rectY = rectYTarget
    rectSTarget = 0
    rectS = rectSTarget

    x11Target = width + 300
    x11 = x11Target
    y11 = 360

    x21Target = width + 300
    x21 = x21Target
    y21 = 360

    x30Target = width + 300
    x30 = x30Target
    y31 = 100
    y32 = 230

    x40Target = width + 300
    x40 = x40Target
    y41 = 100
    y42 = 230
    y43 = 360

}
function draw() {
    //游戏前情提要

    image(imgChatBackground, 0, 0, width, height)

    pyFirst = pyFirst + (yFirst - pyFirst) * easing
    image(imgFirst, 0, pyFirst, imgFirst.width, imgFirst.height)
    pyChat = pyChat + (yChat - pyChat) * easing
    image(imgChat, 0, pyChat, imgChat.width, imgChat.height)

    if (i > 4 & flag == 0) {
        itime += 1
        if (itime == 60) {
            diu.play()
            yChat = yChat - 300
        }
    }
    //游戏开始
    if (flag == 1) {
        yChat = -imgChat.height - 20
        y0 = y0 + (0 - y0) * easing
        y1 = y1 + (0 - y1) * easing
        y2 = y2 + (0 - y2) * easing
        y3 = y3 + (0 - y2) * easing
        y00 = y00 + (0 - y00) * easing
        itime = 1
    }


    //背景
    image(img0, x0, y0, img0.width, img0.height)
    //后景
    if (flagn == 0 || flagn == 1) {
        image(img1noise, x1, y1, img1noise.width, img1noise.height)
    } else {
        image(img1quiet, x1, y1, img1quiet.width, img1quiet.height)
    }
    //前景
    image(img2, x2, y2, img2.width, img2.height)

    //坏水果
    if (flag2f == 0) {
        image(imgBadFruit, x2, y2, imgBadFruit.width, imgBadFruit.height)
        image(imgAnger, x2, y2, imgAnger.width, imgAnger.height)
    } else if (flag2f == 1) {
        image(imgAnger, x2, y2, imgAnger.width, imgAnger.height)
    } else {
        image(imgHappy, x2, y2, imgHappy.width, imgHappy.height)
    }

    //卖唱的噪音闪电
    if (flagn == 0) {
        image(img2noise, x2, y2, img2noise.width, img2noise.height)
    }

    //垃圾
    if (flag2l == 0) {
        image(imgLitter, x2, y2, imgLitter.width, imgLitter.height)
    }
    //收摊
    if (flag2b == 1 || flag2b == 2) {
        image(imgBox, x2, y2, imgBox.width, imgBox.height)
    }


    //口罩
    if (flag2m == 0) {
        image(imgNoMask, x2, y2, imgNoMask.width, imgNoMask.height)
    } else {
        image(imgMask, x2, y2, imgMask.width, imgMask.height)
    }
    //天然气
    if (flag2g == 0) {
        image(imgGasFall, x2, y2, imgGasFall.width, imgGasFall.height)
    } else {
        image(imgGasUp, x2, y2, imgGasUp.width, imgGasUp.height)
    }
    //电线
    if (flag2w == 0) {
        image(imgWireOutOfOrder, x2, y2, imgWireOutOfOrder.width, imgWireOutOfOrder.height)
    } else {
        image(imgWireInOrder, x2, y2, imgWireInOrder.width, imgWireInOrder.height)
    }
    if (flag2m == 2 & flag2w == 2 & flag2g == 2) {
        image(imgHotdog, x2, y2, imgHotdog.width, imgHotdog.height)
    }

    //马路
    if (flag2b == 0) {
        image(img3Wrong, x3, y3, img3Wrong.width, img3Wrong.height)
    } else {
        image(img3Right, x3, y3, img3Right.width, img3Right.height)
    }

    //自行车
    if (flag2b == 1 || flag2b == 2) {
        if (flag2l == 2) {
            xBike -= 10
            xBike = constrain(xBike, -500, width)
        }

        image(imgBikeRide, xBike, yBike, imgBikeRide.width / 3, imgBikeRide.height / 3)
    } else {
        xBike = x3 + 2680
        yBike = height - imgBikeStop.height / 3 - 10
        image(imgBikeStop, xBike, yBike, imgBikeStop.width / 3, imgBikeStop.height / 3)
    }

    //街道名字
    image(img00, x00, y00, img00.width, img00.height)



    //对话框
    if ((x2 - x2Target) < 1 & flag != 0 & flag != 1 & flag != 3 & flag != 5 & flag != 7) {
        fill(20)
        textSize(10)
        image(img4, x2, y2, img4.width, img4.height)
        if (flagBiji == 0) {
            biji.play()
            flagBiji = 1
        }
        if (flagWord == 0) {
            if (flag == 2) {

                text('老板您看看您这水', 474, 235)
                text('果质量是认真的吗', 474, 250)

            }
            if (flag == 4) {
                text('天哪这个音乐', 670, 160)
                text('声太吵了！！', 670, 175)
            }
            if (flag == 6) {
                text('这样直接在马路', 820, 335)
                text('上摆摊不好吧', 820, 350)
            }
            if (flag == 8) {
                text('宝子你能帮忙看看', 547, 130)
                text('我这的安全问题吗', 547, 145)
            }
            if (flag == 9 & rectY > height) {
                text('谢谢你呀宝子', 547, 130)
                text('送你一个热狗吃', 547, 145)
            }
        }
        if (flagWord == 1) {

        }
        if (flagWord == 2) {

        }

    }




    noStroke()//分数框
    fill(255, 220, 220)
    n = constrain(n, 0, nn)
    rectSTarget = (width - rectX * 2) / nn * n
    rectY = rectY + (rectYTarget - rectY) * easing
    rectS = rectS + (rectSTarget - rectS) * easing
    rect(rectX, rectY, width - rectX * 2, 10)
    fill(255, 10, 100)
    rect(rectX, rectY, rectS, 10)
    //
    x0 = x0 + (x0Target - x0) * easing////////
    x1 = x1 + (x1Target - x1) * easing////////
    x2 = x2 + (x2Target - x2) * easing//重复//
    x3 = x3 + (x3Target - x3) * easing////////修改Target,起到移动作用（背景后景前景马路）

    if (flag == 2) {
        x00 = x00 + (x00Target - x00) * easing

        x11 = x11 + (x11Target - x11) * easing
        if (flag11 == 0) {
            x11 = x11
        } else if (flag11 == 1) {
            x11 = mouseX - 50
            y11 = mouseY - 50
            clickedplaying(330, 170, 460, 230, mouseX, mouseY)
            if (time0 == 0) {
                flag11 = 2
            }
        } else if (flag11 == 2) {
            x11 = width
            y11 = height
            flag2f = 1
        }
        image(img11, x11, y11, img11.width / 2, img11.height / 2)
    }

    if (flag == 4) {
        x21 = x21 + (x21Target - x21) * easing
        if (flag21 == 0) {
            x21 = x21
        } else if (flag21 == 1) {
            x21 = mouseX - 50
            y21 = mouseY - 50
            clickedplaying(370, 340, 430, 450, mouseX, mouseY)
            if (time0 == 0) {
                flag21 = 2
            }
        } else if (flag21 == 2) {
            x21 = width
            y21 = height
            flagn = 1
        }
        image(img21, x21, y21, img21.width / 2, img21.height / 2)
    }

    if (flag == 6) {
        x30 = x30 + (x30Target - x30) * easing
        if (flag31 == 0) {
            x31 = x30
        } else if (flag31 == 1) {
            x31 = mouseX - 50
            y31 = mouseY - 50
            clickedplaying(100, 370, 270, 430, mouseX, mouseY)
            if (time0 == 0) {
                flag31 = 2
            }
        } else if (flag31 == 2) {
            x31 = width
            y31 = height
            flag2l = 1
        }//扫把
        if (flag32 == 0) {
            x32 = x30
        } else if (flag32 == 1) {
            x32 = mouseX - 50
            y32 = mouseY - 50
            clickedplaying(515, 510, 855, 600, mouseX, mouseY)
            if (time0 == 0) {
                flag32 = 2
            }
        } else if (flag32 == 2) {
            x32 = width
            y32 = height
            flag2b = 1
        }//箱子
        image(img31, x31, y31, img31.width / 2, img31.height / 2)
        image(img32, x32, y32, img32.width / 2, img32.height / 2)
    }
    if (flag == 8) {

        x40 = x40 + (x40Target - x40) * easing
        if (flag41 == 0) {
            x41 = x40
        } else if (flag41 == 1) {
            x41 = mouseX - 50
            y41 = mouseY - 50
            clickedplaying(320, 110, 360, 220, mouseX, mouseY)
            if (time0 == 0) {
                flag41 = 2
            }//电线
        } else if (flag41 == 2) {
            x41 = width
            y41 = height
            flag2w = 1

        }
        if (flag42 == 0) {
            x42 = x40
        } else if (flag42 == 1) {
            x42 = mouseX - 50
            y42 = mouseY - 50
            clickedplaying(590, 210, 680, 260, mouseX, mouseY)
            if (time0 == 0) {
                flag42 = 2
            }//煤气瓶
        } else if (flag42 == 2) {
            x42 = width
            y42 = height
            flag2g = 1
        }
        if (flag43 == 0) {
            x43 = x40
        } else if (flag43 == 1) {
            x43 = mouseX - 50
            y43 = mouseY - 50
            time0++
            clickedplaying(460, 130, 530, 200, mouseX, mouseY)
            if (time0 == 0) {
                flag43 = 2
            }//口罩
        } else if (flag43 == 2) {
            x43 = width
            y43 = height
            flag2m = 1
        }
        image(img41, x41, y41, img41.width / 2, img41.height / 2)
        image(img42, x42, y42, img42.width / 2, img42.height / 2)
        image(img43, x43, y43, img43.width / 2, img43.height / 2)
    }

    if (flag == 10) {
        y0 = y0 + (-height - 10 - y0) * easing
        y1 = y1 + (-height - 10 - y1) * easing
        y2 = y2 + (-height - 10 - y2) * easing
        y3 = y3 + (-height - 10 - y2) * easing
    }

    if (i > 4 & flag == 10) {
        itime += 1
        if (itime == 70) {
            diu.play()
            yChat2 = yChat2 - 120
        }
    }
    pyChat2 = pyChat2 + (yChat2 - pyChat2) * easing
    image(imgChat2, 0, pyChat2, imgChat2.width, imgChat2.height)

    y5 = y5 + (y5Target - y5) * easing
    noStroke()
    fill(255)
    rect(width / 2 - 450, y5 + height / 2 - 250, 900, 500)
    for (y = 50; y < 550; y += 50) {
        for (x = 50; x < 950; x += 50) {
            image(img5, x, y5 + y, img5.width, img5.height)
        }
    }

    textSize(30)
    rect(width / 2 - 150, y5 + height / 2 - 100 - 50, 300, 100)
    rect(width / 2 - 250, y5 + height / 2 + 75 - 75, 500, 150)

    fill(250, 100, 100)

    text("游戏结束", width / 2 - 30 * 2, y5 + height / 2 - 90)
    text("宝子！你现在被正式", width / 2 - 30 * 4.5, y5 + height / 2 + 60)
    text("授予“地摊小卫士”称号", width / 2 - 30 * 5.5, y5 + height / 2 + 110)
    // print(flag,y5,i)
}



function mousePressed() {
    //位置共享前起作用
    if (itime == 0) {
        if (i == 0) {
            yChat = yChat - 100
            yFirst -= 600
        } else if (i == 1) {
            yChat = yChat - 90
        } else if (i == 2) {
            yChat = yChat - 130
        } else if (i == 3) {
            yChat = yChat - 80
        } else if (i == 4) {
            yChat = yChat - 90
        } else {
            yChat = yChat
        }
        diu.play()
        i++
    }

    //位置共享出现，只执行一次
    if (itime > 60 & flag == 0) {
        flag = 1
        itime += 0
        i = 0
    }
    //第一题切换，只执行一次
    if (flag == 1 & itime == 1) {
        flag = 2
        y0 = 0
        y1 = 0
        y2 = 0
        y3 = 0
        //控制
        x0Target -= 200
        x1Target -= 480
        x2Target -= 770
        x3Target -= 0
        //标志
        x00Target = -1000
        x11Target = 750
        rectYTarget = 478
        nn = 1////////////////////////////////单数flag重设nn
    }
    if (flag == 2) {
        //第一题
        if (flag11 == 0 & mouseX > x11 & mouseX < x11 + 100 & mouseY > y11 & mouseY < y11 + 100) {
            flag11 = 1
        }
        // }//口罩坐标
        completed(rectX, rectS)
    }

    //第二题
    if (rectY > height & flag == 3) {
        x0Target -= 400
        x1Target -= 600
        x2Target -= 920
        x3Target -= 1000//先等于0

        x21Target = 750
        n = 0
        rectS = 0
        rectYTarget = 478

        flag = 4
        flagBiji = 0
    }
    if (flag == 4) {
        if (flag21 == 0 & mouseX > x21 & mouseX < x21 + 100 & mouseY > y21 & mouseY < y21 + 100) {
            flag21 = 1
        }
        completed(rectX, rectS)
    }


    //第三题
    if (rectY > height & flag == 5) {
        x0Target -= 400
        x1Target -= 500
        x2Target -= 1110
        x3Target -= 1400

        x30Target = 750
        n = 0
        nn = 2
        rectS = 0
        rectYTarget = 478

        flag = 6
        flagBiji = 0
    }
    if (flag == 6) {
        if (flag31 == 0 & mouseX > x31 & mouseX < x31 + 100 & mouseY > y31 & mouseY < y31 + 100) {
            flag31 = 1
        }
        if (flag32 == 0 & mouseX > x32 & mouseX < x32 + 100 & mouseY > y32 & mouseY < y32 + 100) {
            flag32 = 1
        }
        completed(rectX, rectS)
    }

    //第四题
    if (rectY > height & flag == 7) {
        x0Target -= 400
        x1Target -= 600
        x2Target -= 905
        x3Target -= 1000//先等于0

        x40Target = 750
        n = 0
        nn = 3
        rectS = 0
        rectYTarget = 478

        flag = 8
        flagBiji = 0
    }
    if (flag == 8) {
        if (flag41 == 0 & mouseX > x41 & mouseX < x41 + 100 & mouseY > y41 & mouseY < y41 + 100) {
            flag41 = 1
        }
        if (flag42 == 0 & mouseX > x42 & mouseX < x42 + 100 & mouseY > y42 & mouseY < y42 + 100) {
            flag42 = 1
        }
        if (flag43 == 0 & mouseX > x43 & mouseX < x43 + 100 & mouseY > y43 & mouseY < y43 + 100) {
            flag43 = 1
        }
        completed(rectX, rectS)
    }
    if (rectY > height & flag == 9) {
        flag = 10
    }
    if (flag == 10) {
        if (i < 5) {
            if (i == 0) {
                yChat2 = yChat2 - 110
            } else if (i == 1) {
                yChat2 = yChat2 - 85
            } else if (i == 2) {
                yChat2 = yChat2 - 85
            } else if (i == 3) {
                yChat2 = yChat2 - 100
            } else if (i == 4) {
                yChat2 = yChat2 - 91
            } else {
                yChat2 = yChat2
            }
            diu.play()
            i++
        } else if (itime > 60) {
            y5Target = 0
        }

    }
}

//工作日志
//x0是指大背景
//X1是指后景
//x2是指前景
//x3是指马路
//第一关第一个工具重要参数：x11,y11,flag11,,,,,x10Target

//时间
//flag=0，itime=0，点击出现聊天内容
//itime++，自动出现位置分享
//itime>60，点击画面：flag=1，itime=1。游戏题目
//点击，flag=2，第一关移动至中间
//flag==2。flag11影响工具使用，出现，移动，消失三个状态
//进度条满时：点击，flag=3，进度条降落
//进度条低于画布时：点击，flag=4，第二关移动至中间





function clickedplaying(beginX, beginY, endX, endY, mX, mY) {
    time0++
    if (time0 > 300) {
        fill(255, 150)
        let r = min(endX - beginX, endY - beginY)
        ellipse((beginX + endX) / 2, (beginY + endY) / 2, r, r)
    }
    if (mouseIsPressed == true) {
        if (mX > beginX & mX < endX & mY > beginY & mY < endY) {
            time0 = 0
            right.play()
            n++
        } else {
            if (time0 > 20) {
                wrong.play()
            }
        }
    }
}
function completed(rectX, rectS) {
    if ((width - rectX * 2 - rectS) < 1) {
        complete.play()
        rectYTarget = height + 100
        flag += 1
    }
    if (flag == 3) {
        flag2f = 2
    }
    if (flag == 5) {
        flagn = 2
    }
    if (flag == 7) {
        flag2l = 2
        flag2b = 2
    }
    if (flag == 9) {
        flag2m = 2
        flag2w = 2
        flag2g = 2
    }
}