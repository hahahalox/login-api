alert("Please wait after login or registration🙃");
const register = document.getElementById("register");
const login = document.getElementById("login");

//? start Registration
register.addEventListener("submit", async (event) => {
  event.preventDefault();

  let email = event.target[0].value;
  let password = event.target[1].value;

  try {
    const response = await fetch(
      "https://kind-ruby-clam.cyclic.app/api/v1/admin/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    if (!response.ok) {
      alert("Failed to register 😕");
      throw new Error("Failed to register");
    }
    const result = await response.json();
    alert("Signup successfully 😉");
    localStorage.setItem("token", result.token);
    location.href = "../index.html";
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
//? end of Registration

//? start Login
login.addEventListener("submit", async (event) => {
  event.preventDefault();

  let email = event.target[0].value;
  let password = event.target[1].value;

  try {
    const response = await fetch(
      "https://kind-ruby-clam.cyclic.app/api/v1/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    if (!response.ok) {
      alert("Failed to login");
      throw new Error("Failed to login ☹");
    }
    const result = await response.json();
    console.log(result);

    localStorage.setItem("token", result.token);
    location.href = "../index.html";
    alert("Success 😎");
  } catch (error) {
    console.log(error);
  }
});
//? end of Login

const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
