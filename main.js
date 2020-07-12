let values;
let i = 0;
let j = 0;

function setup() {
  createCanvas(400, 200);
  values = new Array(width).fill().map(() => random(height));
}

function draw() {
  background(0);

  const a = values[j];
  const b = values[j+1];

  if (a > b) {
   swap(values, j, j +1);
  }

  if (i < values.length) {
    j += 1;
    if (j >=values.length - i - 1) {
      j = 0;
      i += 1;
    }
  } else {
    console.log('Done!');
    noLoop();
  }

  stroke(255);
  values.forEach((value, i) => line(i, height, i, height - value));
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
