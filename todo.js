
const toDoForm = document.querySelectorAll(".todo-form");
const toDoInput = document.querySelectorAll(".todo-form input");
const toDoList = document.querySelectorAll(".todo-list");

const dayTitle = document.querySelectorAll(".daytitle")

for (let i = 0; i < toDoForm.length; i++) {
    dayTitle[i].innerText = `${i + 1} day`

    let listArray = [];


    function inputListSave (objectList) {
        const newLi = document.createElement("li");
        const newSpan = document.createElement("span");
        const deletebtn = document.createElement("button")
        
        const spanContent = document.createTextNode(objectList.text);
        
        newLi.appendChild(newSpan);
        newLi.appendChild(deletebtn);
        newLi.id = objectList.id;
        newSpan.appendChild(spanContent);
        
        toDoList[i].appendChild(newLi);
        
        deletebtn.innerText = "Success";
        deletebtn.addEventListener("click", (event) => {
            const li = event.target.parentElement;
            li.remove();
            listArray = listArray.filter((listArray) => listArray.id !== parseInt(li.id));
            localStorage.setItem(`toDoList${i}`, JSON.stringify(listArray))
        })

    }


    function toDoListSubmit (event) {
        event.preventDefault();

        if (toDoList[i].getElementsByTagName("li").length <= 5) {
            const inputList = toDoInput[i].value

            const objectList = {
                text:inputList,
                id: Date.now(),
            }
        
            toDoInput[i].value = ""
            
            listArray.push(objectList);    
            
            inputListSave(objectList);
        
            localStorage.setItem(`toDoList${i}`, JSON.stringify(listArray))
        } else {
            return;
        }
        
    }
    
    toDoForm[i].addEventListener("submit", toDoListSubmit);


    const saveList = localStorage.getItem(`toDoList${i}`)

    if (saveList !== null) {
        const parseList = JSON.parse(saveList);
        listArray = parseList;
        parseList.forEach(inputListSave);
}

}