import { Notifications, Permissions, Constants } from 'expo';


const Notifier = {
  startMorningNotification() {
    let now  = new Date();
    now.setDate(now.getDate() + 1)
    now.setHours(9);
    now.setMinutes(0);
    now.setMilliseconds(0);
    this._startNotification(now)
  },

  startLunchNotification() {
    let now  = new Date();
    now.setDate(now.getDate() + 1)
    now.setHours(13);
    now.setMinutes(0);
    now.setMilliseconds(0);
    this._startNotification(now)
  },

  startDinnerNotification() {
    let now  = new Date();
    now.setDate(now.getDate() + 1)
    now.setHours(18);
    now.setMinutes(0);
    now.setMilliseconds(0);
    this._startNotification(now)
  },

  startSummaryNotification() {
    let now  = new Date();
    now.setDate(now.getDate() + 1)
    now.setHours(22);
    now.setMinutes(0);
    now.setMilliseconds(0);
    this._startNotification(now)
  },

  startAllNotifications() {
    this.startMorningNotification();
    this.startLunchNotification();
    this.startDinnerNotification();
    this.startSummaryNotification();
  },

  _startNotification(date) {
    Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (Constants.lisDevice && result.status === 'granted') {
      console.log('Notification permissions granted.')
    }
    console.log("Scheduling notifications")
    const localNotification = {
      title: 'Habbits',
      body: 'It is time for you to answer some questions!', // (string) — body text of the notification.
      ios: { // (optional) (object) — notification configuration specific to iOS.
        sound: true // (optional) (boolean) — if true, play a sound. Default: false.
      },
      android: // (optional) (object) — notification configuration specific to Android.
        {
          sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
          //icon (optional) (string) — URL of icon to display in notification drawer.
          //color (optional) (string) — color of the notification icon in notification drawer.
          priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
          sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
          vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
          // link (optional) (string) — external link to open when notification is selected.
        }
    };
    
    const repeat = 'day';

    const schedulingOptions = {
      time: date, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
      repeat: repeat
    };
    Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
  },

  stopNotifications() {
    Notifications.cancelAllScheduledNotificationsAsync();
  },

  getUnqiueId() {
    return Notifications.getExpoPushTokenAsync();
  }

}

export default Notifier;