function format(obj) {
    let res = []
    for(name in obj.names){
        res.push(`<h1>${obj.names[name]}'s favorite food is: </h1>`)
    }

    for(food in obj.foods){
        res[food] += `<img src="${obj.foods[food]}">`
    }

    let res_ = ""

    for(item in res){
        res_ += res[item]
    }

    return res_
}

module.exports = {
    format: format
}