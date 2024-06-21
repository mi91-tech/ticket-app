let TicketId = document.getElementById('TicketId')
let TicketTitle = document.getElementById('TicketTitle')
let TicketDesc = document.getElementById('TicketDescription')
let TicketProgress = document.getElementById('TicketProgress')
let TicketCategory = document.getElementById('TicketCategory')
let TicketPriority = document.getElementById('TicketPriority')
let TicketStatus = document.getElementById('TicketStatus')
let TicketDate = document.getElementById('TicketDate')


const tickets = localStorage.getItem('Tickets') ? JSON.parse(localStorage.getItem('Tickets')) : []



const selectedItemId = localStorage.getItem('details')

let ticketAvailable = tickets.find((ticket) => ticket.id == selectedItemId);

console.log(ticketAvailable);
console.log(ticketAvailable.id);



  TicketId.innerText = `Ticket Id:  ${ticketAvailable.id}`; 
  TicketTitle.innerText = `Ticket Title:  ${ticketAvailable.title}`;
  TicketCategory.innerText = `Ticket Category: ${ticketAvailable.category}`;
  TicketPriority.innerText = `Ticket Priority: ${ticketAvailable.priority}`;
  TicketProgress.innerText =`Ticket Progress: ${ticketAvailable.progress}`;
  TicketStatus.innerText = `Ticket Status: ${ticketAvailable.status}`;
  TicketDate.innerText = `Ticket Date: ${ticketAvailable.date}`;
  TicketDesc.innerText = ticketAvailable.desc;

function Back() {
    (window.location.href = "NewDashboard.html")
  }
  function closeTicketdetails(){
    (window.location.href = "NewDashboard.html")

  }