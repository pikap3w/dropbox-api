import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
  accessToken: process.env.ACCESSTOKEN,
  fetch // same as fetch: fetch
})

// http://dropbox.github.io/dropbox-sdk-js/Dropbox.html

dbx.filesListFolder({
  path: '' // root folder of dropbox account
}).then(res => console.log(res))
