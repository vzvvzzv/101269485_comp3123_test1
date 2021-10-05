const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

let prom = new Promise((resolve, reject) => {
    let result = mixedArray.filter(lowerCaseWords)
    result = result.map(word => word.toLowerCase())
    console.log(result)
    if(result.length > 0){
        resolve('done')
    } else {
        reject('not done')
    }
}) .then((message) =>{
    console.log(message)
}).catch((message) => {
    console.log(message)
})


function lowerCaseWords(arg){
   if(typeof arg == 'string') return arg.toLowerCase()
}


