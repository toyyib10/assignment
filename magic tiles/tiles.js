let can = document.getElementById('myCanvas')
let ctx = can.getContext("2d")
let moveX = 0;
let moveY = 5;
let lineX = 200;
let lineY = 5;
 
ctx.moveTo(0,0)
ctx.lineTo(0,400)
ctx.stroke()
ctx.moveTo(50,0)
ctx.lineTo(50,400)
ctx.stroke()
ctx.moveTo(100,0)
ctx.lineTo(100,400)
ctx.stroke()
ctx.moveTo(150,0)
ctx.lineTo(150,400)
ctx.stroke()
ctx.moveTo(200,0)
ctx.lineTo(200,400)
ctx.stroke()
ctx.fillRect(150,300,50,80)


const getLocation = (e) => {
  // get location of element
  console.log(e.x ,e.y)
  if(e.x >= 160 && e.x <= 286 && e.y >= 310 && e.y <= 386){
    box()
  }
}
let x = 0;
let y = -100;
let y1 = -200
let y2 = -300
let w = 50;
let h = 70;
let x1 = 50;
let x2 = 100;
let x3 = 150;
let y3 = 0
let g = 0;
let r = 0;
let b = 0;
ctx.fillStyle = `rgb(${r},${g},${b})`
const box = () => {
  ctx.clearRect(0,0,200,400)
  ctx.fillRect(x3,y3,w,h)
  y3 += 20
  ctx.fillRect(x,y,w,h)
  y += 20
  ctx.fillRect(x2,y2,w,h)
  y2 += 20
  ctx.fillRect(x1,y1,w,h)
  y1 += 20
  ctx.moveTo(0,0)
  ctx.lineTo(0,400)
  ctx.stroke()
  ctx.moveTo(50,0)
  ctx.lineTo(50,400)
  ctx.stroke()
  ctx.moveTo(100,0)
  ctx.lineTo(100,400)
  ctx.stroke()
  ctx.moveTo(150,0)
  ctx.lineTo(150,400)
  ctx.stroke()
  ctx.moveTo(200,0)
  ctx.lineTo(200,400)
  ctx.stroke()
  if (y >= 440){
    // alert("Game Over")
    y = 0
    y1 = -300
    y2 = -200
    y3 = -100
    // ctx.fillStyle = `rgb(${r += 5},${g += 10},${b += 15})`
    // if(r >= 255){
    //   alert('woj')
    //   r = 0;
    //   b= 0;
    //   g = 0
    // }
  }
  setTimeout(box ,1000)
}