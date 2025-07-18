function sendOTP() {
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Please enter your email.");
    return;
  }

  fetch("/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("OTP sent to your email!");
      document.getElementById("otpSection").style.display = "block";
    } else {
      alert("Server error. Try again.");
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
    alert("Could not send OTP.");
  });
}

function verifyOTP() {
  const email = document.getElementById("email").value;
  const enteredOtp = document.getElementById("otp").value;

  fetch("/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, enteredOtp }),
  })
  .then(res => res.json())
  .then(data => {
    if (data.verified) {
      alert("Registered successfully!");
      window.location.href = "/index.html";
    } else {
      alert("Invalid OTP.");
    }
  })
  .catch(error => {
    console.error("Verification error:", error);
    alert("Something went wrong.");
  });
}
