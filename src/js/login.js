const form = document.getElementById("login");
const check = document.getElementById("checarconta");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userEmail = document.getElementById("login_email").value;
    const userPassword = document.getElementById("login_senha").value;

    try {
        const response = await fetch('./src/database/accounts.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.hasOwnProperty(userEmail) && data[userEmail].password === userPassword) {
            window.location.href = "./src/pages/checked.html";
        } else {
            check.innerHTML = "<b>Email ou senha inválidos!</b>";
        }
    } catch (error) {
        console.error("Erro ao processar login:", error);
        check.innerHTML = "<b>Erro ao processar login. Tente novamente.</b>";
    }
});