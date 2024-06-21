
function toname(userName) {
  let USER = localStorage.getItem("firstname");
  console.log(USER);
  let user_Name = document.querySelector("#userName");
  user_Name.textContent = `welcome ${USER}`

}
toname()




function Register() {

  const Firstname = String(document.getElementById("firstname").value)
  console.log(Firstname);
  localStorage.setItem("firstname", Firstname)
  const Lastname = String(document.getElementById("lastname").value)
  console.log(Lastname);

  const Email = String(document.getElementById("email").value)
  console.log(Email);
  localStorage.setItem("Email", Email);
  console.log(localStorage);

  const Original_Password = String(document.getElementById("E-password").value)
  console.log(Original_Password);
  const Confirm_Password = String(document.getElementById("C-password").value)
  localStorage.setItem("Passcode", Confirm_Password);
  console.log(localStorage);
  console.log(Confirm_Password);

  CreatedAccount = { Firstname, Lastname, Email, Original_Password, Confirm_Password }
  console.log(CreatedAccount);
  if (Firstname === "") {
    document.querySelector('#Notification').textContent = 'Input Your Firstname'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Input Your Firstname'
      document.getElementById('Notification').style.visibility = 'hidden'
    }, 3500)
  }
  if (Lastname === "") {
    document.querySelector('#Notification').textContent = 'Input Your Lastname'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Input Your Lastname'
      document.getElementById('Notification').style.visibility = 'hidden'
    }, 3500);
  }
  if (Email === "") {
    document.querySelector('#Notification').textContent = 'Input Your Email'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Input Your Email'
      document.getElementById('Notification').style.visibility = 'hidden'
    }, 3500);
  }
  if (Original_Password === "") {
    document.querySelector('#Notification').textContent = 'Create a Password'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Create a Password'
      document.getElementById('Notification').style.visibility = 'hidden'
    }, 3500);
  }
  if (Confirm_Password === "") {
    document.querySelector('#Notification').textContent = 'Confirm Your Password'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Confirm Your Password'
      document.getElementById('Notification').style.visibility = 'hidden'
    }, 3500);
  }

  if (Confirm_Password === Original_Password) {


    document.querySelector('.r-btn').textContent = 'Registering....'
   
    document.querySelector('#Notification').textContent = 'Account Created😁'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {
      document.querySelector('#Notification').textContent = 'Account Created😁'
      document.getElementById('Notification').style.visibility = 'hidden'
        (window.location.href = "/index.html")
    }, 3500);


  }
  else {
    document.querySelector('#Notification').textContent = 'Password does not match'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Password does not match'
      document.getElementById('Notification').style.visibility = 'hidden'
    }, 3500);

  }

}


function Login() {

  const UpdatedEmail = localStorage.getItem("Email");
  const UpdatedCode = localStorage.getItem("Passcode");
  console.log(UpdatedEmail)
  console.log(UpdatedCode)

  const Gmail = String(document.querySelector('#gmail').value)
  console.log(Gmail);
  const Password = String(document.querySelector("#LoginPassword").value)
  console.log(Password);
  LoginDetails = { Gmail, Password }
  console.log(LoginDetails);


  if (Password !== UpdatedCode) {

    document.querySelector('#Notification').textContent = 'Wrong Password'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Wrong Password'
      document.getElementById('Notification').style.visibility = 'hidden'
    }, 3500);

  }


  if (Gmail !== UpdatedEmail) {
    document.querySelector('#Notification').textContent = 'Wrong Email'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Wrong Email'
      document.getElementById('Notification').style.visibility = 'hidden'

    }, 3500);


  }
  if (Gmail === UpdatedEmail & Password === UpdatedCode) {
   
    document.querySelector('#sign-btn').textContent = 'Processing....'
    document.querySelector('#Notification').textContent = 'Login Successful'
    document.getElementById('Notification').style.visibility = 'visible'
    setInterval(() => {

      document.querySelector('#Notification').textContent = 'Login Successful'
      document.getElementById('Notification').style.visibility = 'hidden'
    (window.location.href = "pages/NewDashboard.html")
       
    }, 3500);
    const Name = localStorage.getItem("firstname");
    console.log(Name);
    document.querySelector('.Richard').textContent = Name

  }

}








function logoutDrop() {
  document.getElementById('Logout-bg').style.visibility = 'visible'
  setInterval(() => {
    document.getElementById('Logout-bg').style.visibility = 'hidden'
  }, 4000);
}
function update(value) {
  const range_display = document.querySelector('[display]')
  range_display.textContent = `${value}%`
  //     // Get the range input element by its ID
  // rangeInput = document.querySelector('#myRange')

  // // Disable the slider control
  // rangeInput.disabled = true;

}
function Back() {
  (window.location.href = "NewDashboard.html")
}
function Edit_ticket() {
  (window.location.href = "pages/Edit_Ticket.html")
}

// Get the range input element by its ID
rangeInput = document.querySelector('#myRange')

// Disable the slider control
rangeInput.disabled = true;

function logout() {
  (window.location.href = "pages/Login.html")

}


function CloseTicket_Info() {
  (window.location.href = "../NewDashboard.html")
}
function TicketDetails() {
  (window.location.href = "pages/Ticket_info.html")

  
}

