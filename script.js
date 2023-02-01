
var currentDay = $("#currentDay");
var container = $(".container");
var hour9 = $("#hour-9").children("textarea");
var hour10 = $("#hour-10").children("textarea");
var hour11 = $("#hour-11").children("textarea");
var hour12= $("#hour-12").children("textarea");
var hour13= $("#hour-13").children("textarea");
var hour14= $("#hour-14").children("textarea");
var hour15= $("#hour-15").children("textarea");
var hour16= $("#hour-16").children("textarea");
var hour17= $("#hour-17").children("textarea");


var hour = dayjs().hour();
var submit = $("#hour-10").children('button');
var word = $('#hour-10').children('textarea').val();

render();

function render(){
  var word = localStorage.getItem("text");
  var word2 = localStorage.getItem("text2");
  var word3 = localStorage.getItem("text3");
  var word4 = localStorage.getItem("text4");
  var word5 = localStorage.getItem("text5");
  var word6 = localStorage.getItem("text6");
  var word7 = localStorage.getItem("text7");
  var word8 = localStorage.getItem("text8");
  var word9 = localStorage.getItem("text9");
 
  
  hour9.text(word);
  hour10.text(word2);
  hour11.text(word3);
  hour12.text(word4);
  hour13.text(word5);
  hour14.text(word6);
  hour15.text(word7);
  hour16.text(word8);
  hour17.text(word9);
}
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function displayTime(){
  var currentTime = dayjs().format("MMM DD, YYYY, hh:mm:ss");
  currentDay.text(currentTime);
 
}

function storeWord(){
  for(var i =9;i<18;i++){
    var submit = $(`#hour-${i}`).children('button');
    submit.on('click',function(event){
    event.preventDefault();
   
    var text = hour9.val();
    var text2 = hour10.val();
    var text3 = hour11.val();
    var text4 = hour12.val();
    var text5 = hour13.val();
    var text6 = hour14.val();
    var text7 = hour15.val();
    var text8 = hour16.val();
    var text9 = hour17.val();

    console.log(text);
    localStorage.setItem("text",text);
    localStorage.setItem("text2",text2);
    localStorage.setItem("text3",text3);
    localStorage.setItem("text4",text4);
    localStorage.setItem("text5",text5);
    localStorage.setItem("text6",text6);
    localStorage.setItem("text7",text7);
    localStorage.setItem("text8",text8);
    localStorage.setItem("text9",text9);
    render();
    
  })
  }

};
storeWord();

  
  // submit.on('click',function(event){
  //   event.preventDefault();
    
  //   var text = timeBlock.val();
  //   console.log(text);
  //   localStorage.setItem("text",text);
  //   render();
  // })


// var submit = $(`#hour-${9}`).children('button');
//   submit.on('click',function(event){
//     event.preventDefault();
//     var text = $("textarea").val();
//     localStorage.setItem('text',text);
//     render();
//   })

function setTime(){
  
  // container.children().addClass('past');
  for(var i=9;i<18;i++){
    if(i<hour){
      $(`#hour-${i}`).addClass('past');
    }else if(i==hour){
      $(`#hour-${i}`).addClass('present');
    }else{
      $(`#hour-${i}`).addClass('future');
    }
    
  }
  // $("#hour-9").addClass('future');
}
setTime();
displayTime();
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
setInterval(displayTime,1000);
setInterval(hour,1000);
