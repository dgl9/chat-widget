(function () {
    // Select the div with the class 'vondy-embed'
    var container = document.querySelector('.vondy-embed');
    container.style.zIndex = 999999999999;

    var maxHeight = '800px'; // Set max height in a variable

    // Create the chat bubble container
    var chatBubbleContainer = document.createElement('div');
    chatBubbleContainer.style.position = 'fixed';
    chatBubbleContainer.style.bottom = '30px';
    chatBubbleContainer.style.right = '24px';
    chatBubbleContainer.style.width = '64px';
    chatBubbleContainer.style.height = '64px';
    chatBubbleContainer.style.backgroundColor = '#3c72f0';
    chatBubbleContainer.style.cursor = 'pointer';
    chatBubbleContainer.style.borderRadius = '40px';
    chatBubbleContainer.style.transition = 'transform 0.3s ease-in-out'; 
    chatBubbleContainer.style.display = 'flex';

    var chatText = document.createElement('p');
    chatText.textContent = '💬';
    chatText.style.margin = 'auto';
    chatText.style.fontSize = '26px';
    chatText.style.color = 'white';
    chatText.style.userSelect = 'none'; 

    chatBubbleContainer.appendChild(chatText);

    // Create the chat display container
    var chatDisplayContainer = document.createElement('div');
    chatDisplayContainer.style.position = 'fixed';
    chatDisplayContainer.style.bottom = '84px';
    chatDisplayContainer.style.right = '10px';
    chatDisplayContainer.style.width = '380px';
    chatDisplayContainer.style.height = '0px';

    // Create the chat display iframe
    var chatDisplay = document.createElement('iframe');
    var id = container.dataset.id
    chatDisplay.src = 'https://vondy.bio/bot/' + id; 
    chatDisplay.style.width = '100%';
    chatDisplay.style.height = '100%';
    chatDisplay.style.border = 'none';

    chatDisplayContainer.appendChild(chatDisplay);

    container.appendChild(chatBubbleContainer);
    container.appendChild(chatDisplayContainer);

    chatBubbleContainer.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
    });

    chatBubbleContainer.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });

    chatBubbleContainer.addEventListener('click', function () {
        if (chatDisplayContainer.style.height === '0px') {
            chatDisplayContainer.style.height = Math.min(800, window.innerWidth <= 480 ? window.innerHeight - 100 : 800) + 'px';
            chatText.innerText = '↓';
        } else {
          chatDisplayContainer.style.height = '0px';
            chatText.innerText = '💬';
            
        }
    });

})()
