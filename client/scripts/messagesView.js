var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // FormView.highlight();
    MessagesView.render();
    $('#rooms select').change(function() {
      $('#chats').children().html('<p></p>');
      // FormView.highlight();
      MessagesView.render();
    });
  },

  render: function () {
    var messageArray = [];
    var value = '';
    App.fetch(function (data) {
      messageArray = data.slice();
      value = $('#rooms select').val();
      for (let x = 0; x < messageArray.length; x++) {
        if (messageArray[x].hasOwnProperty('username')) {
          if (!messageArray[x].username.includes('<') && !messageArray[x].text.includes('<') && !messageArray[x].username.includes('%')) {
            if (messageArray[x].roomname === value) {
              $('#chats').children().append(MessageView.render(messageArray[x]));
            }
          }
        }
      }
    });
    FormView.highlight();
  },

  renderMessage: function (input) {
    if (input) {
      $('#chats').prepend(MessageView.renderTest(input));
    } else {
      Messages.text = $('#message').val();
      Messages.roomname = $('#rooms select').val();
      if (Messages.username.includes('<') || Messages.username.includes('%')) {
        Messages.username = 'Anonymous';
      }
      if(!Messages.text.includes('<') && !Messages.username.includes('>')) {
        $('#chats').children().prepend(MessageView.render(Messages));
      }
    }
    document.getElementById('message').value = '';
    FormView.highlight();
  }
};