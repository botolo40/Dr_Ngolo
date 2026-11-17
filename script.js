const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const choice = document.getElementById("serviceChoice");
    const service = link.dataset.service;
    const matchingOption = [...choice.options].find(option => option.text === service);
    if (matchingOption) choice.value = matchingOption.value;
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const service = document.getElementById("serviceChoice").value;
  const message = document.getElementById("visitorMessage").value.trim();

  if (!name || !service) {
    alert("Veuillez indiquer votre nom et choisir un service.");
    return;
  }

  const text = `Bonjour Docteur Ngolo Palata Isaac, je m'appelle ${name}.\\n\\nMotif : ${service}.\\n${message ? "Message : " + message : ""}\\n\\nJe vous contacte depuis votre site web.`;
  window.open(`https://wa.me/243818230386?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();
