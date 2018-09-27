const functions = require('firebase-functions');
const fetch = require('node-fetch')
const cheerio = require('cheerio')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createUser = functions.firestore
    .document('customPresets/{presetId}')
    .onCreate((snap, context) => {
      const newData = snap.data();
      const name = newData.name;
      if(!name) return null
      return fetch(`soundcloud.com/${name}/`)
        .then(r => r.text())
        .then(html => {
          const $ = cheerio.load(html, {xmlMode: true})
          const avatarUrl = $('article > header > img[itemprop="image"]').attr('src')
          return snap.ref.update(Object.assign(newData, { avatarUrl: avatarUrl }))
        })
        .catch(e => {
          return null
        })
    })