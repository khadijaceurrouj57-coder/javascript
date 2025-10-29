const autoformations = {
  "HTML et CSS": "C1",
  "JavaScript de base": "C2",
  "Git et GitHub": "C3",
  "Algorithmique": "C4",
  "Base de données SQL": "C5",
  "Programmation orientée objet": "C6",
  "Frameworks front-end": "C7",
  "Projet fil rouge": "C8"
};

let score = 0;
const maxQuestions = 5;

function getRandomAutoformation() {
  const keys = Object.keys(autoformations);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

for (let i = 1; i <= maxQuestions; i++) {
  const formation = getRandomAutoformation();
  const bonneReponse = autoformations[formation];

  const reponse = prompt(`(${i}/${maxQuestions}) 📚 Autoformation : "${formation}"\n👉 Entre le code compétence (C1 - C8):`);

  if (reponse && reponse.toUpperCase() === bonneReponse) {
    alert("✅ Correct !");
    
    score++;
  } else {
    alert(`❌ Faux. La bonne réponse était ${bonneReponse}.`);
  }
}

alert(`🏁 Fin du jeu ! Score final: ${score}/${maxQuestions}`);
