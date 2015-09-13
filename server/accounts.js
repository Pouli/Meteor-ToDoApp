Meteor.startup(function() {
  Accounts.emailTemplates.from = 'Pouli <paul.deblicker@gmail.com>';

  Accounts.emailTemplates.siteName = 'Pouli\'s ToDoApp';

  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address';
  };

  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'click on the following link to verify your email address: ' + url;
  };
});
