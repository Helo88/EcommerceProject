
const urlParams = new URLSearchParams(window.location.search);
let varM = urlParams.get('id');


let allItems;
let RelatedCon =document.getElementById("RelatedCon")
let RelArr=[1,8,21,23]
fetch("../js/items.json").then(response => {
  return response.json();

}).then(data => {
  allItems = data.items

  for (let i = 0; i < allItems.length; i++) {

   
   
    for (let j = 0; j < RelArr.length; j++) {

      if (allItems[i].id == RelArr[j]) {
        RelatedCon.appendChild(buildBox(allItems[i]))
      }

    }


    if (allItems[i].id == varM) {

      /*-------------ImgS Section-------------*/
      var imgContainer = document.getElementById("imgContainer");
      imgContainer.innerHTML = "<img id='productImg' src='" + allItems[i].path + "' width='100%'" + "' height='300px'>" + "<br>";

      for (let j = 0; j < allItems[i].otherImgS.length; j++) {
        let element = allItems[i].otherImgS[j]
        imgContainer.innerHTML += "<span class='small-img-col'> <img src='" + element + "' width='125x' height='150px' onclick='swapImg(" + j + ")'> </span>"
      }

      /*-------------ImgS Details Section-------------*/
      document.getElementById("type").innerHTML = allItems[i].type;
      document.getElementById("name").innerHTML = allItems[i].name;
      document.getElementById("price").innerHTML = "$" + allItems[i].price;
      let imgSize = document.getElementById("sizes");
      // imgSize.innerHTML = ""
      allItems[i].sizes.forEach(element => {
        imgSize.innerHTML += "<option>" + element + "</option>"
      });
      document.getElementById("productDescription").innerHTML = allItems[i].productDescription

      /*-------------Add to Cart Section-------------*/
      btnArr = []
 
    }
  }

}).catch(err => {
  console.log(err)
});


/*-------------Swapping ImgS Section-------------*/
function swapImg(id) {
  var productImg = document.getElementById("productImg");
  var smallImgs = document.getElementsByClassName("small-img-col")
  productImg.src = smallImgs[id].children[0].src
}

/****************************************************************** */
cartBtn = document.getElementById("cartBn")
console.log(cartBtn)
cartBtn.onclick = function () {
  console.log("clickedddddddd")
  localValue = localStorage.getItem("ItemNo")
  itemID = varM 
  localKey = "Items" + localValue

  btnArr.push(localKey)

  localStorage.setItem(localKey, itemID)
  localValue++
  localStorage.setItem("ItemNo", localValue)

}
 let itemsCounter=document.querySelectorAll("input[type='number']")

 itemsCounter[0].addEventListener("change",function(){
 console.log(this.value)
 console.log("clickedddddddd")
 localValue = localStorage.getItem("ItemNo")
 itemID = varM 
 localKey = "Items" + localValue

 btnArr.push(localKey)

 localStorage.setItem(localKey, itemID)
 localValue++
 localStorage.setItem("ItemNo", localValue)

})

function swapImg(id) {
  var productImg = document.getElementById("productImg");
  var smallImgs = document.getElementsByClassName("small-img-col")
  productImg.src = smallImgs[id].children[0].src
}