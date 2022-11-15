function numSwap(number) {
   let result = 0
   let y =1
   if (number.toString().length%2!=0) {
      return false
   }
   while (number != 0) {
     let digit1= number%10
     let digit2= ((number-digit1)/10)%10
   result +=y*(10*digit1+digit2)
   number = Math.floor(number/100)
   y*=100
   }
   return result
}
console.log(numSwap(432156));
