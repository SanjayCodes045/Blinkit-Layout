// const loginBtn = document.querySelector(".login-btn").addEventListener('click', function(e){

// })

const loginBtn = document.querySelector(".login-btn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeBtn");

loginBtn.addEventListener("click", function () {
    loginModal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    loginModal.style.display = "none";
});