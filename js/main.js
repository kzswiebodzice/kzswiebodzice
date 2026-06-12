const button = document.getElementById("trybyPrzycisk");

button.addEventListener("click", () => {
    document.body.classList.toggle("ciemny");
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".kopiuj").forEach(element => {
        element.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(element.innerText);

                const old = element.innerText;
                element.innerText = "✓ Skopiowano";

                setTimeout(() => {
                    element.innerText = old;
                }, 1500);

            } catch (err) {
                console.error(err);
            }
        });
    });
});