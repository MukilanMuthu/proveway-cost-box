// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const radios = document.querySelectorAll('.card input[type="radio"]');

    radios.forEach(radio => {
    radio.addEventListener("change", () => {
      // First, remove 'selected' from all cards
        cards.forEach(card => {
        card.classList.remove("selected");
        });
      // Then, add 'selected' to the correct card
        const selectedCard = radio.closest(".card");
        if (selectedCard) {
            selectedCard.classList.add("selected");
        }
        });
    });
});
