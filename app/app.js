import * as MODEL from './model.js';

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + ' ' + pageID);
  if(pageID == ""){
    MODEL.changePage("home");
  }else if(pageID == "account"){
    MODEL.changePage(pageID, initSubmitListener);
  }else if(pageID == "books"){
    MODEL.changePage(pageID, buyNow);
  }else if(pageID == "cart"){
    MODEL.changePage(pageID, removeBook);
  }
  else{
    MODEL.changePage(pageID);
  }

}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function buyNow(){
    $(".bookInfo button").on("click", function(e){
        let bookID = e.currentTarget.id;
        MODEL.addToCart(bookID);
        console.log("Buy " + bookID);
    });
}
function removeBook(){
  $(".links .del").on("click", function(e){
    let bookDelID = e.currentTarget.id;
    MODEL.removeFromCart(bookDelID);
    console.log("Deleted " + bookDelID);
});
  
}

function mobileNav(){
  $(".icon").on("click", function(e){
    console.log("Clicked");
    $(".mobileNav").toggleClass("visible");
  })
}

function initSubmitListener(){
    $("#submitSignup").on("click", function(e){
        console.log("Submit");
        let fn = $("#fname").val();
        let ln = $("#lname").val();
        let email = $("#email").val();
        let password = $("#pw").val();
        if(fn == ""){
            alert("Please fill out all fields.");
        }else if(ln == ""){
            alert("Please fill out all fields.");
        }else if(email == ""){
            alert("Please fill out all fields.");
        }else if(password == ""){
            alert("Please fill out all fields.");
        }else{
            let userObj = {
                firstName: fn,
                lastName: ln,
                em: email,
                pw: password
            }
            MODEL.setUserInfo(userObj);
        }
    });
    $("#submitLogin").on("click", function(e){
      let email = $("#emailReturn").val();
      let password = $("#pwReturn").val();
      if(email == ""){
          alert("Please fill out all fields.");
      }else if(password == ""){
          alert("Please fill out all fields.");
      }else{
          let userObj = {
              em: email,
              pw: password
          }
          MODEL.setUserInfo(userObj);
      }
  });
}


// //random little trick of Todd's
// function trace(fileName, log){
//     console.log(fileName + ' ' + log);

// }

$(document).ready(function () {
  initURLListener();
  mobileNav();
});
