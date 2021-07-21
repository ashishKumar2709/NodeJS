const url = require('url')
const myURL = new URL('http://mywebsite.com/hello.html?id=100status=active')

// //get serialized URL
// console.log(myURL.href)
// console.log(myURL.toString())

//get host (or root domain)
// console.log(myURL.host)

// //hostname(get domain name excluding port)
// console.log(myURL.hostname)

//pathname
// console.log(myURL.pathname)

// //serialized query(get the parmeters)
// console.log(myURL.search)

// //get parameter object
// console.log(myURL.searchParams)

//add parameter
myURL.searchParams.append('123', 'abc')
console.log(myURL.searchParams)
console.log(myURL.href)

//loop through the parameters
myURL.searchParams.forEach((value, name)=>{
    console.log(`${name}: ${value}`)
})