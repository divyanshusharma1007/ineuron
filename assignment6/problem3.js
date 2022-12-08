(    
    async () => {
    const Case = (value) => {
        let lis = []
        for (let i in value) {
            if (i % 2 === 0) {
                lis.push("-")
            }
            lis.push(value[i])
        }
        console.log(lis.splice(1, lis.length).join(""))
    }
    Case(require('readline-sync').question("Enter the value  :"))
})()