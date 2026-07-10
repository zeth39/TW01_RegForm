function emailSend() {
 const userName = document.getElementById('name').value;
 const phone = document.getElementById('phone').value;
 const email = document.getElementById('email').value;

 const messageBody = `
    <h3>New Form Submission</h3>
    <p><strong>Name:</strong> ${userName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;

 fetch("https://api.elasticemail.com/v2/email/send", {
  method: "POST",
  headers: {
   "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
   apikey: "EC1C1EF76E2356ACE64542972A94B02E06B48E3A1E5F9AE1BF672832CE6AC99FC91C911AB43E9B1430822D4CE5022371",
   subject: "New Contact Form Submission",
   from: "sethashton.orteza@gmail.com",
   to: "sethashton.orteza@gmail.com",
   bodyHtml: messageBody,
   isTransactional: true
  })
 })

  .then(response => response.json())
  .then(data => {
   if (data.success) {
    swal("Successful", "Email has been sent successfully!", "success");
   } else {
    swal("Error", "Failed to send email!", "error");
    .error("Elastic Error:", data.error);
   }
  })
  
  .catch(error => {
   swal("Error", "An unexpected error occurred!", "error");
   .error("Fetch Error:", error);
  });
}

    let label=document.querySelectorAll('label').
    forEach(label=> {
      label.innerHTML = label.innerText.split('').map
        ((letters, i) => `<span style="transition-delay: $ {i * 50}ms">${letters} </span>`).join('');
        });
