importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'YOUR_FIREBASE_API_KEY',authDomain:'YOUR_PROJECT_ID.firebaseapp.com',projectId:'YOUR_PROJECT_ID',storageBucket:'YOUR_PROJECT_ID.appspot.com',messagingSenderId:'YOUR_MESSAGING_SENDER_ID',appId:'YOUR_FIREBASE_APP_ID'});
const messaging=firebase.messaging();messaging.onBackgroundMessage(payload=>self.registration.showNotification(payload.notification?.title||'CareConnect reminder',{body:payload.notification?.body||'You have an appointment reminder.',icon:'./assets/icon-192.png',data:{url:payload.data?.url||'./appointments.html'}}));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow(e.notification.data?.url||'./appointments.html'))});
