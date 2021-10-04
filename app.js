const fs  = require('fs')
const path = require('path')


// const mkDir = path.join(__dirname,'users')
// fs.mkdir ()
const usersPath = path.join(__dirname,'users')
const users = [
    {name:"vasya", gender:'male',age:22},
    {name:"vanya", gender:'male',age:30},
    {name:"yura", gender:'male',age:10},
    {name:"ihor", gender:'male',age:40},
    {name:"marianna", gender:'female',age:12},
    {name:"kate", gender:'female',age:15},
    {name:"dasha", gender:'female',age:50},
    {name:"valya", gender:'female',age:12},
    {name:"masha", gender:'female',age:34},
    {name:"georgiy", gender:'male',age:87}
]


fs.mkdir(path.join(__dirname,'manYounger20'),(err)=>{
    if (err){
        console.log(err)
    }
})
fs.mkdir(path.join(__dirname,'manOlder20'),(err)=>{
    if (err){
        console.log(err)
    }
})
fs.mkdir(path.join(__dirname,'womanOlder20'),(err)=>{
    if (err){
        console.log(err)
    }
})
fs.mkdir(path.join(__dirname,'womanYounger20'),(err)=>{
    if (err){
        console.log(err)
    }
})
function createUser(){
    for (user of users){
        if ( user.gender ==='male' && user.age < 20){
            fs.writeFile(`manYounger20/${user.name}.json`, `[{ "name":"${user.name}", "age":"${user.age}"}]` ,(err)=>{
                console.log(err)
            })
        }
        if ( user.gender ==='male' && user.age > 20){
            fs.writeFile(`manOlder20/${user.name}.json`, `[{ "name":"${user.name}", "age":"${user.age}"}]` ,(err)=>{
                console.log(err)
            })
        }
        if ( user.gender ==='female' && user.age < 20){
            fs.writeFile(`womanYounger20/${user.name}.json`, `[{ "name":"${user.name}", "age":"${user.age}"}]` ,(err)=>{
                console.log(err)
            })
        }
        if (user.gender === 'female'&& user.age > 20){
            fs.writeFile(`womanOlder20/${user.name}.json`, `[{ "name":"${user.name}", "age":"${user.age}"}]` ,(err)=>{
                console.log(err)
            })
        }
    }
}
createUser()