// The `window.ChatSasa` property gives access to methods for various operations, below is a demo

if(window?.ChatSasa){
  
  // To pass logged-in user info to the Widget whenever user signs in to your site
  window.ChatSasa.setUserData({
    user_id: "id of user", 
    user_name: "name of user", 
    user_email: "email of user"
  });

  // To remove logged-in user info from the Widget after user signs out on your site
  window.ChatSasa.clearUserData();

  // To open the widget
  window.ChatSasa.open();

  // To close the widget
  window.ChatSasa.close();
}
