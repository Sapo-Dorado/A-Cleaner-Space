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
export async function predict(input_img) {
  let img = tf.browser.fromPixels(input_img);
  img = tf.expandDims(img);
  const model = await tf.loadLayersModel('/model/model.json');

  const prediction = model.predict([img]);
  const result = await prediction.data()
  return getMaxIdx(result);
}

export function getClass(prediction) {
  let classes = [
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
  ]
  return classes[prediction]
}