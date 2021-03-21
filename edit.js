function minArray(arr) {
    if(arr.length == 0)
        return "Mảng rỗng";
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
let min = minArray(arr1);
alert(min);
let arr2 = [];
min = minArray(arr2);
alert(min);