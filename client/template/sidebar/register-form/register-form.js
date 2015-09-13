if(Meteor.isClient) {
  Template.registerForm.events({
    'submit .register-form': function(e) {
        e.preventDefault();
        Accounts.createUser({
          email: e.target.mail.value,
          password: e.target.password.value
        });
        return false;
    },
    'click .log-in': function() {
      Session.set('register', false);
      return false;
    }
  });
}
