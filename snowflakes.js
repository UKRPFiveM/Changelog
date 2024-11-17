
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

let snowflakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createSnowflakes() {
  snowflakes = [];
  const snowflakeCount = Math.floor(window.innerWidth / 10);
  for (let i = 0; i < snowflakeCount; i++) {
    snowflakes.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  snowflakes.forEach((flake) => {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  });
  ctx.fill();
  updateSnowflakes();
}

function updateSnowflakes() {
  snowflakes.forEach((flake) => {
    flake.y += flake.speed;
    if (flake.y > canvas.height) flake.y = 0;
  });
  requestAnimationFrame(drawSnowflakes);
}


window.addEventListener("resize", () => {
  resizeCanvas();
  createSnowflakes();
});
resizeCanvas();
createSnowflakes();
drawSnowflakes();
