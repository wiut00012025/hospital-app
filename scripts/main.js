var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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

function newElement() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var symptoms = document.getElementById("symptoms").value;
    var dateTimeStr = document.getElementById("date").value;
    var date = convertDateToUTC(new Date(dateTimeStr));
    var now = new Date();

    var table = document.getElementById("appointments");
    var isValid;
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

function convertDateToUTC(date) {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}

var rws;

function removeRow() {
    obj = document.getElementById('tbody');
    rws = obj.getElementsByTagName('tr');
    if (rws.length === 3) {
        alert("You can only delete your appointments");
    } else {
        obj.removeChild(rws[rws.length - 1]);
        alert("Successfully deleted!");
    }
}

function sendEmail(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

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
        var form = document.getElementById("contact-form");
        form.reset();
    }

}