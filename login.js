const apiUrl = "https://68271424397e48c913187fb4.mockapi.io"
let username = document.getElementById("userInput");
let password = document.getElementById("passinput");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const userInput = username.value.trim();
    const passInput = password.value;

    if (!userInput) {
        return alert("Please enter usename");
    }else if(!passInput) {
        return alert("Please enter password")

    }

    login(userInput, passInput);
});
function login(userInput, passInput) {
    fetch(`${apiUrl}/login`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((users) => {
            const userExist = users.find(
                (u) => u.username === userInput && u.password === passInput
            );

            if (userExist) {
                localStorage.setItem("username", userExist.username);
                alert("Login has bess successful");
                window.location.href = "/index.html";
            } else {
                alert("error in username or password ");
            }
        })
        .catch((err) => {
            console.error(err);
            alert("Error during login!");
        });
}
