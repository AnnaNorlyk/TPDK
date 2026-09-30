const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.classList.add(`position${index + 1}`);
});

fetch("texts.json")
    .then(response => response.json())
    .then(texts => {
        document.querySelectorAll("[data-text]").forEach(element => {
            const key = element.dataset.text;
            element.textContent = texts.cards[key];
        });
    });