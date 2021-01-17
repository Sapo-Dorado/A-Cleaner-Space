import * as tf from '@tensorflow/tfjs'

function getMaxIdx(arr) {
  var max = arr[0];
  var maxIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
      maxIdx = i;
    }
  }
  return maxIdx;
}

function contains(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return true;
    }
  }
  return false;
}

export async function predict(input_img) {
  let img = tf.browser.fromPixels(input_img);
  img = tf.expandDims(img);
  const model = await tf.loadLayersModel('/model/model.json');

  const prediction = model.predict([img]);
  const result = await prediction.data()
  return getMaxIdx(result);
}

export function getCategory(prediction) {
  const classes = [
    'Can',
    'Cardboard',
    'Cereal Box',
    'Food Scraps',
    'Glass Bottle',
    'Glass Jar',
    'Grass Clippings',
    'Leaves',
    'Magazine',
    'Manure',
    'Newspaper',
    'Paper',
    'Paper Towel',
    'Plants',
    'Plastic Bags',
    'Plastic Bottle',
    'Plastic Container',
    'Plastic Straw',
    'Plastic Utensils',
    'Plastic Wrap',
    'Sticks',
    'Styrofoam'
  ];
  return classes[prediction]
}

export function getType(category) {
  const compost = [
    'Sticks',
    'Paper Towel',
    'Plants',
    'Food Scraps',
    'Manure',
    'Grass Clippings',
    'Leaves',
  ];

  const recycling = [
    'Can',
    'Cardboard',
    'Cereal Box',
    'Glass Bottle',
    'Glass Jar',
    'Magazine',
    'Newspaper',
    'Paper',
    'Plastic Bottle',
    'Plastic Container',
  ];

  if(contains(compost, category)) {
    return "Compost";
  } else if (contains(recycling, category)) {
    return "Recycling";
  } else {
    return "Trash";
  }
}
