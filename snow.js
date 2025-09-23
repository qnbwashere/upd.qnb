// Lightweight snow engine (canvas-based)
const Snow = (() => {
  let canvas, ctx, flakes = [], rafId = null, running = false;
  const MAX_FLAKES = 140, DPR = () => Math.min(2, window.devicePixelRatio || 1);
  function initCanvas() {
    if (canvas) return;
    canvas = document.createElement('canvas'); canvas.id = 'snow-canvas';
    document.body.appendChild(canvas); ctx = canvas.getContext('2d');
    resize(); window.addEventListener('resize', resize);
  }
  function spawnFlake(w, h) {
    return { x: Math.random()*w, y: -10, r: 1+Math.random()*2.5, s: 0.5+Math.random()*1.5, vx: -0.6+Math.random()*1.2, vy: 0.8+Math.random()*1.6, o: 0.6+Math.random()*0.4, a: Math.random()*Math.PI*2 };
  }
  function resize() {
    if (!canvas) return; const dpr = DPR();
    const { innerWidth:w, innerHeight:h } = window;
    canvas.width = Math.floor(w*dpr); canvas.height = Math.floor(h*dpr);
    canvas.style.width = w+'px'; canvas.style.height = h+'px'; ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function step() {
    if (!running || !ctx) return;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0,0,w,h);
    if (flakes.length < MAX_FLAKES) flakes.push(spawnFlake(w,h));
    for (let i=0;i<flakes.length;i++){
      const f = flakes[i];
      f.a += 0.01; f.x += f.vx + Math.cos(f.a)*0.3; f.y += f.vy + f.s*0.15;
      if (f.y - f.r > h || f.x < -10 || f.x > w+10) { flakes[i] = spawnFlake(w,h); continue; }
      ctx.globalAlpha = f.o; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha = 1.0; rafId = requestAnimationFrame(step);
  }
  function start() {
    initCanvas(); if (running) return; running = true; if (!rafId) rafId = requestAnimationFrame(step);
  }
  function stop() {
    running = false; if (rafId) cancelAnimationFrame(rafId); rafId = null; flakes = [];
    if (canvas) { window.removeEventListener('resize', resize); canvas.remove(); canvas = ctx = null; }
  }
  return { start, stop };
})();
window.Snow = Snow;
