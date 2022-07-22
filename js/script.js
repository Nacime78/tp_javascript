"use strict";

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// 4 fonctions carousel pour chaque image

function carousel1(){
    let image = document.querySelector('#voiture1 img');
    let imageSrc = image.getAttribute('src');
    console.log(imageSrc);
    if(imageSrc == "img/vehicule1.png"){
        image.src = "img/vehicule2.png";
    }
    if(imageSrc == "img/vehicule2.png"){
        image.src = "img/vehicule3.png";
    }
    if(imageSrc == "img/vehicule3.png"){
        image.src = "img/vehicule4.png";
    }
    if(imageSrc == "img/vehicule4.png"){
        image.src = "img/vehicule1.png";
    }
};

function carousel2(){
    let image = document.querySelector('#voiture2 img');
    let imageSrc = image.getAttribute('src');
    console.log(imageSrc);
    if(imageSrc == "img/vehicule2.png"){
        image.src = "img/vehicule3.png";
    }
    if(imageSrc == "img/vehicule1.png"){
        image.src = "img/vehicule2.png";
    }
    if(imageSrc == "img/vehicule3.png"){
        image.src = "img/vehicule4.png";
    }
    if(imageSrc == "img/vehicule4.png"){
        image.src = "img/vehicule1.png";
    }
};

function carousel3(){
    let image = document.querySelector('#voiture3 img');
    let imageSrc = image.getAttribute('src');
    console.log(imageSrc);
    if(imageSrc == "img/vehicule3.png"){
        image.src = "img/vehicule4.png";
    }
    if(imageSrc == "img/vehicule4.png"){
        image.src = "img/vehicule1.png";
    }
    if(imageSrc == "img/vehicule1.png"){
        image.src = "img/vehicule2.png";
    }
    if(imageSrc == "img/vehicule2.png"){
        image.src = "img/vehicule3.png";
    }
};

// carousel 

function carousel4(){
    let image = document.querySelector('#voiture4 img');
    let imageSrc = image.getAttribute('src');
    console.log(imageSrc);
    if(imageSrc == "img/vehicule4.png"){
        image.src = "img/vehicule1.png";
    }
    if(imageSrc == "img/vehicule1.png"){
        image.src = "img/vehicule2.png";
    }
    if(imageSrc == "img/vehicule2.png"){
        image.src = "img/vehicule3.png";
    }
    if(imageSrc == "img/vehicule3.png"){
        image.src = "img/vehicule4.png";
    }
};

setInterval(carousel1, 1500);
setInterval(carousel2, 1500);
setInterval(carousel3, 1500);
setInterval(carousel4, 1500);

// function carousel(){
//     let image = $('#voiture1 img');
//     let imageSrc = image.attr('src');
//     console.log(imageSrc);
//     if(imageSrc == "img/vehicule1.png"){
//         $('img').attr('src', 'img/vehicule1.png').fadeTo(2000, 0);
//         $('img').attr('src', 'img/vehicule2.png').fadeTo(2000, 1);
//     }
//     if(imageSrc == "img/vehicule2.png"){
//         $('img').attr('src', 'img/vehicule2.png').fadeTo(2000, 0);
//         $('img').attr('src', 'img/vehicule3.png').fadeTo(2000, 1);
//     }
//     if(imageSrc == "img/vehicule3.png"){
//         $('img').attr('src', 'img/vehicule3.png').fadeTo(2000, 0);
//         $('img').attr('src', 'img/vehicule4.png').fadeTo(2000, 1);
//     }
//     if(imageSrc == "img/vehicule4.png"){
//         $('img').attr('src', 'img/vehicule4.png').fadeTo(2000, 0);
//         $('img').attr('src', 'img/vehicule1.png').fadeTo(2000, 1);
//     }
// };

// setInterval(carousel, 2000);

var themonth = 1;
var themonth2 = 1;
renderCal(themonth);
renderCal2(themonth2);

