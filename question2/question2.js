const resolvedPromise = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
        let success = {'message': 'resolved promise!' }
        resolve(success);
    }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((reject) => {
    setTimeout(() => {
        reject({ 'error':  'rejected promise!' })
    }, 500)
})
}

resolvedPromise().then((message) =>{
    console.log(message)
}).catch((message) => {
    console.log(message)
})

rejectedPromise().then((message) =>{
    console.log(message)
}).catch((message) => {
    console.log(message)
})

resolvedPromise();
rejectedPromise();
