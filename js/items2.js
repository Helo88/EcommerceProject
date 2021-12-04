

// ##########################################################################################
// ########for ALL Items
let ItemsContainer = document.getElementById("itemsContainer");
let allItems;

fetch('../js/items.json').then(response => {
  return response.json();
}).then(data => {
  console.log("Working")
  allItems = data.items

  for (let i = 15; i < 30; i++) {
    ItemsContainer.appendChild(buildBox(allItems[i]))

  }

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

    for (let i = 15; i < 30; i++) {
      allItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
      // allItems.sort((a, b) => (a.rating > b.rating) ? 1 : -1)

      ItemsContainer.appendChild(buildBox(allItems[i]))

    }

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

    for (let i = 15; i < 30; i++) {
      // allItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
      allItems.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
      ItemsContainer.appendChild(buildBox(allItems[i]))
    }

  }).catch(err => {
    // Do something for an error here
  });

}



// // ####################################################################################################################################
// // ########for Pants Cateogry 
// function sortCatgPants() {

//   ItemsContainer.innerHTML = "";


//   fetch('../js/items.json').then(response => {
//     return response.json();
//   }).then(data => {
//     console.log("pants sortinggg ")
//     allItems = data.items

//     for (let i = 0; i < 30; i++) {
//       if (allItems[i].category == "pants") {
//         ItemsContainer.appendChild(buildBox(allItems[i]))
//       }
//     }

//   }).catch(err => {
//     // Do something for an error here
//   });

// }



// // ##########################################################################################
// // ########for tShirts Cateogry 
// function sortCatgtShirts() {

//   ItemsContainer.innerHTML = "";


//   fetch('../js/items.json').then(response => {
//     return response.json();
//   }).then(data => {
//     console.log("tShirts sortinggg ")
//     allItems = data.items

//     for (let i = 0; i < 30; i++) {
//       if (allItems[i].category == "tShirts") {
//         ItemsContainer.appendChild(buildBox(allItems[i]))
//       }
//     }


//   }).catch(err => {
//     // Do something for an error here
//   });

// }


// // ##########################################################################################
// // ########for shoese Cateogry 
// function sortCatgshoese() {

//   ItemsContainer.innerHTML = "";


//   fetch('../js/items.json').then(response => {
//     return response.json();
//   }).then(data => {
//     console.log("shoese sortinggg ")
//     allItems = data.items

//     for (let i = 0; i < 30; i++) {
//       if (allItems[i].category == "shoese") {
//         ItemsContainer.appendChild(buildBox(allItems[i]))

//       }
//     }

//   }).catch(err => {
//     // Do something for an error here
//   });

// }


// // ##########################################################################################
// // ########for socks Cateogry 
// function sortCatgsocks() {

//   ItemsContainer.innerHTML = "";


//   fetch('../js/items.json').then(response => {
//     return response.json();
//   }).then(data => {
//     console.log("socks sortinggg ")
//     allItems = data.items

//     for (let i = 0; i < 30; i++) {

//       if (allItems[i].category == "socks") {
//         ItemsContainer.appendChild(buildBox(allItems[i]))
//      }
//     }

//   }).catch(err => {
//     // Do something for an error here
//   });
// }


// // ##########################################################################################
// // ########for watches Cateogry 
// function sortCatgwatches() {

//   ItemsContainer.innerHTML = "";


//   fetch('../js/items.json').then(response => {
//     return response.json();
//   }).then(data => {
//     console.log("watches sortinggg ")
//     allItems = data.items

//     for (let i = 0; i < 30; i++) {
//       if (allItems[i].category == "watches") {
//         ItemsContainer.appendChild(buildBox(allItems[i]))
//       }
//     }

//   }).catch(err => {
//     // Do something for an error here
//   });

// }

// // ######################################################################

// function Sortby(value) {

//   switch (value) {
//     case "Price":
//       sortprice();
//       break;

//     case "Rating":
//       sortrate();
//       break;

//     case "Pants":
//       sortCatgPants();
//       document.getElementById("pagebutton").innerHTML = "";
//       break;
//     case "Shirts":
//       sortCatgtShirts();
//       document.getElementById("pagebutton").innerHTML = "";
//       break;
//     case "Sneakers":
//       sortCatgshoese();
//       document.getElementById("pagebutton").innerHTML = "";
//       break;

//     case "Socks":
//       sortCatgsocks();
//       document.getElementById("pagebutton").innerHTML = "";
//       break;

//     case "Watches":
//       sortCatgwatches();
//       document.getElementById("pagebutton").innerHTML = "";
//       break;


//   }

// }



// ######################################################################
// ######################################################################

function sortcatgo(value) {


  ItemsContainer.innerHTML = "";

  fetch('../js/items.json').then(response => {
    return response.json();
  }).then(data => {
    console.log("socks sortinggg ")
    allItems = data.items


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
    sortParentcatgo(value);
    document.getElementById("pagebutton").innerHTML = "";
  } else {
    sortcatgo(value);
    document.getElementById("pagebutton").innerHTML = "";
  }
}