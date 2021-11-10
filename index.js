
// Our Main Function WHen Add Button is Clicked
function AddTodo(){

    let TodoInput = document.getElementById('TodoInput').value;
    let TodoList = document.getElementById('TodoList');

    // Firstly Check The Todo Is Empty or Not
    if(TodoInput == '' || TodoInput == ' '){
        alert("Please Add Some Task")
    }
    else{

        // Create Div and Add ClassName
        let mainDiv = document.createElement('div');
        mainDiv.className = 'SingleTodo';

        // Create Input Tag and make its Type Checkbox
        let checkboxInput = document.createElement('input')
        checkboxInput.type = 'checkbox';

        // Create P Tag and Add text that we get from Todo Input
        let pText = document.createElement('p');
        pText.appendChild(document.createTextNode(TodoInput));
        
        // Create Delete Button And Add Onclick Function
        let DelBtn = document.createElement('button');
        DelBtn.appendChild(document.createTextNode('Delete'));
        DelBtn.onclick = function (e){
              let a = e.target.parentElement;
              TodoList.removeChild(a);

        }

        // Append the Checkbox, Todo Text, Delete Button to our main Div
        mainDiv.appendChild(checkboxInput);
        mainDiv.appendChild(pText);
        mainDiv.appendChild(DelBtn);

        // Add Main Div to our TodoList Section Reversly
        TodoList.insertBefore(mainDiv, TodoList.childNodes[0]);
 
        // Empty the Input Field
        document.getElementById('TodoInput').value = '';
    }
}



function DeleteTodo(){
    alert('Deklere')
}