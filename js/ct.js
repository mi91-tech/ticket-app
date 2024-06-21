function toname(userName) {
    let USER = localStorage.getItem("firstname");
    console.log(USER);
    let user_Name = document.querySelector("#userName");
    user_Name.textContent = `welcome ${USER}`
  
  }
  toname()
  function logout() {
    (window.location.href = "/index.html")
  
  }
  function logoutDrop() {
    document.getElementById('Logout-bg').style.visibility = 'visible'
    setInterval(() => {
      document.getElementById('Logout-bg').style.visibility = 'hidden'
    }, 4000);
  }  




const createForm = document.getElementById("create")

createForm.addEventListener('submit', function (event) {
    event.preventDefault()
     document.getElementById('create_Ticket-btn').textContent= 'Creating Ticket...'

    const formData = new FormData(createForm)
    const id = + Math.random() * 1000;
    const title = formData.get('title')
    const desc = formData.get('description')
    const category = formData.get('category')
    const priority = document.querySelector("input[name=p-radio]:checked").value;
    const date  =  new Date().toLocaleString();
    

    const Ticket = {id, title, category, desc, priority,date}
    console.log(Ticket);
   
    const Tickets = localStorage.getItem('Tickets') ? JSON.parse(localStorage.getItem("Tickets")) : []
    Tickets.push(Ticket)
    console.log(Tickets)
    localStorage.setItem('Tickets', JSON.stringify(Tickets))
    setTimeout(Back,250)
})


function Back() {
  (window.location.href = "NewDashboard.html")
}
