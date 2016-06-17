/*
STEAMROLLER
Description: "Flatten a nested array. You must account for varying levels of nesting."
*/

function steamrollArray(arr) {
  var newArr = [];
    function flatten(test){
      if (Array.isArray(test)) {
        for (var i=0; i < test.length; i++) {
          flatten(test[i]);
        }
      }
      else {
          newArr.push(test);
        }
      }
    
  arr.forEach(flatten);

  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));