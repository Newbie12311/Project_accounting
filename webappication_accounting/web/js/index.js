let data_day = new Object() ;
data_day.arr_sum_ridi = [] ;
data_day.arr_sum_radiji = [] ;  
let sum_ridi = 0 ; 
let sum_riji = 0 ; 
let data_count = 0 ; 
let func_table = () => document.getElementById("table_data").innerHTML += `<table class="table table-white"></table>` ;
let fun_list = () => data_day.list = prompt("ป้อนข้อมูลรายการ:\t") ;
let fun_radi = () => data_day.radi = prompt("ป้อนข้อมูลรายการรายได้:\t") ;
let fun_radiji = () => data_day.radiji = prompt("ป้อนข้อมูลรายการใช้จ่าย:\t") ;
let fun_papiz = () => data_day.papiz = prompt("ป้อนข้อมูลประเภทการใช้จ่าย:\t") ;
let fun_money = () => data_day.money = parseInt(prompt("ป้อนข้อมูลจำนวนเงิน:\t")) ;
function func_date(){
    data_day.date_one = prompt("ป้อนข้อมูลวันที่:\t") ;
    data_day.date_don = prompt("ป้อนข้อมูลเดือน:\t") ;
    data_day.date_years = prompt("ป้อนข้อมูลปี:\t") ;
} 
// function create_tableHead(){
//     document.getElementById("table_data").innerHTML = `
//     <table class="table table-white">
//     <thead>
//     <tr>
//       <th scope="col">จํานวน</th>
//       <th scope="col">ชื่อ</th>
//       <th scope="col">นามสกุล</th>
//       <th scope="col">วัน</th>
//       <th scope="col">เดือน</th>
//       <th scope="col">ปี</th>
//       <th scope="col">รายการใช้จ่าย</th>
//       <th scope="col">รายการรายได้</th>
//       <th scope="col">รายการประเภทการใช้จ่าย</th>
//       <th scope="col">รายการจำนวนเงิน</th>
//     </tr>
//    </thead>
//    </table>
//     `
// }
function create_table() {
    data_count += 1;
    document.getElementById("table_data").innerHTML += `
    <table class="table table-white">
    <thead>
    <tr>
      <th scope="col">จํานวน</th>
      <th scope="col">ชื่อ</th>
      <th scope="col">นามสกุล</th>
      <th scope="col">วัน</th>
      <th scope="col">เดือน</th>
      <th scope="col">ปี</th>
      <th scope="col">รายการใช้จ่าย</th>
      <th scope="col">รายการรายได้</th>
      <th scope="col">รายการประเภทการใช้จ่าย</th>
      <th scope="col">รายการจำนวนเงิน</th>
    </tr>
   </thead>
   <tbody>
    <tr>
      <th scope="row">${data_count}</th>
      <td>${data_day.fname}</td>
      <td>${data_day.lname}</td>
      <td>${data_day.date_one}</td>
      <td>${data_day.date_don}</td>
      <td>${data_day.date_years}</td>
      <td>${data_day.radiji}</td>
      <td>${data_day.radi}</td>
      <td>${data_day.papiz}</td>
      <td>${data_day.money}</td>
    </tr>
   </tbody><br>
    ` ;
}
function func_name(){
    data_day.fname = prompt("ป้อนข้อมูลชื่อจริง:\t") ;
    data_day.lname = prompt("ป้อนข้อมูลนามสถุล:\t") ;
} 
function add_sum(){
    data_day.arr_sum_ridi[data_count - 1] = data_day.money ;
    for(let i = 0; i < parseInt(data_day.arr_sum_ridi.length); i += 1){
        sum_ridi += parseInt(data_day.arr_sum_ridi[i]) ; 
    }
    alert(`เเสดงรายรับ:${sum_ridi}`) ; 
}
function add_sum_riji(){
    data_day.arr_sum_radiji[data_count - 1] = data_day.money ;
    for(let i = 0; i < parseInt(data_day.arr_sum_radiji.length); i += 1){
        sum_riji += parseInt(data_day.arr_sum_radiji[i]) ; 
    }
    alert(`เเสดงรายรับ:${sum_riji}`) ; 
}
function display_blance(){
    alert(`ยอดเงินเหลือ:${sum_ridi - sum_riji}บาท`) ;
}


