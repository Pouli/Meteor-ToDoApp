Template.hideCompleted.helpers({
  hideCompleted: function() {
    return Session.get('hideCompleted');
  }
});

Template.hideCompleted.events({
  'change .hide-completed': function(e) {
    Session.set('hideCompleted', e.target.checked);
  }
});
