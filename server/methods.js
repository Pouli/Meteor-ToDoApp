Meteor.methods({
  addTask: function(taskName, taskDescription) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('Not authorized');
    }
    Tasks.insert({
      name: taskName,
      description: taskDescription,
      timestamp: Date.now(),
      owner: Meteor.userId()
    });
  },
  deleteTask: function(taskId) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('Not authorized');
    }
    Tasks.remove(taskId);
  },
  setState: function(taskId, state) {
    if(!Meteor.userId()) {
      throw new Meteor.Error('Not authorized');
    }
    Tasks.update(taskId, {$set: {state: state}});
  }
});
