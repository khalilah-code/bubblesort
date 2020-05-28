function bubblesort(arr){
  let tempArr = arr

  bubblesort.swap(tempArr)

  console.log('TempArr: ', tempArr)

  for(let j = 0; j < tempArr.length; j++){
    if(tempArr[j]>tempArr[j+1]){
      console.log('RESORT')
      bubblesort(tempArr)
      break;
    }
  }
  console.log('Done')
  return tempArr
}

bubblesort.swap = function(arr){
  let temp;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
      temp = arr[i+1]
      arr[i+1] = arr[i]
      arr[i] = temp
    }
  }
  return arr
}
