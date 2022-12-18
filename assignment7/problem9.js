const prompt=require('readline-sync').question;
const readed=prompt("Enter your string in yes Yes Yes");
const funct=(data)=>{

    for (let i in data){
        if (data[i]!=''){
            console.log('inconsistant string')
            return ;
        }
    }
    console.log('consistent string ')
}
funct(readed.toLowerCase().split('yes'));
