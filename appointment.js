var itemList = document.getElementById('list')
// itemList.addEventListener('click', removeItem);
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const obj = {
        name,
        email,
        phone
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    const parentElem = document.getElementById('list');
    const childElem = document.createElement('li')
    childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phone
    /*var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);*/
    var deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'delete';
    deleteBtn.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem)
    }
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);
    var editBtn = document.createElement('input');
    editBtn.type ='button';
    editBtn.value = 'edit';
    editBtn.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem)
    }
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem)
}

























    // // Storing the retrived data as strings
    // let uname_serialized = JSON.stringify(uname);
    // let uemail_serialized = JSON.stringify(uemail);
    // let uphone_serialized = JSON.stringify(uphone);
    // let utime_serialized = JSON.stringify(utime);





    // //storing data in the localstorage
    // var username = localStorage.setItem("uname", uname_serialized);
    // var useremail = localStorage.setItem("uemail", uemail_serialized);
    // var userpwd = localStorage.setItem("uphone", uphone_serialized);
    // var usertime = localStorage.setItem("utime", utime_serialized);


     
   