$('.minusmonth').click(function(){
  themonth += -1;
  renderCal(themonth);
});

$('.minusmonth2').click(function(){
  themonth2 += -1;
  renderCal2(themonth2);
});

$('.addmonth').click(function(){
  themonth += 1;
  renderCal(themonth);
});

$('.addmonth2').click(function(){
  themonth2 += 1;
  renderCal2(themonth2);
});

function renderCal(themonth){
$('.calendar li').remove();
$('.calendar ul').append('<li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li> <li>Su</li>');
var d = new Date(),
  currentMonth = d.getMonth()+themonth, // get this month
  days = numDays(currentMonth,d.getYear()), // get number of days in the month
  fDay = firstDay(currentMonth,d.getYear())-1, // find what day of the week the 1st lands on
  months = ['January','February','March','April','May','June','July','August','September','October','November','December']; // month names

$('.calendar p.monthname').text(months[currentMonth-1]); // add month name to calendar

for (var i=0;i<fDay-1;i++) { // place the first day of the month in the correct position
  $('<li>&nbsp;</li>').appendTo('.calendar ul');
}

for (var i = 1;i<=days;i++) { // write out the days
  $('<li>'+i+'</li>').appendTo('.calendar ul');
}

function firstDay(month,year) {
  return new Date(year,month,1).getDay();
}

function numDays(month,year) {
  return new Date(year,month,0).getDate();
}

var clicker = 0;
var min = 0;
var max = 0;

$('.calendar li').click(function(){ // toggle selected dates
  if(clicker==0){
    clicker=1;
    $('.calendar li').removeClass('red');
    $(this).addClass('red');
    min = $(this).text();
  } else {
    clicker=0;
    $(this).addClass('red');
    $('.calendar li.red').each(function(){
      max = $(this).text();
    });
    for(i=parseInt(min);i<parseInt(max);i++){
      $('.calendar li:nth-of-type('+(i+7+fDay-1)+')').addClass('red'); 
    }
  }
});
}

function renderCal2(themonth2){
$('.calendar li').remove();
$('.calendar ul').append('<li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li> <li>Su</li>');
var d = new Date(),
  currentMonth = d.getMonth()+themonth2, // get this month
  days = numDays(currentMonth,d.getYear()), // get number of days in the month
  fDay = firstDay(currentMonth,d.getYear())-1, // find what day of the week the 1st lands on
  months = ['January','February','March','April','May','June','July','August','September','October','November','December']; // month names

$('.calendar p.monthname').text(months[currentMonth-1]); // add month name to calendar

for (var i=0;i<fDay-1;i++) { // place the first day of the month in the correct position
  $('<li>&nbsp;</li>').appendTo('.calendar ul');
}

for (var i = 1;i<=days;i++) { // write out the days
  $('<li>'+i+'</li>').appendTo('.calendar ul');
}

function firstDay(month,year) {
  return new Date(year,month,1).getDay();
}

function numDays(month,year) {
  return new Date(year,month,0).getDate();
}

var clicker = 0;
var min = 0;
var max = 0;

$('.calendar li').click(function(){ // toggle selected dates
  if(clicker==0){
    clicker=1;
    $('.calendar li').removeClass('red');
    $(this).addClass('red');
    min = $(this).text();
  } else {
    clicker=0;
    $(this).addClass('red');
    $('.calendar li.red').each(function(){
      max = $(this).text();
    });
    for(i=parseInt(min);i<parseInt(max);i++){
      $('.calendar li:nth-of-type('+(i+7+fDay-1)+')').addClass('red'); 
    }
  }
});
};

// carousel header

function header(){
    let idvoiture = document.querySelector('header');
    let voiture = idvoiture.getAttribute('id');
    console.log(idvoiture);
    console.log(voiture);
    if(voiture == "header1"){
        idvoiture.setAttribute("id",'cars');
    }
    if(voiture == "cars"){
        idvoiture.setAttribute("id", 'header1');
};
}

setInterval(header, 1500);
