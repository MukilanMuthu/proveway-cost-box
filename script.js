// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const radios = document.querySelectorAll('.card input[type="radio"]');
    const totalElement = document.querySelector(".total-text");

    function updateTotal(card) {
        // Find the 'price-now' text inside the selected card
        const priceText = card.querySelector(".new").textContent;
        // Update the total element
        totalElement.textContent = `Total : ${priceText}`;
    }

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
            updateTotal(selectedCard);
        }
        });
    });
});
