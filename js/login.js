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

      const acheiEmail = users.some((x) => x.login == emailValue);
      const acheiPass = users.some((x) => x.password == passwordValue);
      if (acheiEmail && acheiPass) {
        location.href = "mostrar-recados.html";
      } else alert("Email ou Senha invalidos");
    });
  } catch (error) {
    console.log("Erro ao buscar usuarios", error);
  }
}
