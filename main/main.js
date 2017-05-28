module.exports = function main(a) {
  // Write your cade here
  var sum=0;
  for(let i=0;i<a.length;i++){
  	sum+=parseInt(a.charAt(i));
  }
  return sum;
};
