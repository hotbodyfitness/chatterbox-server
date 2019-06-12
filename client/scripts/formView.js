var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#rooms button').click(FormView.handleRoom);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    MessagesView.renderMessage();
    App.send();
    FormView.highlight();
  },

  handleRoom: function () {
    RoomsView.renderRoom();
  },

  handleFriends: function () {
    $('.user').on('click', function (event) {
      $(`.${event.target.innerHTML.slice(0, -1)}`).css("background", "#FFFF00"); // new
      Friends.username.push(event.target.innerHTML.slice(0, -1));
      // console.log(event.target.innerHTML.slice(0, -1));
    });
    FormView.highlight();

  },

  highlight: function () {
    for (let y = 0; y < Friends.username.length; y++) {
      $(`.${Friends.username[y]}`).css("background", "#FFFF00");
    }
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};