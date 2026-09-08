// Firebase Configuration
// Connected to the "ajmi-ashiq-nikkah" Firebase project.

var firebaseConfig = {
  apiKey: "AIzaSyCsy9AU_7J26SehCKS0D0ASShCrNZbrrwQ",
  authDomain: "ajmi-ashiq-nikkah.firebaseapp.com",
  databaseURL: "https://ajmi-ashiq-nikkah-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ajmi-ashiq-nikkah",
  storageBucket: "ajmi-ashiq-nikkah.firebasestorage.app",
  messagingSenderId: "801974844725",
  appId: "1:801974844725:web:56481fe03ea531855ba07c"
};

// Initialize Firebase (skipped gracefully until real credentials are set)
try {
  if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
  } else {
    console.warn('Firebase not configured yet — Wishes Wall will use localStorage fallback. See js/firebase-config.js');
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
}
