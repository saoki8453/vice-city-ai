
/* =====================================
   VICE CITY AI
   CONTROLE DE TEMA
===================================== */

const themeButton = document.getElementById("themeToggle");

// Recupera o tema salvo
const savedTheme = localStorage.getItem("theme");

// Aplica o tema
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

// Atualiza o botão
function updateThemeButton() {

    if (!themeButton) return;

    const lightMode =
        document.body.classList.contains("light-mode");

    themeButton.textContent = lightMode ? "🌙" : "☀️";

    themeButton.setAttribute(
        "aria-label",
        lightMode ? "Ativar tema escuro" : "Ativar tema claro"
    );

    themeButton.title =
        lightMode ? "Ativar tema escuro" : "Ativar tema claro";
}

// Inicialização
updateThemeButton();

// Alternância de tema
if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const currentTheme =
            document.body.classList.contains("light-mode")
                ? "light"
                : "dark";

        localStorage.setItem("theme", currentTheme);

        updateThemeButton();

    });

}
