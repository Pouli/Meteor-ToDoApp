Template.taskForm.events({
  'submit .task-form': function(e) {
    e.preventDefault();
    var name = e.target.name.value,
        description = e.target.description.value;
    Meteor.call('addTask', name, description, function(err) {
      if(err) {
        console.log(err.error);
      }
    });
    e.target.name.value = "";
    e.target.description.value = "";
    return false;
  }
});
