let navMenu=document.getElementById("navMenu")
let navBig =document.getElementsByClassName("navBig")[0]
let categories=document.getElementsByClassName("cat")


// navMenu.addEventListener('click',(e)=>{
    
// navBig.style.display="flex";
// navBig.style.flexDirection="column";
// navBig.style.position="absolute"
// navBig.style.top="150%";
// navBig.style.left="0px";
// navBig.style.backgroundColor="red"
// navBig.style.width="100%"
// })

// navBig.addEventListener('mouseleave', function(e){
//     this.style.display="none"
//     })

for(let i=0; i <categories.length ;i++){
    console.log(categories[i])
    categories[i].addEventListener("mouseover",function(e){
        console.log("over")
        categories[i].style.width="250px"
        categories[i].style.height="200px"
        categories[i].style.animationPlayState = "paused"
        categories[i].children[1].style.display="block";
        // console.log(categories[i].children[1])
        e.stopPropagation()
    })
    categories[i].addEventListener("mouseout",function(e){
        // console.log("over")
         categories[i].style.width="80px"
         categories[i].children[1].style.display="none";
        categories[i].style.animationPlayState = "running"
    } )
}

// for (let i = 0; i < document.getElementsByClassName("icofont-star").length; i++) {
//     document.getElementsByClassName("icofont-star")[i].addEventListener("click", function (e) {
//         if (this.style.color=="orangered"){
//             this.style.color="gainsboro"
//         }
//         else{
//             this.style.color="orangered"
//         }
//     });
// }

/***************************************************************************************** */
// let ItemsContainer = document.getElementById("itemsContainer");
// let allItems;

// fetch('../js/items.json').then(response => {
//   return response.json();
// }).then(data => {
//   console.log("Working")
//   allItems = data.items

//   for (let i = 0; i < 16; i++) {
//     ItemsContainer.appendChild(buildBox(allItems[i]))

//   }

// }).catch(err => {
//   // Do something for an error here
// });
/************************************************************************************** */
let featuredContainer=document.getElementById("featuredContainer");
let latestContainer=document.getElementById("latestContainer");
let allItems;

fetch('./js/main.json').then(response => {
    console.log("jnjnjxsjnxsjncjncsjnsknsknsknsnxksnk")
    console.log(response)
    return response.json();
  }).then(data => {
      allItems=data.items
  for(let i=0 ;i<allItems.length; i++)
  {
    if(allItems[i].rating==5){
    featuredContainer.appendChild(buildBox(allItems[i]))

    }
    if(allItems[i].state=="new")
       { 
        latestContainer.appendChild(buildBox(allItems[i]))
       }
  }




  }).catch(err => {
    // Do something for an error here
  });

  /************************************************************************************* */
  let catShirts=document.getElementById("catShirt")
  let catPants=document.getElementById("catPant")
  let catSocks=document.getElementById("catSock")
  let catSneakers=document.getElementById("catShoe")
  let catWatches=document.getElementById("catWatch")

  catShirts.addEventListener("click",()=>{
    localStorage.setItem("category","tShirts")
    window.location.href=`../html/items.html`
  
  })
  catPants.addEventListener("click",()=>{
    localStorage.setItem("category","pants")
    window.location.href=`../html/items.html`
  })
  catSneakers.addEventListener("click",()=>{
    localStorage.setItem("category","shoese")
    window.location.href=`../html/items.html`
  })
  catSocks.addEventListener("click",()=>{
    localStorage.setItem("category","socks")
    window.location.href=`../html/items.html`
  })
  catWatches.addEventListener("click",()=>{
    localStorage.setItem("category","watches")
    window.location.href=`../html/items.html`
  })
 