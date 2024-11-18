
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

let snowflakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createSnowflakes() {
  snowflakes = [];
  const snowflakeCount = Math.floor(window.innerWidth / 8); // More snowflakes
  for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 3 + 1,
          speed: Math.random() * 3 + 0.5, // Faster movement
          wind: Math.random() * 2 - 1, // Add wind effect
          opacity: Math.random() * 0.5 + 0.5, // Varying opacity
      });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((flake) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();
  });
  updateSnowflakes();
}

function updateSnowflakes() {
  snowflakes.forEach((flake) => {
      flake.y += flake.speed;
      flake.x += flake.wind;
      
      // Reset position when out of bounds
      if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
      }
      if (flake.x > canvas.width) flake.x = 0;
      if (flake.x < 0) flake.x = canvas.width;
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
