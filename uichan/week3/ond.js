function toggleActiveButton(button) {
    const buttons = document.querySelectorAll("button.list-group-item")
    buttons.forEach((btn) => {
        if (btn != button) {
            btn.classList.remove("active");
        }
    });

    button.classList.toggle("active");
}

function buttonClick(button) {
    toggleActiveButton(button);
}

const buttons = document.querySelectorAll("button.list-group-item");
buttons.forEach((button) => {
    button.addEventListener("click", () => buttonClick(button));
});