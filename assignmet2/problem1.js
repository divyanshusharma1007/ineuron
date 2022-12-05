let vaidate=(a,b,c)=>{
   if(a===b && b===c)console.log('Equilateral tringle ')
   else if(a===c || b===c)console.log('isosceles  tringle');
   else console.log('Scalene tringle ')
}
vaidate(5,5,6);