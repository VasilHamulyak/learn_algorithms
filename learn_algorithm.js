/***************************** Algorithms ****************************/


const test = [4, 23, 1, 8, 45, 63, 89, 5, 0, 67, 3];
// linear search 
// version 1
function linearSearch(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
    return -1;
}
// console.log(linearSearch(test, 5));

// version 2
function linearSearch1(arr, n) {
    return arr.indexOf(n);
}
// console.log(linearSearch1(test, 69));

// binary search
// version 1
// sort array
test.sort(function(a,b) {
    return a - b;
});

function binarySearch(arr, start, len, n) {
    if (len <= 0) return -1;

    var mid = Math.floor(start + (len - start) / 2);
    if (arr[mid] === n) {
        return mid;
    } else if (arr[mid] > n) {
        return binarySearch(arr, 0, mid-1, n);
    } else {
        return binarySearch(arr, mid+1, len, n);
    }
    return -1;
}
console.log(test);
// console.log(binarySearch(test, 0, test.length, 23));

function binarySearch1(arr, value) {
    var mid = arr.length;
    while(mid >= 1) {
        mid = Math.floor(arr.length / 2);
        console.log(mid);
        if (arr[mid] === value) {
            return arr[mid];
        } else if (arr[mid] > value) {
            arr = arr.slice(0, mid);
            console.log(arr)
        } else {
            arr = arr.slice(mid+1);
            console.log(arr);
        }
    }
    return -1;
}
console.log(binarySearch1(test, 23));