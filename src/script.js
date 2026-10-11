const WA = "5521999990000";

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

document.getElementById("year").textContent = String(new Date().getFullYear());

function toWhatsApp(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

document.getElementById("quickForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const msg = `Olá! Sou ${data.get("nome")} — caso ${data.get("tipo")}: ${data.get("resumo")}`;
  window.open(toWhatsApp(msg), "_blank", "noopener");
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const msg = `Olá! Sou ${data.get("nome")} (${data.get("contato")}). ${data.get("mensagem")}`;
  window.open(toWhatsApp(msg), "_blank", "noopener");
});

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) en.target.classList.add("visible");
    }),
  { threshold: 0.12 }
);
document
  .querySelectorAll(".card, .steps li, .quote, .info-box")
  .forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
