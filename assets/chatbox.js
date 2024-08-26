document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatbotBody = document.getElementById('chatbot-body');
    const closeBtn = document.getElementById('close-btn');
    const toggleChatBtn = document.getElementById('toggle-chat-btn');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    const chatbotContainer = document.querySelector('.chatbot-container');

    function sendMessage(message, fromUser = true) {
        if (message.trim() === '') return;

        // Add message to chat
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.classList.add(fromUser ? 'user-message' : 'bot-message');
        chatbotBody.appendChild(messageDiv);

        // Scroll to the bottom of the chat
        chatbotBody.scrollTop = chatbotBody.scrollHeight;

        if (fromUser) {
            // Simulate bot response (replace with actual response logic if necessary)
            setTimeout(() => {
                const botMessage = getBotResponse(message);
                if (message.toLowerCase().includes('tell me a joke')) {
                    fetchJoke();  // Fetch a random joke
                } else {
                    sendMessage(botMessage, false);
                }
            }, 500);
        }

        // Update chatbox height
        updateChatboxHeight();
    }

    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();

        if (message.includes('hello')) {
            return "Hello! How can I assist you today?";
        } else if (message.includes('services')) {
            return "We offer services including video and photo editing, logo design, website development, and social media management. What would you like to know more about?";
        } else if (message.includes('how are you')) {
            return "I'm a bot, so I don't have feelings, but thanks for asking!";
        } else if (message.includes('video editing')) {
            return "Our video editing service includes editing, color correction, and adding effects. You can check out examples on our portfolio page.";
        } else if (message.includes('photo editing')) {
            return "We offer photo retouching, color correction, and creative edits. Feel free to ask for specific examples!";
        } else if (message.includes('logo design')) {
            return "We create custom logos that reflect your brand. You can see some of our designs in our portfolio.";
        } else if (message.includes('website development')) {
            return "Our website development service covers design, coding, and deployment. We ensure your site looks great and functions smoothly.";
        } else if (message.includes('social media management')) {
            return "We handle everything from content creation to engagement strategies for your social media platforms.";
        } else if (message.includes('pricing')) {
            return "Pricing depends on the specifics of your project. Please provide more details, and we’ll get back to you with a quote.";
        } else if (message.includes('contact')) {
            return "You can contact us through our contact page or email us directly at [your email].";
        } else if (message.includes('bye')) {
            return "Goodbye! Have a great day!";
        } else {
            return "I'm sorry, I don't understand that. Can you try asking something else?";
        }
    }

    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                const joke = `${data.setup} ${data.punchline}`;
                sendMessage(joke, false);
            })
            .catch(error => {
                sendMessage("Sorry, I couldn't fetch a joke at the moment. Please try again later.", false);
            });
    }

    function updateChatboxHeight() {
        const minHeight = 300; // Initial height in pixels
        const maxHeight = window.innerHeight * 0.5; // 50% of viewport height

        // Update the chatbox height based on the content
        const contentHeight = chatbotBody.scrollHeight;
        chatbotContainer.style.height = Math.min(maxHeight, Math.max(minHeight, contentHeight + 70)) + 'px'; // Adding header and input height
    }

    sendBtn.addEventListener('click', () => {
        sendMessage(userInput.value);
        userInput.value = '';  // Clear input field
        updateChatboxHeight();
    });

    suggestionBtns.forEach(button => {
        button.addEventListener('click', () => {
            const suggestionText = button.textContent;
            userInput.value = ''; // Ensure input field is clear before sending
            sendMessage(suggestionText); // Send the suggestion as a message
            updateChatboxHeight();
        });
    });

    // Close the chatbot
    closeBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
        toggleChatBtn.style.display = 'block'; // Show the toggle button when chatbox is hidden
    });

    // Show the chatbot
    toggleChatBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'flex'; // Show the chatbox
        toggleChatBtn.style.display = 'none'; // Hide the toggle button when chatbox is visible
    });

    // Adjust chatbox height on window resize
    window.addEventListener('resize', updateChatboxHeight);

    // Initial height adjustment
    updateChatboxHeight();
});
