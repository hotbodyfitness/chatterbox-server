var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.render();
  },

  render: function () {
    var dataArray = [];
    var roomArray = [];
    App.fetch(function (data) {
      dataArray = data.slice();
      for (let i = 0; i < dataArray.length; i++) {
        if (!roomArray.includes(dataArray[i].roomname) && dataArray[i].hasOwnProperty('roomname')) {
          roomArray.push(dataArray[i].roomname);
          if (dataArray[i].roomname.length !== 0) {
            $('#rooms select').append(`<option id="${dataArray[i].roomname}">${dataArray[i].roomname}</option>`);
          }
        }
      }
    });
  },

  renderRoom: function () {
    var newRoom = $('#rooms input').val();
    $('#rooms select').prepend(`<option id="${newRoom}">${newRoom}</option>`);
    $('#rooms input').val('');
    $('#rooms select').val(`${newRoom}`);
    $('#chats').children().html('<p></p>');
  }

};
