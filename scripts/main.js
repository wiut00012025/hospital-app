var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

//function to show slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//this function takes inputs and creates a new row on the table
function newElement() {
    //getting inputs of inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var symptoms = document.getElementById("symptoms").value;
    var dateTimeStr = document.getElementById("date").value;
    var date = convertDateToUTC(new Date(dateTimeStr));
    var now = new Date();

    var table = document.getElementById("appointments");
    var isValid;
    //validation
    if (name === '') {
        isValid = false;
        alert("Name Cannot be Empty");
    } else if (phone === '') {
        isValid = false;
        alert("Phone Cannot be Empty");
    } else if (symptoms === '') {
        isValid = false;
        alert("Symptoms Cannot be Empty");
    } else if (isNaN(date.getTime()) || date <= now) {
        isValid = false;
        alert("Please select a date AND time in the future.");
    } else {
        isValid = true;
    }


    if (isValid) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = phone;
        cell4.innerHTML = symptoms;
        cell5.innerHTML = date;
        alert("Successfully Added. See you then!");
        //clearing after successful input
        var form = document.getElementById("app-form");
        form.reset();
    }

}
//function to received date to date format
function convertDateToUTC(date) {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}

var rws;
//removes the row
function removeRow() {
    obj = document.getElementById('tbody');
    rws = obj.getElementsByTagName('tr');
    if (rws.length === 3) {
        //default rows are kept
        alert("You can only delete your appointments");
    } else {
        obj.removeChild(rws[rws.length - 1]);
        alert("Successfully deleted!");
    }
}
//emailing sending form function
function sendEmail(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    //validation of inputs
    var isValid;
    if (name === '') {
        isValid = false;
        alert("Name Cannot be Empty");
    } else if (email === '') {
        isValid = false;
        alert("Email Cannot be Empty");
    } else if (phone === '') {
        isValid = false;
        alert("Phone Cannot be Empty");
    } else if (message === '') {
        isValid = false;
        alert("Message Cannot be Empty");
    }  else {
        isValid = true;
    }
    if (isValid){
        alert("Successfully Sent!");
        //clear inputs
        var form = document.getElementById("contact-form");
        form.reset();
    }

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


