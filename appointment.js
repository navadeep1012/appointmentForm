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
            parentElem.appendChild(childElem);
            //showUserOnScreen()
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


     
   

