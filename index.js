const fetch = require('isomorphic-fetch')
const Dropbox = require('dropbox').Dropbox

const dbx = new Dropbox({
  accessToken: process.env.ACCESSTOKEN,
  fetch // same as saying fetch: fetch
})

// http://dropbox.github.io/dropbox-sdk-js/Dropbox.html

dbx
  .filesListFolder({ path: '' }) // root folder of dropbox account
  .then(console.log, console.error)
// }).then(res => console.log(res))
