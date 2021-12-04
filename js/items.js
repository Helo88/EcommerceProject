// ##########################################################################################
// ########for ALL Items
let ItemsContainer = document.getElementById("itemsContainer");
let allItems;
let PriceSortedID = [];
let RateSortedID = [];
let ItemsID = [];


fetch('../js/items.json').then(response => {
  return response.json();
}).then(data => {
  console.log("Working")
  allItems = data.items

  // ItemsContainer.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    ItemsContainer.appendChild(buildBox(allItems[i]))
    ItemsID.push(allItems[i].id)
    }

    window.localStorage.setItem('ItemsID', JSON.stringify(ItemsID));

  }).catch(err => {
  // Do something for an error here
});


// ##########################################################################################
// ########for price sorting
function sortprice() {

  ItemsContainer.innerHTML = "";


  fetch('../js/items.json').then(response => {
    return response.json();
  }).then(data => {
    console.log("price sortinggg ")
    allItems = data.items

    for (let i = 0; i < 15; i++) {
      allItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
      // allItems.sort((a, b) => (a.rating > b.rating) ? 1 : -1)

      ItemsContainer.appendChild(buildBox(allItems[i]))
        PriceSortedID.push(allItems[i].id)
    }

    window.localStorage.setItem('PriceSortedID', JSON.stringify(PriceSortedID));


  }).catch(err => {
    // Do something for an error here
  });
}



// ##########################################################################################
// ########for Rate sorting
function sortrate() {

  ItemsContainer.innerHTML = "";


  fetch('../js/items.json').then(response => {
    return response.json();
  }).then(data => {
    console.log("price sortinggg ")
    allItems = data.items
    ItemsContainer.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      // allItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
      allItems.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
      ItemsContainer.appendChild(buildBox(allItems[i]))
      RateSortedID.push(allItems[i].id)
    }

    window.localStorage.setItem('RateSortedID', JSON.stringify(RateSortedID));
  }).catch(err => {
    // Do something for an error here
  });

}



// ######################################################################
// ######################################################################

function sortcatgo(value) {


  ItemsContainer.innerHTML = "";

  fetch('../js/items.json').then(response => {
    return response.json();
  }).then(data => {
    console.log("socks sortinggg ")
    allItems = data.items
    ItemsContainer.innerHTML = "";

    for (let i = 0; i < 30; i++) {

      if (allItems[i].category == value) {
        ItemsContainer.appendChild(buildBox(allItems[i]))
      }

    }

  }).catch(err => {
    // Do something for an error here
  });
}


// ######################################################
function sortParentcatgo(value) {

  ItemsContainer.innerHTML = "";

  fetch('../js/items.json').then(response => {
    return response.json();
  }).then(data => {
    console.log(" sortinggg ")
    allItems = data.items

    ItemsContainer.innerHTML = "";
    for (let i = 0; i < 30; i++) {

      if (allItems[i].Parentcategory == value) {
        ItemsContainer.appendChild(buildBox(allItems[i]))
      }

    }

  }).catch(err => {
    // Do something for an error here
  });
}


// ######################################################
function Sortby(value) {


  if (value == "Price") {
    sortprice();
  } else if (value == "Rating") {
    sortrate();
  } else if (value == "pants" || value == "tShirts" || value == "shoese" || value == "socks") {
    sortParentcatgo(value.trim());
    document.getElementById("pagebutton").innerHTML = "";
  } else {
    sortcatgo(value);
    document.getElementById("pagebutton").innerHTML = "";
  }
  localStorage.setItem("category","none")
}





window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  if (localStorage.getItem("category")!="none"){
    console.log("cate fired")
    Sortby(localStorage.getItem("category"))
  }
});