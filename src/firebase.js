import firebase from 'firebase/app'

import 'firebase/auth'

// const firebaseConfig = {
//    apiKey: 'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
//    authDomain: 'not-yt.firebaseapp.com',
//    projectId: 'not-yt',
//    storageBucket: 'not-yt.appspot.com',
//    messagingSenderId: '713650135776',
//    appId: '1:713650135776:web:3612f40b495bd9e6ef6685',
// }

const firebaseConfig = {
   apiKey: "AIzaSyA7Ti9NGzHM6DwmCrPgIEApDRsvKkRNo0o",
   authDomain: "yt-clone-23.firebaseapp.com",
   projectId: "yt-clone-23",
   storageBucket: "yt-clone-23.appspot.com",
   messagingSenderId: "553631043248",
   appId: "1:553631043248:web:42ac2b5da7d86936397575"
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
