function myfun() {
   var v = $("#TRow").clone().appendTo("#TBody");
     $(v).find("input").val('');
     
 }


 function BtnDel(v) {
    $(v).parent().parent().remove();
 }


 //save


 function myfunc() {
     

     var name = document.getElementById("name").value;
     var dob = document.getElementById("dob").value;
     var adhar = document.getElementById("adhar").value;
     var mob = document.getElementById("mob").value;
     var age = document.getElementById("age").value;


     let data = {
             "Name": name,
             "Date Of Birth": dob,
             "Adhar Number": adhar,
             "Mobile": mob,
             "Age": age
       };
     

     localStorage.setItem('user-info', JSON.stringify(data));
     
 }

//get data


 const retrive =   localStorage.getItem('user-info')
 console.log(retrive)

 const ret1 = JSON.parse(retrive)
 console.log(ret1)



function adrfind(){
    let adr = document.getElementById("entry1").value
    console.log(adr)

 let showdata = document.getElementById("show")


 let sw1 = document.getElementById("sw1");
 let sw2 = document.getElementById("sw2");
 let sw3 = document.getElementById("sw3");
 let sw4 = document.getElementById("sw4");
 let sw5 = document.getElementById("sw5");


    if(adr===ret1["Adhar Number"]) {
         sw1.innerText = ret1["Name"]
         sw2.innerText = ret1["Age"]
         sw3.innerText = ret1["Date Of Birth"]
         sw4.innerText = ret1["Adhar Number"]
         sw5.innerText = ret1["Mobile"]

    } else {
        showdata.innerText = "No Data"
    }
}


