Accounts.onCreateUser(function(options, user) {
  user.profile = {};

  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;
});
