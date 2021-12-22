/*------- Body Onload -------*/
function init(){
    add_address();
    title_checked();
}
/*------- Go from page 0 to page 1 -------*/
function page_1(){
    document.getElementById('section_1').classList.remove("d-none");
    document.getElementById('section_0').classList.add("d-none");
    document.getElementById('nabar1').classList.remove("d-none");
};

/*------- Go to mr/miss/corporate/association form -------*/
function title_checked() {
    let a = document.querySelector('#Corporate');
    let b = document.querySelector('#Association'); 
    let c = document.querySelectorAll(".mr_miss");
    let d = document.querySelectorAll(".corporate");
    let e = document.querySelectorAll(".association");
    if (a.checked == true){
        $(".corporate").removeClass("d-none");
        $(".association").addClass("d-none");
        $(".cardAccount").removeClass("d-none");
        $(".mr_miss").addClass("d-none");
    }else if (b.checked) {
        $(".corporate").addClass("d-none");
        $(".association").removeClass("d-none");
        $(".cardAccount").removeClass("d-none");
        $(".mr_miss").addClass("d-none");
    }else {
        $(".corporate").addClass("d-none");
        $(".association").addClass("d-none");
        $(".cardAccount").addClass("d-none");
        $(".mr_miss").removeClass("d-none");
    } 
  }


/*------- Add Card -------*/

function addCard(){
    document.getElementById('sec_custom').style.display = "block";
    document.getElementById('sec_iban').style.display = "block";
    document.getElementById('add_btn').style.display = "none";
};
function deleteCard(){
    document.getElementById('sec_custom' && 'sec_iban').style.display = "none";
    document.getElementById('add_btn').style.display = "block";
};
// להשתמש בפונקציות כדי לשפר את ה - אד-קארד
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

/*------- Add Delivery Address -------*/
function add_address() {
    var checkBox = document.getElementById("DeliveryAddress");
    var text = document.getElementById("address2");
    if (checkBox.checked == true){
        text.classList.remove("d-none");
        text.classList.add("d-md-flex");
    } else {
        text.classList.add("d-none");
        text.classList.remove("d-md-flex");
    }
}
/*------- Put mr/miss details in the green card and the envelope -------*/
function text(){
    var x = document.querySelector('#FirstName').value;
    var y = document.querySelector('#LastName').value;
    var z = document.querySelector(".envelope_top_line");
    var top_line = document.querySelector('.top_line');
    var b = document.querySelector('#CustomField').value;
    var bottom_line = document.querySelector(".bottom_line");
    z.innerHTML = x + " " + y;
    top_line.innerHTML = x + " " + y;
    bottom_line.innerHTML = b;      
}
/*------- Put corporate details in the green card and the envelope -------*/
function Corporate_Details(){
    var CompanyName = document.querySelector('#CompanyName').value;
    var CorporateStructure = document.querySelector('#CorporateStructure').value;
    var bottom_line = document.querySelector('.bottom_line');
    var envelope_top_line = document.querySelector(".envelope_top_line");
    bottom_line.innerHTML = CompanyName + " " + CorporateStructure;
    envelope_top_line.innerHTML = CompanyName + " " + CorporateStructure;
}
/*------- Put association details in the green card and the envelope -------*/
function Association_Details(){
    var AssociationName = document.querySelector('#AssociationName').value;
    var bottom_line = document.querySelector('.bottom_line');
    var envelope_top_line = document.querySelector(".envelope_top_line");
    bottom_line.innerHTML = AssociationName;
    envelope_top_line.innerHTML = AssociationName;
}
/*------- Put address field in the envelope -------*/
function address2(){
    var x = document.querySelector('#address').value;
    var y = document.querySelector(".address3");
    y.innerHTML = x;
}
/*------- Put city & zip in the envelope -------*/
function city_zip(){
    var x = document.querySelector('#city').value;
    var y = document.querySelector('#zip').value;
    var z = document.querySelector(".city_zip");
    z.innerHTML = x + "," + y;   
}
/*------- Put the chosen country field in the envelope -------*/
function country2(selTag) {
  var x = selTag.options[selTag.selectedIndex].text;
  var y = document.querySelector(".country3");
  y.innerHTML =  x;
}
/*------- form validation - firstname & last name -------*/
$("#FirstName").validate({
    rules:{
        firstname:{
            minlength: 2
        }       
        },
        Messages: {
        firstname:{
            required: "This field is required."
        },
        lastname:{
            required: "This field is required.",
            maxlength: "Full name length is longer than 26 characters."
        }    
        }
});


/*------- Previous - Go from page 1 to page 0 -------*/
function previous_1(){
    document.getElementById('section_0').classList.remove("d-none");
    document.getElementById('section_1').classList.add("d-none");
    document.getElementById('nabar1').classList.add("d-none");
};
/*------- Go from page 1 to page 2 -------*/
function continue_1(){
    document.getElementById('section_2').classList.remove("d-none");
    document.getElementById('section_1').classList.add("d-none");
    document.getElementById('nabar2').classList.remove("d-none");
    document.getElementById('nabar1').classList.add("d-none");
};

/*------- Previous - Go from page 3 to page 2 -------*/
function previous_2(){
    document.getElementById('section_1').classList.remove("d-none");
    document.getElementById('section_2').classList.add("d-none");
    document.getElementById('nabar1').classList.remove("d-none");
    document.getElementById('nabar2').classList.add("d-none");
};
/*-------  Go from page 2 to page 3 -------*/
function continue_2(){
    document.getElementById('section_3').classList.remove("d-none");
    document.getElementById('section_2').classList.add("d-none");
    document.getElementById('nabar3').classList.remove("d-none");
    document.getElementById('nabar2').classList.add("d-none");
};
/*------- Previous - Go from page 3 to page 32 -------*/
function previous_3(){
    document.getElementById('section_3').classList.add("d-none");
    document.getElementById('section_2').classList.remove("d-none");
    document.getElementById('nabar3').classList.add("d-none");
    document.getElementById('nabar2').classList.remove("d-none");
};


    

