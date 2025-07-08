//  sélectionne le formulaire avec l'ID "contact-form" et  lui attache un écouteur d'événement
document.getElementById("contact-form").addEventListener("submit", function(e) {

  // Empêche le comportement par défaut du formulaire (qui est de recharger la page et d’envoyer les données)
  e.preventDefault();

  // sélectionne l’élément qui affichera le message de confirmation
  const confirmation = document.getElementById("message-confirmation");

  // insère dans cet élément un texte personnalisé pour remercier l’utilisateur
  confirmation.textContent = "Merci pour votre message 🌷 Nous vous répondrons avec tendresse très bientôt.";

  // "show" pour rendre l’élément visible avec une animation douce (opacity)
  confirmation.classList.add("show");

  // On réinitialise les champs du formulaire (vide tous les inputs/textarea)
  this.reset();

  // Après 5 secondes (5000 millisecondes), on efface le message et on retire la classe "show"
  setTimeout(() => {
    confirmation.classList.remove("show"); // Cache l’élément avec effet CSS
    confirmation.textContent = "";         // Vide le contenu texte
  }, 5000);
});
// BOOK LISTE INDEX 

//FIN 
// M


//M