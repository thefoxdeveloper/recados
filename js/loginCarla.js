const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (isLoggedIn) {
  // If the user is not logged in, redirect them to the login page
  location.href = "mostrar-recados.html";
}
document.getElementById("cadastro").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "cadastrar-login.html";
});
const formLogin = document.getElementById("form-login");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault(); // impede comportamento padrão submit

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const data = {
    email: emailValue,
    password: passwordValue,
  };

  login(data);
});

async function login(user) {
  try {
    const response = await api.post("/users/login", user);

    if (response.status === 200) {
      const rememberMe = document.getElementById("remember").checked;
      if (rememberMe) {
        sessionStorage.setItem("isLoggedIn", "true");
      }
      localStorage.setItem('userId', response.data.userId)
      location.href = "mostrar-recados.html";
    }
  } catch (error) {
    console.log("Erro ao cadastrar recado", error);
  }
}
const form = document.getElementById("form-login");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "#ccc";
  event.target.style.color = "white";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
