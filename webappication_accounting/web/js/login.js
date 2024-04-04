let data = [] ; 
let count = 0 ; 
function set_data(){
    let data_map = {
        name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        passw_id: document.getElementById("passwords").value
    } ;
    if((data_map.name != '' && data_map.email_id != '' ) && (data_map.passw_id != '')){
        data[count] = {
            name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            passw_id: document.getElementById("passwords").value
        } ;
        document.getElementById("disp").innerHTML = "<div class='alert alert-success' role='alert'><b>Thank You Login success</b></div>" ;
        open("/web/html/index.html") ;
        count += 1 ;
    }else{
        document.getElementById("disp").innerHTML = "<div class='alert alert-danger' role='alert'><b>Login failed</b></div>" ;
    }
}
