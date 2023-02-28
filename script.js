function calculerMoyenne() {
    // Récupérer les valeurs des notes
    const cctl1 = parseFloat(document.getElementById("cctl1").value);
    const cctl2 = parseFloat(document.getElementById("cctl2").value);
    const epi = parseFloat(document.getElementById("epi").value);
    
    // Calculer la moyenne avec un coefficient de 2 pour la note EPI
    const moyenne = (cctl1 + cctl2 + (epi * 2)) / 4;
    
    // Afficher le résultat
    document.getElementById("resultat").textContent = "La moyenne est de " + moyenne.toFixed(2) + "/20.";
  }
  