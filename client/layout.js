Meteor.subscribe('tasks');

Template.body.onCreated(function() {
  if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
      if (err !== null) {
        if (err.message == 'Verify email link expired [403]') {
          console.log('Sorry this verification link has expired.');
        }
      } else {
        console.log('Thank you! Your email address has been confirmed.');
      }
    });
  }
});

Template.body.helpers({
  tasks: function() {
    if(Session.get('hideCompleted')) {
        return Tasks.find({state: {$ne: true}});
    }
    return Tasks.find({});
  },
  register:function() {
    return Session.get('register');
  }
});
