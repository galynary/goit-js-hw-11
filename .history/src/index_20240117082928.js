// Change code below this line

const orderedItems =[2,3,5,2]


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  console.log(totalPrice);
}