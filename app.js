
const fs  = require('fs')
const path = require('path')

function gender(folderFrom,folderTO,gender) {
    fs.readdir(path.join(__dirname,`${folderFrom}`), (err, files) => {
        if (err) {
            console.log(err);
        }
        files.forEach(file => {
            fs.readFile(path.join(__dirname,`${folderFrom}`,file), (err, data) => {
                if(err) {
                    return;
                }
                const parseUser = JSON.parse(data.toString())
                console.log(parseUser)
                if (parseUser.gender === gender){
                    fs.rename(path.join(`${folderFrom}`, file), path.join(`${folderTO}`, file), (err) => {
                        console.log(err);
                    })
                }
            })
        })
    })
}
gender('boys','girls','female')
gender('girls','boys','male')


