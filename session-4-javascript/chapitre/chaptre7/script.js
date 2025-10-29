// 1. Créer un tableau de livre
let livre = ["la boite à merveilles", "le petit prince", "l'étranger"];
console.log("Tableau initial :", livre);

// 2. Ajouter et supprimer
livre.push("mon petite fil ");
console.log("Après push :", livre);

livre.pop();
console.log("Après pop :", livre);

// 3. Modifier un élément
livre[1] = "le petit prince";
console.log("Après modification :", livre);

// 4. Ajouter au début et supprimer le premier
livre.unshift("le petit prince");
console.log("Après unshift :", livre);

livre.shift();
console.log("Après shift :", livre);

// 5. Utiliser splice pour insérer des éléments
livre.splice(1, 0, "mon livre");
console.log("Après splice :", livre);

// 6. Parcours du tableau
console.log("Boucle for :");
for (let i = 0; i < livre.length; i++) {
  console.log(i, livre[i]);
}

// 7. Tableau d’objets
let produits = [
  { nom: "la boite à mervielle", prix:60 },
  { nom: "lr petit prince", prix: 80 },
  { nom: "l'étranger", prix: 90},
];

console.log("Liste des produits :");
produits.forEach((p) => console.log(`${p.nom} → ${p.prix} DH`));
