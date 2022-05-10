console.log("Quick Sort");

let arr = [4, 6, 2, 5, 7, 9, 1, 3,8,0,10];

function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(l, h) {
    let pivot = arr[l];
    console.log('start - ', arr);
    let i = l;
    let j = h;

    while (i < j) {
        while (arr[i] <= pivot) i++;
        while (arr[j] > pivot) j--;

        if (i < j)
            swap(i, j);
    }
    swap(j, l);
    console.log('end - ', arr);

    return j;
}

function quickSort(l, h) {
    if (l < h) {
        let pivot = partition(l, h);
        quickSort(l, pivot - 1);
        quickSort(pivot + 1, h);
    }
}

quickSort(0, arr.length - 1);
