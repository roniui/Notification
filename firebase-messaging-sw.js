// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCu3XdC711lbMBeb_ouDiLRr-E-NFutRyA",
    authDomain: "notification-da251.firebaseapp.com",
    projectId: "notification-da251",
    storageBucket: "notification-da251.firebasestorage.app",
    messagingSenderId: "688852017288",
    appId: "1:688852017288:web:ec2103ebc3d3a9dac9ff3d",
    measurementId: "G-013XN47PE5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: icon || "./icons/icon-512.png"
  });
});
