{/* <tr>
<td>
    <div class="cart-info">
        <img src="product-1.jpg",width="250" height="180">
        <div>
            <p>Red printed Tshirt</p>
            <small>price: $50</small>
            <br>
            <a href="">Remove</a>
        </div>
    </div>
</td>
<td>
<input type="number" value="1"</td>
<td>$50.00</td>
</tr> */}



let tb=document.getElementById("CheckOut")

let price=document.getElementById("Price")
let totalPrice=document.getElementById("totalPrice")

function buildCheckOutBox(obj) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")

    let div1 = document.createElement("div")
    div1.classList.add("cart-info")
    let img1 = document.createElement("img")
    img1.src = obj.path
    img1.style.width="80px"
    img1.style.height="120px"
    div1.appendChild(img1)
  
    let div2 = document.createElement("div")
  
    let p1 = document.createElement("p")
    p1.innerText = obj.name
  
    let p2 = document.createElement("small")
    p2.innerText = "$" + obj.price
    
    let br = document.createElement("br")
    let anch =document.createElement("a")
  
    anch.innerText="Remove"
    anch.style.cursor="pointer"

    /********** Stars ********/
    let td2 = document.createElement("td")
    let inputItem1 =document.createElement("input")
    inputItem1.style.width="50px"
    inputItem1.type="number"
    inputItem1.value="1"
    inputItem1.min="1"
    td2.appendChild(inputItem1)
    
    let td3 = document.createElement("td")
    td3.classList.add("elePrice")
    td3.innerText="$"+obj.price
    inputItem1.addEventListener("change",()=>{
        td3.innerText="$"+ (obj.price * parseInt(inputItem1.value))

    })

    /**************************/
    div2.appendChild(p1)
    div2.appendChild(p2)
    div2.appendChild(br)
    div2.appendChild(anch)
    div1.appendChild(div2)
    td1.appendChild(div1)
    
     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)
     anch.addEventListener('click',()=>{
         console.log(anch.parentElement.parentElement.parentElement.parentElement)
         anch.parentElement.parentElement.parentElement.parentElement.remove();
    })
  
    return tr
  }
let arrItemsLen=localStorage.getItem("ItemNo")
let arrItems=[]
for(let j=0;j<arrItemsLen;j++)
{
 arrItems.push(localStorage.getItem("Items"+j))
}
localStorage.setItem("ItemNo","0")
console.log(arrItems)
  fetch('../js/items.json').then(response => {
    console.log("Cart Page response")
    console.log(response)
    return response.json();
  }).then(data => {
      allItems=data.items
  for(let i=0 ;i<allItems.length; i++)
  {
   for (let k=0;k<arrItemsLen;k++)

{
  if(allItems[i].id==arrItems[k]){
    tb.appendChild(buildCheckOutBox(allItems[i]))
  }
}
       
  }
  }).catch(err => {
    // Do something for an error here
  });



document.getElementById("checkBtn").addEventListener("click",()=>{
let pr=0;
let pt=0;    
let counts=document.querySelectorAll("input[type='number']")
let prices=document.getElementsByClassName("elePrice")
console.log(counts)
for(let i=0; i<counts.length;i++){
 
    pr +=parseInt(prices[i].innerText.substring(1))
    tp=pr+20
    console.log("changed "+pr)
    price.innerText="$ "+pr
    totalPrice.innerText="$ "+tp
}
})