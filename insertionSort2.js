// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================
function insertionSort(items) {
    //declare global variables for looping sort
    var i;
    var j;

    //sort through array of random numbers
    for (i = 0; i < items.length; i++) {
 //create value variable that stores each array item in index
        var value = items[i];
//loop through cycle, if variable j = i -1; or i is less than -1 and the index of variable j, decrement the sort array in order
        for (j = i - 1; i > -1 && items[j] > value; j--) {
            items[j + 1] = items[j]
       }
       //display the variables in order based on the for loop
       items[j + 1] = value;
    }
    return items;
};

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
