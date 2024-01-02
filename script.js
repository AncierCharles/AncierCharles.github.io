function generateCard()
 { const name = document.getElementById('name').value.trim(); 
 
 // Trim leading and trailing spaces
  if (name === "") 
  { alert('Please enter your name before generating the card.'); return; } 
  const cardContainer = document.getElementById('card-container');
   const buttonsContainer = document.getElementById('buttons-container'); 

      // Random messages
      const messages = [
        "When you have a dream, you've got to grab it and never let go.", 
        "Nothing is impossible. The word itself says 'I'm possible!'",
        "There is nothing impossible to they who will try.",
         "The bad news is time flies. The good news is you're the pilot.",
        "May the magic and wonder of the season fill your heart with joy!", 
        "Life has got all those twists and turns. You've got to hold on tight and off you go.", 
        "Keep your face always toward the sunshine, and shadows will fall behind you.", 
        "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.", 
        "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", 
        "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.", 
        "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
        "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
         "You define your own life. Don't let other people write your script.", 
         
         "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.", 
         "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.", 
         
        "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is."
        
        
        
        
      ];

      // chagua message ya kuonesha randamly
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      // majina ya fonts
      const fontOptions = [
        'Pacifico, cursive',
        'Quicksand, sans-serif',
        'Lobster, cursive',
        'Montserrat, sans-serif',
        'Cinzel, serif',
        'Playfair Display, serif',
        'Dancing Script, cursive',
        'Raleway, sans-serif',
        'Amatic SC, cursive',
        'Roboto, sans-serif'
      ];

      // badili fonts randomly 
      const cardFont = fontOptions[Math.floor(Math.random() * fontOptions.length)];
      const nameFont = fontOptions[Math.floor(Math.random() * fontOptions.length)];

      // mpangilio wa kadi 
      const cardHTML = `<div id="greeting-card" class="animated fadeIn" style="font-family: ${cardFont};">
                          <h3 class="text-center mb-4" style="font-family: ${nameFont}; color: #f07714;">Dear ${name},</h3>
                          <p class="text-center" style="color: #ff15e7ed;">${randomMessage}</p>
                          <div id="flower-images" class="d-flex justify-content-around">
                            <img src="flower.png" alt="Flower" class="flower-image">
                            <img src="flower.png" alt="Flower" class="flower-image">
                            <img src="flower.png" alt="Flower" class="flower-image">
                          </div>
                          </div>
                          <div id="footer">Made with ❤️ by Charlie</div>
                        </div>

                        </div>`;

      cardContainer.innerHTML = cardHTML;

      // batani ya share na download    
     
      buttonsContainer.innerHTML = `
        <button id="download-button" class="btn btn-success" onclick="downloadCard()">Download</button>
        <button id="share-button" class="btn btn-info" onclick="shareCard()">Share</button>
      `;
      buttonsContainer.classList.remove('d-none');
    }

    function downloadCard() {
      const cardContainer = document.getElementById('card-container');
      // Use html2canvas to convert the card to an image
      html2canvas(cardContainer).then(canvas => {
        // Convert canvas to data URL
        const imageDataURL = canvas.toDataURL('image/jpeg');

        // Create a link and trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = imageDataURL;
        downloadLink.download = 'merry_christmas_card.jpg';

        // Simulate click to trigger download
        downloadLink.click();
      });
    }

    function shareCard() {
  const cardContainer = document.getElementById('card-container');
  
  // Use html2canvas to convert the card to an image
  html2canvas(cardContainer).then(canvas => {
    // Convert canvas to data URL
    const imageDataURL = canvas.toDataURL('image/jpeg');

    // Create a link for sharing on WhatsApp
    const shareLink = document.createElement('a');
    shareLink.href = `whatsapp://send?text=Card generated by Charlie&media=${encodeURIComponent(imageDataURL)}`;
    
    // Open WhatsApp when the link is clicked
    shareLink.click();
  });
}
