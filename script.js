
    // This waits for the user to click the Submit button.
    document.getElementById('submitButton').addEventListener('click',
    function() {
      //This takes whatever the user entered and saves it as 'messageInput'.
      var messageInputValue = document.getElementById('messageInput').value;
  
     // This changes the message to all lowercase.
      messageInputValue = messageInputValue.toLowerCase();
  
    // This Conditional Statement describes how the talkbot will respond
      if(messageInputValue.includes('joke')){
        document.getElementById('TalkbotResponse').innerHTML = 'Knock Knock';
      }
  
    // This Conditional Statement describes how the talkbot will respond
      if(messageInputValue.includes('there')){
        document.getElementById('TalkbotResponse').innerHTML = 'woo';
      }
  
  // This Conditional Statement describes how the talkbot will respond
      if(messageInputValue.includes('woo who')){
        document.getElementById('TalkbotResponse').innerHTML = 'Woo hoo! you wrote some code';
      }
    
      // This clears the `messageInput` text box.
      document.getElementById('messageInput').value = '';
    });
  