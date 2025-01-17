document.addEventListener("DOMContentLoaded", () => {
  // Définir les détails de l'utilisateur
  const user = {
    firstName: "John",
    lastName: "Doe",
    photo: "Assets/Images/ILYAS.jpg", // Chemin vers la photo de profil
    loyaltyLevels: [50, 75, 90], // Pourcentages des niveaux de fidélité
  };

  // Mise à jour du nom de l'utilisateur
  const userNameElement = document.getElementById("user-name");
  if (userNameElement) {
    userNameElement.textContent = `${user.firstName} ${user.lastName}`;
  }

  // Mise à jour de la photo de profil
  const profilePhotoElement = document.querySelector(".profile-photo");
  if (profilePhotoElement) {
    profilePhotoElement.src = user.photo;
    profilePhotoElement.alt = `Photo de ${user.firstName} ${user.lastName}`;
  }

  // Mise à jour des cercles de fidélité
  user.loyaltyLevels.forEach((level, index) => {
    const circle = document.getElementById(`circle${index + 1}`);
    if (circle) {
      circle.style.background = `conic-gradient(#007bff 0% ${level}%, #ddd ${level}% 100%)`;
      const span = circle.querySelector("span");
      if (span) {
        span.textContent = `${level}%`;
      }
    }
  });
});
