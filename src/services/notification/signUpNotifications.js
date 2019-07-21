import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from 'react-native';

const configure = () => {
 PushNotification.configure({

   onRegister: function(token) {
     //process token
   },

   onNotification: function(notification) {
     // process the notification
     // required on iOS only
     notification.finish(PushNotificationIOS.FetchResult.NoData);
   },

   permissions: {
     alert: true,
     badge: true,
     sound: true
   },

   popInitialNotification: true,
   requestPermissions: true,

 });
};

const localNotification = (data) => {
  const notifi = {
    autoCancel: true,
    largeIcon: "ic_launcher",
    smallIcon: "ic_notification",
    bigText: "You have signed up.",
    color: "green",
    vibrate: true,
    vibration: 300,
    title: "MyApp",
    message: data.title,
    playSound: true,
    soundName: 'default',
    actions: '["Accept", "Reject"]',
  };
  PushNotification.localNotification(notifi);
 };

export {
 configure,
 localNotification,
};
