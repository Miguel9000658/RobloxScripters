const scripts = [
  {
    name: "Infinite Yield",
    desc: "Admin commands",
    file: "scripts/iy.js"
  },
  {
    name: "Speed Hack",
    desc: "Player speed boost",
    file: "scripts/speed.js"
  },
  {
    name: "ESP Script",
    desc: "Highlight players",
    file: "scripts/esp.js"
  }
];

const container = document.getElementById("scripts");

scripts.forEach(s => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    <button>Execute</button>
  `;

  card.querySelector("button").onclick = () => {
    const script = document.createElement("script");
    script.src = s.file;
    document.body.appendChild(script);
  };

  container.appendChild(card);
});
