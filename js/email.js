const btn = document.querySelector(".button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const subject = document.querySelector("input[name='subject']").value;
  const message = document.querySelector("textarea[name='message']").value;
  const email = document.querySelector("input[name='email']").value;
  Email.send({
    SecureToken: "7390b471-6e32-4dec-88e8-760dc246ae16",
    To: "tomek.jelitocompany@gmail.com",
    From: "tomek.jelito@gmail.com",
    Subject: `PORTFOLIO -${subject}`,
    Body: `<h1>Wiadomość od ${email}</h1>
        <p>${message}</p> `,
  }).then((message) => alert("Wiadomość wysłana"));
  document.querySelector("input[name='subject']").value = "";
  document.querySelector("textarea[name='message']").value = "";
  document.querySelector("input[name='email']").value = "";
});
