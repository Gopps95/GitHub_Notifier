function checkNotifications() {
    var notificationIndicator = document.querySelector('.notification-indicator');
    if (notificationIndicator && notificationIndicator.getAttribute('data-ga-click') === 'Header, notification') {
      var notificationCount = parseInt(notificationIndicator.getAttribute('data-count'));
      if (notificationCount > 0) {
        var options = {
          body: 'You have ' + notificationCount + ' new notifications on GitHub.',
          icon: 'icon.png'
        };
        var notification = new Notification('GitHub Notification', options);
      }
    }
  }
  
  if (Notification.permission === 'granted') {
    checkNotifications();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        checkNotifications();
      }
    });
  }
  
  setInterval(checkNotifications, 30000);
  