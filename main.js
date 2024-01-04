function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ferjiansyahferry@gmail.com",
    Password: "ferryae760",
    To: "nationferry7@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact From Enquiry",
    Body:
      "Nama:" +
      document.getElementById("nama").value +
      "<br> Email" +
      document.getElementById("exampleFormControlInput1").value +
      "<br> Pesan" +
      document.getElementById("exampleFormControlTextarea1").value,
  }).then((message) => alert("message sent succesfuly"));
}
