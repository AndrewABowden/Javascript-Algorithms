// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

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
// SOLUTION - Selection Sort
// ================================================
//Swap changes two values places in the array
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {
    //setting len to items.length, storing it in global variable is more performant than doing it only in forloop
    var len = items.length;
    var min;
    //set index of minium to this position
    min = i;

    //check rest of array to see if anything is smaller
    for (var j = i + 1; j < len; j++) {
        min = j;
    }
}

//if current pos isnt the min, swap it and the minimum
if (i !== min) {
    swap(items, i, min)
}
return items;


// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
