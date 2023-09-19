function binarySearch(list, element) {
    var mid = Math.floor(list.length/2), high = list.length, low = 0, index = -1;
    
    if(list.length <= 1) {
        if(list[0] == element)
            return 0;
        else
            return -1;
    } else if(list[low] == element) {
        return low
    } else if(list[mid] > element) {
        return low + binarySearch(list.slice(low, mid), element)
    } else if(list[mid] == element) {
        return mid
    } else {
        return low + binarySearch(list.slice(mid + 1, list.length), element)
    }
}

/*
Sources:
https://www.w3schools.com/jsref/jsref_sort.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
https://www.geeksforgeeks.org/javascript-typedarray-subarray-with-examples/

*/
