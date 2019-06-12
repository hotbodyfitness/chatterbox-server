var MessageView = {

  render: _.template(`
  <div class="<%= username %> user" style="background:#DBDBDB;padding:10px">
    <b><a onclick="FormView.handleFriends()" href="JavaScript:void(0)" style="text-transform:capitalize"><%= username %>:</a></b>
      <div class="text">
      <%= text %>
    </div>
  </div>
  <br>
    `),

  renderTest: _.template(`
    <div style="background:#DBDBDB;padding:10px">
      <b><%= username %>:</b>
        <div class="text">
        <%= text %>
      </div>
    </div>
      `)

};