
document.getElementById("logo").addEventListener("click",()=>{
  window.location.href=`../index.html`
})
/***********************************************************************************************************/
let shirts=document.getElementById("ItemsShirts")
let pants=document.getElementById("ItemsPants")
let socks=document.getElementById("ItemsSocks")
let sneakers=document.getElementById("ItemsSneakers")
let watches=document.getElementById("ItemsWatches")
let cartBtn =document.getElementById("cartBtn")
shirts.addEventListener("click",()=>{
  localStorage.setItem("category","tShirts")
  window.location.href=`../html/items.html`

})
pants.addEventListener("click",()=>{
  localStorage.setItem("category","pants")
  window.location.href=`../html/items.html`
})
sneakers.addEventListener("click",()=>{
  localStorage.setItem("category","shoese")
  window.location.href=`../html/items.html`
})
socks.addEventListener("click",()=>{
  localStorage.setItem("category","socks")
  window.location.href=`../html/items.html`
})
watches.addEventListener("click",()=>{
  localStorage.setItem("category","watches")
  window.location.href=`../html/items.html`
})
cartBtn.addEventListener("click",()=>{
  window.location.href=`../html/cart.html`
})
/******************************************************************************************************** */
for (let i = 0; i < document.getElementsByClassName("icofont-star").length; i++) {
    document.getElementsByClassName("icofont-star")[i].addEventListener("click", function (e) {
      if (this.style.color == "orangered") {
        this.style.color = "gainsboro"
      } else {
        this.style.color = "orangered"
      }
    });
  }
  
  /***************************************************************************************** */
  let stars = document.createElement("div")
  stars.classList.add("stars")
  for (let i = 0; i < 5; i++) {
    let star = document.createElement("i")
    //   <i></i>
    star.classList.add("icofont-star")
    stars.appendChild(star)
  }
  
  /************************************************************************************ */
  function buildBox(obj) {
    let div1 = document.createElement("div")
    div1.classList.add("Item")
    let img1 = document.createElement("img")
    img1.src = obj.path
    div1.appendChild(img1)
  
    let div2 = document.createElement("div")
  
    let p1 = document.createElement("h5")
    p1.innerText = obj.name
  
    let p2 = document.createElement("h5")
    p2.innerText = "$" + obj.price
    /********** Stars ********/
    let stars = document.createElement("div")
    let rate = parseInt(obj.rating)
    stars.classList.add("stars")
    for (let i = 0; i < 5; i++) {
      let star = document.createElement("i")
      //   <i></i>
      star.classList.add("icofont-star")
      if (i < rate) {
        star.style.color = "rgb(255, 51, 0)"
      }
      stars.appendChild(star)
    }
    /**************************/
  
    div2.appendChild(p1)
    div2.appendChild(stars)
    // console.log("starsDone")
    // console.log(div2)
    // console.log("div2Done")
    div2.appendChild(p2)
    div1.appendChild(div2)
    div1.addEventListener('click',function(e){
        console.log("mnsnjsnksnks")
        window.location.href = `../html/singleItem.html` + '?id=' + obj.id
    })
    div1.style.cursor="pointer"
    return div1
  }
  
  // ##########################################################################################
  // ########for ALL Items

  
  /******************************************************************************************************** */



  /************************************************************************************* */
  let lis=document.getElementsByClassName("dropDown") 
  let clicked=null
for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(e){
        // console.log(lis[i].children[lis[i].children.length-1].style.display=="none")
        // clicked=true
        //    toggle 
        lis[i].children[lis[i].children.length-1].style.display=
        lis[i].children[lis[i].children.length-1].style.display=="none" ?"block":"none "
        lis[i].children[lis[i].children.length-2].classList.toggle("icofont-rounded-down")
        lis[i].children[lis[i].children.length-2].classList.toggle("icofont-rounded-up")
    })
    lis[i].addEventListener('mouseleave',function(e){
        // when lose focus 
        
        lis[i].children[lis[i].children.length-1].style.display="none"
        // lis[i].children[lis[i].children.length-1].style.display=="none" ?"":"none"
        lis[i].children[lis[i].children.length-2].classList.add("icofont-rounded-down")
        lis[i].children[lis[i].children.length-2].classList.remove("icofont-rounded-up")
    
      
    })
}
/******************************************************************************************************** */
let liR=document.getElementsByClassName("dropRight")
for(let i=0;i<liR.length;i++){
    liR[i].addEventListener('click',function(e){
        liR[i].children[2].style.display="block"
        liR[i].children[2].classList.add("rightDropped")
    })
    liR[i].addEventListener('mouseover',function(e){
        liR[i].children[2].style.display="block"
        liR[i].children[2].classList.add("rightDropped")
    })
    liR[i].addEventListener('mouseleave',function(e){
        liR[i].children[2].style.display="none"
    })
}
/********************************************************************************* */
let downMe=document.getElementById("navIcona")
let downs=document.querySelectorAll(".navBig .dropDown")
let bigNav=document.getElementsByClassName("navBig")[0]
console.log(bigNav)

downMe.addEventListener('click',()=>{
console.log("navIconClicked")
downs[0].style.display="block"
downs[1].style.display="block"
bigNav.style.flexDirection="column"
})

downMe.addEventListener('mouseleave',function(e){
downs[0].style.display="none"
downs[1].style.display="none"
bigNav.style.flexDirection="row"
})
console.log(downs)