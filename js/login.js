// Check if the user is logged in
const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (isLoggedIn) {
  // If the user is not logged in, redirect them to the login page
  location.href = "mostrar-recados.html";
}

document.getElementById("cadastro").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "cadastrar-login.html";
});
logar();
const formLogin = document.getElementById("form-login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
async function logar() {
  try {
    const response = await api.get("/users");
    const users = response.data;
    console.log(users);
    formLogin.addEventListener("submit", (event) => {
      event.preventDefault(); // impede comportamento padrão submit

      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;
      const rememberMe = document.getElementById("remember").checked;

      const acheiEmail = users.some((x) => x.login == emailValue);
      const acheiPass = users.some((x) => x.password == passwordValue);
      if (acheiEmail && acheiPass) {
        if (rememberMe) {
          sessionStorage.setItem("isLoggedIn", "true");
        }

        location.href = "mostrar-recados.html";
      } else alert("Email ou Senha invalidos");
    });
  } catch (error) {
    console.log("Erro ao buscar usuarios", error);
  }
}

const form = document.getElementById("form-login");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "grey";
  event.target.style.color = "white";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
