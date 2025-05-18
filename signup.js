let apiUrl = "https://68271424397e48c913187fb4.mockapi.io"
const email = document.getElementById("email-input")
const username = document.getElementById("userInput")
const password = document.getElementById("passInput")
const confirmPassword = document.getElementById("confirm-password")
const submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const user = { 
        email: email.value.trim(),
        username: username.value.trim(),
        password: password.value
    }
    createUser(user)

async function createUser(user){
    try{
       
        const checkUser = await fetch(`${apiUrl}/login?username=${user.username}`)

        if(username.value.length<4){
            alert("username word must more than 4 ")
            return
        }
        if (password.value.length<6){
            alert("password must more than 6 ")
            return
        } 
        if (confirmPassword.value != password.value){
            alert("passwords not matche")
            return
        }
        const users = await checkUser.json()
        const userExist = users.some(
            (u) => 
                u.username === username.value && u.password === password.value
 )
if(userExist.ok){
    alert("User already Exist ")
    return;
}

const response = await fetch (`${apiUrl}/login`,{
    method: 'POST',
  body: JSON.stringify({
    email: user.email,
    username: user.username,
    password: user.password
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
const data = await response.json()
console.log("login successful", data)
alert("login successful")
window.location.href="/login.html"

    }catch(error){
        console.log(error)

    }

}
})