(function () {
      // Select the div with the class 'vondy-embed'
      var container = document.querySelector('.vondy-embed');
      container.style.zIndex = 999999999999;

      // Create the chat bubble container
      var chatBubbleContainer = document.createElement('div');
      chatBubbleContainer.style.position = 'fixed';
      chatBubbleContainer.style.bottom = '30px';
      chatBubbleContainer.style.right = '24px';
      chatBubbleContainer.style.width = '64px';
      chatBubbleContainer.style.height = '64px';
      chatBubbleContainer.style.backgroundColor = '#3c72f0';
      chatBubbleContainer.style.cursor = 'pointer';




      chatBubbleContainer.style.display = 'flex';


      chatBubbleContainer.style.borderRadius = '40px';

      chatBubbleContainer.style.display = 'blue';
      var chatText = document.createElement('p')
      chatText.textContent = '💬'
      chatText.style.margin = 'auto';
          chatText.style.fontSize = '26px';
          chatText.style.color = 'white';

      chatBubbleContainer.appendChild(chatText)
      // var chatBubble = document.createElement('iframe');
      // chatBubble.src = 'http://localhost:3000/bot'; // Set the source to your chatbot URL
      // chatBubble.style.width = '100%';
      // chatBubble.style.height = '100%';
      // chatBubble.style.border = 'none';

      // // Append the chat bubble iframe to the chat bubble container
      // chatBubbleContainer.appendChild(chatBubble);

      // Create the chat display container
      var chatDisplayContainer = document.createElement('div');
      chatDisplayContainer.style.position = 'fixed';
      chatDisplayContainer.style.bottom = '84px';
      chatDisplayContainer.style.right = '10px';
      chatDisplayContainer.style.width = '380px';
      chatDisplayContainer.style.height = '0px';

      // Create the chat display iframe
      var chatDisplay = document.createElement('iframe');
      chatDisplay.src = 'https://vondy.bio/bot'; // Set the source to your chatbot URL
      chatDisplay.style.width = '100%';
      chatDisplay.style.height = '100%';
      chatDisplay.style.border = 'none';

      // Append the chat display iframe to the chat display container
      chatDisplayContainer.appendChild(chatDisplay);

      // Append the chat bubble and display containers to the main container
      container.appendChild(chatBubbleContainer);
      container.appendChild(chatDisplayContainer);

      // Add event listener for chat bubble click
      chatBubbleContainer.addEventListener('click', function () {
        console.log('hi', chatDisplayContainer.style.height)
        // Toggle the display of the chat display container
        if (chatDisplayContainer.style.height === '800px') {
          chatDisplayContainer.style.height = '0px';
          chatText.innerText = '✨'
        } else {
          chatDisplayContainer.style.height = '800px';
          chatText.innerText = '↓'
        }
      });
    })()
