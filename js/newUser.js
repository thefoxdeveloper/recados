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
    email: emailValue,
    password: passwordValue,
  };

  createnewUser(newUser);
});

async function createnewUser(user) {
  try {
    const response = await api.post("/users/signup", user);

    if (response.status === 201) {
      alert("Usuario cadastrado com sucesso!");
      
      emailInput.value = "";
      passwordInput.value = "";
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      const token = Math.random().toString(36).substring(2);

      sessionStorage.setItem("token", token);

      // sessionStorage.setItem("isLoggedIn", "true");

      location.href = "index.html";
    }
  } catch (error) {
    console.log("Erro ao cadastrar recado", error);
  }
}
const form = document.getElementById("form-new-user");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "#ccc";
  event.target.style.color = "white";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
