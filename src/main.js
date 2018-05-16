import './main.scss';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const defaultOpt = {
  color: 'black',
  width: 10,
  height: 10,
  phase: 0,
  yOffset: 75
}

function drawGraph(x = 1, opt = {}) {
  const _opt = Object.assign({}, defaultOpt, opt);

  ctx.fillStyle = _opt.color;
  ctx.fillRect(x * 100, (Math.sin(x + _opt.phase)) * 50 + _opt.yOffset, _opt.width, _opt.height);
}

function createAnimation() {
  let x = 0;

  function animation() {
    drawGraph(x, {color: 'blue', phase: Math.PI / 2, yOffset: 200});
    drawGraph(x, {color: 'red', phase: Math.PI, yOffset: 100});
    drawGraph(x, {color: 'green', phase: Math.PI / 10, yOffset: 300});
    drawGraph(x, {phase: Math.PI / 1.5, yOffset: 400});
    drawGraph(x, {color: 'darkgray', phase: Math.PI / 3, yOffset: 100});

    x = x + 0.01;
    
    if ( x > 10) {
      x = 0;
      ctx.clearRect(0, 0, 1000, 500);
    }

    setTimeout(animation, 1);
  }

  animation();
}

createAnimation();