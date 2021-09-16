export default function Modal(){
    
    const wrapper = document.querySelector(".modal-wrapper");
    const cancelButton = document.querySelector('.button.cancel');
    cancelButton.addEventListener("click", close);

    const deleteButton = document.querySelector('.button.delete');
    deleteButton.addEventListener("click", close);

    function open(){
        //Will atribute the class Active to the modal html
        wrapper.classList.add("active");
    }

    function close(){
        //Will remove the class Active from modal html 
        event.preventDefault();
        wrapper.classList.remove("active");
    }
        
    return{
        open,
        close
    } 
}