const increaseBtn = document.querySelector("#increase")
const decreaseBtn = document.querySelector("#decrease")
const outputDiv = document.querySelector("#output")
var likeCounter = 0;


function increaseLike() {
  likeCounter += 1;
  outputDiv.innerText = likeCounter
}


function decreaseLike() {
  likeCounter -= 1;
  outputDiv.innerText = likeCounter
  // enabler();
  if (likeCounter <= 0) {
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.disabled = false
  }
}

// function enabler(){
//   if (likeCounter === -1) {
//     decreaseBtn.disabled = true;
//   } else {
//     decreaseBtn.disabled = false
//   }
// }

// textInput.addEventListener("input", () => {
//   if(textInput.value.length<10){
//     btn.disabled = true
//   }else{
//     btn.disabled = false
//   }
// })

increaseBtn.addEventListener("click", increaseLike)
decreaseBtn.addEventListener("click", decreaseLike)


// Render an image on a webpage and create a like and a dislike button below it. Every time you click on the like button, show the increasing count and every time you click on the dislike button, show the same count decreasing.

// link for image : https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80
// //conceptulal
// css box modle 
// git 
