if(Meteor.isClient) {
  Template.loginForm.events({
    'submit .login-form': function(e) {
        e.preventDefault();
        var mail = e.target.mail.value,
            password = e.target.password.value;

        Meteor.loginWithPassword(mail, password);
        e.target.mail.value = '';
        e.target.password.value = '';
        return false;
    },
    'click .sign-up': function(e) {
      Session.set('register', true);
      return false;
    }
  });
}
