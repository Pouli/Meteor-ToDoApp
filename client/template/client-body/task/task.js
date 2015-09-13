Template.task.events({
  'click .task-delete': function(e) {
    Meteor.call('deleteTask', this._id, function(err) {
      if(err) {
        console.log(err.error);
      }
    });
    return false;
  },
  'change .task-state': function(e){
    var state = e.target.checked;
    Meteor.call('setState', this._id, state, function(err) {
      if(err) {
        console.log(err.error);
      }
    });
  }
});
