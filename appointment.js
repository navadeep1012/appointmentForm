function test(){
    //Retreiving data
    var uname = document.getElementById("name").value;
    var uemail = document.getElementById('email').value;
    var upwd = document.getElementById('password').value;
    var utime = document.getElementById('time').value;
    //storing data in the localstorage
    var username = localStorage.setItem("uname", uname);
    var useremail = localStorage.setItem("uemail", uemail);
    var userpwd = localStorage.setItem("upwd", upwd);
    var usertime = localStorage.setItem("utime", utime);
   
}
