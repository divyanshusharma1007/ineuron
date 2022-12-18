// solve this once again
// and add - between the even numbers 
(    
    async () => {
    const Case = (value) => {
        let lis = []
        for (let i in value) {
            if (i%2==0){
               lis.push(value[i]) 
            }else{

            }
        }
        console.log(lis.splice(1, lis.length).join(""))
    }
    Case(require('readline-sync').question("Enter the value  :"))
})()