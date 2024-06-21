
function toname(userName) {
  let USER = localStorage.getItem("firstname");
  console.log(USER);
  let user_Name = document.querySelector("#userName");
  user_Name.textContent = `welcome ${USER}`

}
toname()







let Tickets = localStorage.getItem('Tickets') ? JSON.parse(localStorage.getItem('Tickets')) : [
  {
    id: `note-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`,
    title: "My PC has damaged",
    desc: "I'm currently facing an issue as my laptop has been damaged. Unfortunately, this is impacting my ability to use it effectively.",
    category: "hardware-problem",
    priority: 3,
    progress: 100,
    status: "done",
    date: "12/12/2023. 02:34pm",
  },
  {
    id: `note-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`,
    title: "My Visual Studio Code stopped ",
    desc: "Unfortunately, my VS Code has stopped working unexpectedly. I'm currently unable to use the editor, and I'm seeking assistance to",
    category: "software-problem",
    priority: 4,
    progress: 0,
    status: "not-started",
    date: "06/05/2023. 03:14am",
  },
  {
    id: `note-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`,
    title: "I'm working on a Next.JS Project",
    desc: "I'm currently immersed in working on a Next.js project. Leveraging the power of React, Next.js allows me to build a dynamic and efficient web application.",
    category: "project",
    priority: 4,
    progress: 40,
    status: "started",
    date: "10/10/2023. 03:40pm",
  },

]

localStorage.setItem('Tickets', JSON.stringify(Tickets))



printTicketByCategory("hardware-problem")
printTicketByCategory("software-problem")
printTicketByCategory("project")

function printTicketByCategory(category) {
  
  const filtered = Tickets.filter(Ticket => Ticket.category == category);
  document.getElementById(`${category}`).innerHTML = ""
  filtered.forEach(Ticket => {
    document.getElementById(`${category}`).innerHTML += `
             <div class="Ticket  " id="first">
       ${'<i id="alarm1" class="bi bi-alarm" ></i>'.repeat(Ticket.priority)}
      ${'<i class="bi bi-alarm" ></i>'.repeat(5 - Ticket.priority)}

        <i onclick="ticketDetails('${Ticket.id}')" class="bi bi-eye"></i>
        <i onclick="Edit_ticket('${Ticket.id}')"  class="bi bi-pencil-square"></i>
        <i onclick="deleteTicket('${Ticket.id}')" class="bi bi-x-lg"></i>

        <p id="ticketTitle">${Ticket.title}</p>
        <hr>
        <p id="ticketDescription">
            ${Ticket.desc}
        </p>
        <div id="ticketDate">${Ticket.date}</div>
<div class="progress" ><span class="zero">0%</span><input value="5%" min="0" max="99%"  type="range" id="myRange"><span class="hun">100%</span></div>
<div id="ticketStatus" >  ${Ticket.status}</div> 
    </div>
     
        `
       
  })

}

let TicketId = document.getElementById('TicketId').textContent
let TicketTitle = document.getElementById('TicketTitle').textContent
let TicketDesc = document.getElementById('TicketDescription').textContent
let TicketProgress = document.getElementById('TicketProgress').textContent
let TicketCategory = document.getElementById('TicketCategory').textContent
let TicketPriority = document.getElementById('TicketPriority').textContent
let TicketStatus = document.getElementById('TicketStatus').textContent
let TicketDate = document.getElementById('TicketDate').textContent


 function ticketDetails(id) {

  localStorage.setItem('details', id)
  
  (window.location.href = "/pages/Ticket_Info.html")




  
 }

function deleteTicket(id) {
  Tickets = Tickets.filter(ticket => ticket.id != id)
  localStorage.setItem('Tickets', JSON.stringify(Tickets))
  printTicketByCategory("hardware-problem")
  printTicketByCategory("software-problem")
  printTicketByCategory("project")
}

// Get the range input element by its ID
rangeInput = document.querySelector('#myRange')

// Disable the slider control
rangeInput.disabled = true;

function logout() {
  (window.location.href = "/index.html")

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
function Edit_ticket(id) {
  localStorage.setItem('current_edit_note', id)
    (window.location.href = "Edit_Ticket.html")


}
