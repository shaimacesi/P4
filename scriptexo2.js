// Demander à l'utilisateur d'entrer le numéro du mois et l'année
let mois = parseInt(prompt("Entrez le numéro du mois (1-12) : "));
let annee = parseInt(prompt("Entrez l'année : "));

// Vérifier si le mois est valide
if (mois < 1 || mois > 12) {
  console.log("Mois invalide !");
} else {
  // Calculer le nombre de jours dans le mois
  let nbJours;
  if (mois === 2) { //mois de février
    // Vérifier si l'année est bissextile
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
      nbJours = 29;
    } else {
      nbJours = 28;
    }
  } else if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    nbJours = 30;
  } else {
    nbJours = 31;
  }

  // Afficher le nombre de jours dans le mois 
System.out.println(" Le nombre de jours est : "= nbJours);
}