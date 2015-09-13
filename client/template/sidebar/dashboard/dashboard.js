if(Meteor.isClient) {
  Template.dashboard.events({
    'click .dashboard-logout': function(e) {
      e.preventDefault();
      Meteor.logout();
      return false;
    }
  });

  Template.dashboard.helpers({
    username: function() {
      console.log(Meteor.user());
      return Meteor.user().emails.address;
    }
  });
}
