const formNewUser = document.getElementById("form-new-user");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

formNewUser.addEventListener("submit", (event) => {
  event.preventDefault(); // impede comportamento padrão submit

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const nomeValue = nomeInput.value;

  const newUser = {
    name: nomeValue,
    login: emailValue,
    password: passwordValue,
  };

  createnewUser(newUser);
});

async function createnewUser(user) {
  try {
    const response = await api.post("/users", user);

    if (response.status === 201) {
      alert("Usuario cadastrado com sucesso!");

      emailInput.value = "";
      passwordInput.value = "";

      location.href = "index.html";
    }
  } catch (error) {
    console.log("Erro ao cadastrar recado", error);
  }
}
