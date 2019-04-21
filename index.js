import { Dropbox } from 'dropbox'

const dbx = new Dropbox({
  accessToken: process.env.ACCESSTOKEN,
  fetch // same as fetch: fetch
})
