'use strict'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCkjQ3_8cdDxWc4xkjXxACwBsDgTHtUXn8',
  authDomain: 'sw-chars.firebaseapp.com',
  databaseURL: 'https://sw-chars.firebaseio.com',
  projectId: 'sw-chars',
  storageBucket: 'sw-chars.appspot.com',
  messagingSenderId: '102407410694',
}

firebase.initializeApp(config)

export const db = firebase.firestore()

const queryParams = (new URL(document.location)).searchParams
const docId = queryParams.get('d')
if (!docId) {
  alert('No sheet ID; require "?d=sheetId" in URL')
}

export const docRef = db.collection('chars').doc(docId)

export default db
