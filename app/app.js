// var firstname = "Pierce";

var homeContent = "<h1>HOME</h1>";
var aboutContent = `<h1>ABOUT</h1> 
      <p style="color:purple">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima
        ab enim sit inventore optio!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima
        ab enim sit inventore optio!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima
        ab enim sit inventore optio!
      </p> `;
var productContent = "<h1>PRODUCTS</h1>";
var contactContent = "<h1>CONTACT</h1>";

// function makeComment(comment) {
//     // console.log("ready");
//     console.log(comment);
//     // console.log(firstname);
// }

function addButtonListeners() {
    $("nav a").click(function (e) {
        // function(e)
        // function(event)
        // function(evt)
        let bthId = e.currentTarget.id;
        let contentName = bthId + "Content";
        // console.log(e);
        // console.log("addbutton");
        // console.log(bthId);
        console.log(contentName);
        // $("#app").html("Pierce");
        $("#app").html(eval(contentName));
        // $("#app").prepend("Pierce");
        // $("#app").append("Pierce");
    });
    // To call class
    // $("nav .class");
}

function init() {
    // console.log(comment);
    $("#app").html(homeContent)
    addButtonListeners();
    // console.log("comment");
}


$(document).ready(function () {
    // alert("ready");
    // let firstname = "Sarah";
    // makeComment(firstname);
    init();
});