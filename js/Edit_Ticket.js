const createForm = document.getElementById("et-form")
const tickets = localStorage.getItem('Tickets') ? JSON.parse(localStorage.getItem('Tickets')) : []

const currentNoteID = localStorage.getItem('current_edit_note')
if (!currentNoteID) {
  alert("No Ticket To Update")
    (window.location.href = "NewDashboard.html")

}

const foundTicket = tickets.find(ticket => ticket.id == currentNoteID)
if (!foundTicket) {
  alert("Ticket Doesn't Exist ")
    (window.location.href = "NewDashboard.html")
}


createForm.elements['edit-title'].value = foundTicket.title
createForm.elements['edit-description'].value = foundTicket.desc
createForm.elements['edit-category'].value = foundTicket.category
createForm.elements['p-radio'].value = foundTicket.priority
createForm.elements['edit-progress'].value = foundTicket.progress
createForm.elements['edit-status'].value = foundTicket.status

document.getElementById('progresscent').textContent = `${foundTicket.progress} %`

createForm.addEventListener('submit', function (event) {
  event.preventDefault()
  document.getElementById('Edit_Ticket-btn').textContent = '  Updating Ticket...'

  const formData = new FormData(createForm)
  const title = formData.get('edit-title')
  const desc = formData.get('edit-description')
  const category = formData.get('edit-category')
  const priority = document.querySelector("input[name=p-radio]:checked").value;
  const status = formData.get('edit-status')


  foundTicket.title = title
  foundTicket.desc = desc
  foundTicket.category = category
  foundTicket.priority = priority
  foundTicket.status = status



  const new_tickets = tickets.map((ticket) => {
    if (ticket.id == foundTicket.id) {
      return foundTicket
    }

    return ticket
  })

  localStorage.setItem('Tickets', JSON.stringify(new_tickets))
  document.getElementById('Edit_Ticket-btn').textContent = 'Ticket Updated'
  setTimeout(Back,250)
})

function Back() {
  (window.location.href = "NewDashboard.html")
}



function update(value) {
  const range_display = document.querySelector('[display]')
  range_display.textContent = `${value}%`
  //     // Get the range input element by its ID
  // rangeInput = document.querySelector('#myRange')

  // // Disable the slider control
  // rangeInput.disabled = true;

}

