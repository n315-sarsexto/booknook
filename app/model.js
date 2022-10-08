var userInfo = {};
var cart = [];
var bookList = [
    {
        bookTitle: "Firestarter",
        bookAuthor: "Stephen King",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/firestarter.jpg",
        price: "19.99",
        category: "home"
    },
    {
        bookTitle: "Becoming",
        bookAuthor: "Michelle Obama",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/becoming.jpg",
        price: "17.99",
        category: "home"
    },
    {
        bookTitle: "Twilight Box Set",
        bookAuthor: "Stephenie Meyer",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/twilight-box-set.jpg",
        price: "99.99",
        category: "set"
    },
    {
        bookTitle: "Harry Potter Box Set",
        bookAuthor: "J.K. Rowling",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/hp-box-set.jpg",
        price: "100",
        category: "set"
    },
    {
        bookTitle: "A Song of Fire and Ice Box Set",
        bookAuthor: "George R.R. Martin",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/got-box-set.jpg",
        price: "100",
        category: "set"
    },
    {
        bookTitle: "Misery",
        bookAuthor: "Stephen King",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/misery.jpg",
        price: "19.99",
        category: "horror"
    },
    {
        bookTitle: "Frankenstein",
        bookAuthor: "Mary Shelley",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/frankenstein.jpg",
        price: "18.99",
        category: "horror"
    },
    {
        bookTitle: "Phantoms",
        bookAuthor: "Dean Koontz",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/phantoms.jpg",
        price: "19.99",
        category: "horror"
    },
    {
        bookTitle: "Finding Me",
        bookAuthor: "Viola Davis",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/finding-me.jpg",
        price: "27.99",
        category: "black-history"
    },
    {
        bookTitle: "The Autobiography of Martin Luther King, Jr.",
        bookAuthor: "Clayborn Carson, Martin Luther King, Jr.",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/mlk-biography.jpg",
        price: "19.99",
        category: "black-history"
    },
    {
        bookTitle: "The Autobiography of Eleanor Roosevelt",
        bookAuthor: "Eleanor Roosevelt",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/elenor-roosevelt-biography.jpg",
        price: "17.99",
        category: "black-history"
    },
    {
        bookTitle: "The Complete Tales of Winnie the Pooh",
        bookAuthor: "A.A. Milne, Ernest H. Shepard",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/winnie-the-pooh.jpg",
        price: "19.99",
        category: "childrens"
    },
    {
        bookTitle: "The Cat in the Hat",
        bookAuthor: "Dr. Seuss",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/cat-in-the-hat.jpg",
        price: "15.99",
        category: "childrens"
    },
    {
        bookTitle: "Fun Facts About Space",
        bookAuthor: "Baby Professor",
        bookDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookImg: "images/fun-facts-about-space.jpg",
        price: "7.99",
        category: "childrens"
    }
]
var isLoggedIn = false;

export function changePage(pageID, callback){
    if(pageID == ""){
        $.get(`pages/home/home.html`, function (data) {
            //console.log("data " + data);
            $("#app").html(data);
        });
    }
    else if(pageID == "account") {
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
          //console.log("data " + data);
          $("#app").html(data);
          callback();
        });
      } else if(pageID == "books"){
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            //console.log("data " + data);
            $("#app").html(data);

            $.each(bookList, function(idx, book){
                //sorts books per category
                if(book.category == "set"){
                        $(".sets-row").append(`<div class="book">
                <div class="bookImage">
                    <img src="${book.bookImg}" alt="">
                </div>
                <div class="bookInfo">
                    <p>${book.bookDesc}</p>
                    <h4>Price: $${book.price}</h4>
                    <button id="${idx}">Add to Cart</button>
                </div>
            </div>`);
                }else if(book.category == "black-history"){
                    $(".history-row").append(`<div class="book">
            <div class="bookImage">
                <img src="${book.bookImg}" alt="">
            </div>
            <div class="bookInfo">
                <p>${book.bookDesc}</p>
                <h4>Price: $${book.price}</h4>
                <button id="${idx}">Add to Cart</button>
            </div>
        </div>`);
            }else if(book.category == "horror"){
                $(".horror-row").append(`<div class="book">
                <div class="bookImage">
                    <img src="${book.bookImg}" alt="">
                </div>
                <div class="bookInfo">
                    <p>${book.bookDesc}</p>
                    <h4>Price: $${book.price}</h4>
                    <button id="${idx}">Add to Cart</button>
                </div>
            </div>`);
                }else if(book.category == "childrens"){
                    $(".childrens-row").append(`<div class="book">
            <div class="bookImage">
                <img src="${book.bookImg}" alt="">
            </div>
            <div class="bookInfo">
                <p>${book.bookDesc}</p>
                <h4>Price: $${book.price}</h4>
                <button id="${idx}">Add to Cart</button>
            </div>
        </div>`);
            }else{
                $(".other-row").append(`<div class="book">
                <div class="bookImage">
                    <img src="${book.bookImg}" alt="">
                </div>
                <div class="bookInfo">
                    <p>${book.bookDesc}</p>
                    <h4>Price: $${book.price}</h4>
                    <button id="${idx}">Add to Cart</button>
                </div>
            </div>`);
            }
            });

            callback();
          });
      }    
      else if(pageID == "cart"){
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
          console.log("data " + data);
          //Checks if logged in to display cart
          if(isLoggedIn){
            $("#app").html(data);

            //Displays message once signed in to add to the cart!
          if(cart != ""){
            $.each(cart, function(idx, cartItem){
                console.log(bookList[cartItem]);
                let book = bookList[cartItem];
                $(".items").append(`<div class="book">
                <div class="bookImage">
                    <img src="${book.bookImg}" alt="">
                </div>
                <div class="bookInfo">
                    <h4>${book.bookTitle} by ${book.bookAuthor}</h4>
                    <p>Price: $${book.price}</p>
                    <div class="qty">
                        <p>Qty: 1</p>
                        <div class="links">
                        <a href="#books">change </a> | <a href="#books" id="${idx}" class="del"> delete</a>
                        </div>
                    </div>
                </div>
            </div>`);
              });
          }else{
            $("#app").html(`
            <div class="prompt"><h1>Go add some stuff to your cart!</h1></div>`)
          }
          }else{
            $("#app").html(`
            <div class="prompt"><h1>Please sign in before continuing.</h1></div>`)
          }
          

          callback();
        });
      }else if(pageID == "blog-post-feb" || pageID == "blog-post-ereading" || pageID == "blog-post-clubs"){
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            console.log("data " + data);
            if(isLoggedIn){
                $("#app").html(data);
            }else{
                $("#app").html(`
                <div class="prompt"><h1>Please sign in to read this blog post.</h1></div>`)
            }
      });
      }
      else{
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            console.log("data " + data);
            $("#app").html(data);
      });
    }
}

export function setUserInfo(userData){
    userInfo = userData;
    console.log(userInfo);
    $("#acctName").html(userInfo.em.toString());
    isLoggedIn = true;
}

export function addToCart(bookIdx){
    if(isLoggedIn){
        cart.push(bookIdx);
        $("#cartCount").html(cart.length.toString());
    }else{
        alert("Please log in before adding to cart.");
    }
}

export function removeFromCart(bookIdx){
    cart.pop(bookIdx);
    $("#cartCount").html(cart.length.toString());
}
