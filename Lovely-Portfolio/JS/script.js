/* ===== THEME SWITCHER ===== */
function setTheme(theme) {
  document.body.classList.remove("dark", "purple", "blue");
  if (theme !== "light") {
    document.body.classList.add(theme);
  }
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);

/* ===== TYPING EFFECT ===== */
const text = ["DevOps Engineer", "Cloud Specialist", "CI/CD Expert"];
let index = 0;
let char = 0;
let isDeleting = false;

function type() {
  const current = text[index];
  const display = document.getElementById("typing");

  if (isDeleting) {
    display.textContent = current.substring(0, char - 1);
    char--;
  } else {
    display.textContent = current.substring(0, char + 1);
    char++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && char === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && char === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));

/* ===== MOVING STARS BACKGROUND ===== */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5,
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateStars);
}
animateStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
