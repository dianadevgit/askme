import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');


const checkButton = document.querySelectorAll(".actions a.check");
checkButton.forEach(button => {
    
    button.addEventListener("click", event => handleClickBt(event, true)); //the way to pass event

})

const deleteButton = document.querySelectorAll(".actions a.delete");
deleteButton.forEach(button => {
    
    button.addEventListener("click", event => handleClickBt(event, false)); 

})

//Setup HTML according the button was clicked: Check or Delete
function handleClickBt(event, check){
    
    event.preventDefault();

    //Get the action value
    const action = check ? "check" : "delete"; 

    //Get the room id value using dataset
    const roomId = document.querySelector("#room-id").dataset.id;
    //Get the question ID using Event, the event attributes will contain question-id
    const questionId = event.target.dataset.id;

    //Change the form action when click to confirm delete: /room/:room/:question/:action
    const form = document.querySelector(".modal form");
    form.setAttribute("action",`/room/${roomId}/${questionId}/${action}`);
    
    //let checkAction = document.querySelector(".modal form").getAttribute("action");
    //console.log("checkAction:   "+checkAction);
    //console.log("Form Action: "+`/room/${roomId}/${questionId}/${action}`);
    
    modalTitle.innerHTML = check ? "Mark as read" : "Delete question";
    modalDescription.innerHTML = check ? "" : "Are you sure you want to delete this question?";
    modalButton.innerHTML = check ? "Confirm" : "Delete";
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
    modalButton.addEventListener('click', event => formActionClick(event));
    modal.open();
}

function formActionClick(event){
    const form = document.querySelector(".modal form");
    form.submit();
}
