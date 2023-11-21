const swap = (array, pos1, pos2) => {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        let pos1 = Math.floor(Math.random() * array.length);
        let pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

const bubble_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

const selection_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
};

const quick_sort = (array, start, end) => {
    if (start < end) {
        let pivotIndex = particionamento(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
};

const particionamento = (array, start, end) => {
    let pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, end);
    return i + 1;
};
