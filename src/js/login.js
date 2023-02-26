const form = document.getElementById("login")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    const userEmail = document.getElementById("login_email").value
    const userPassword = document.getElementById("login_senha").

    console.log(document.cookie)

    const check = document.getElementById("checarconta")
    fetch('./src/database/accounts.json').then(data => {
        data.json().then(data => {
            if (data.hasOwnProperty(userEmail)) {
                if (data[userEmail].password == userPassword) {
                    window.location.href = "./src/pages/checked.html"
                } else {
                    return check.innerHTML = "<b>Email ou senha inválidos!</b>"
                }
            }
        })
    })
})