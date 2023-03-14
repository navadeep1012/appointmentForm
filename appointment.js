function test(){
    //Retreiving data
    var uname = document.getElementById("name").value;
    var uemail = document.getElementById('email').value;
    var upwd = document.getElementById('password').value;
    var utime = document.getElementById('time').value;

    // // Storing the retrived data as strings
    // let uname_serialized = JSON.stringify(uname);
    // let uemail_serialized = JSON.stringify(uemail);
    // let upwd_serialized = JSON.stringify(upwd);
    // let utime_serialized = JSON.stringify(utime);




    // //storing data in the localstorage
    // var username = localStorage.setItem("uname", uname_serialized);
    // var useremail = localStorage.setItem("uemail", uemail_serialized);
    // var userpwd = localStorage.setItem("upwd", upwd_serialized);
    // var usertime = localStorage.setItem("utime", utime_serialized);

    var username = localStorage.setItem("uname", uname);
    var useremail = localStorage.setItem("uemail", uemail);
    var userpwd = localStorage.setItem("upwd", upwd);
    var usertime = localStorage.setItem("utime", utime);

     
   
}
