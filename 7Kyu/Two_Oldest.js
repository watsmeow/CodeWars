function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}
