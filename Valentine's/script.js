document.getElementById("clickButton").addEventListener("click", function() {
    // Add "Happy Heart's Day" text higher on the page
    var happyText = document.createElement('div');
    happyText.className = 'flower-text';
    happyText.textContent = "Happy Heart's Day!";
    happyText.style.marginBottom = '50px'; // Add margin
    happyText.style.marginTop = '-75px'; // Add margin
    var flowerContainer = document.getElementById("flowerContainer");
    var parentDiv = flowerContainer.parentNode;
    parentDiv.insertBefore(happyText, flowerContainer);

    // Replace the heart image with the pixelated flower
    document.getElementById("flowerContainer").innerHTML = '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1579973-b93d-4ea8-a40f-1afe0bf0ee77/dds0jre-f56bf5f5-22d7-4c94-8f2b-7cec57e8a50e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExNTc5OTczLWI5M2QtNGVhOC1hNDBmLTFhZmUwYmYwZWU3N1wvZGRzMGpyZS1mNTZiZjVmNS0yMmQ3LTRjOTQtOGYyYi03Y2VjNTdlOGE1MGUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5FReeyKuOoeTdkkOkWvVOiIhVB7bukbIpKvoiWXxKJo" alt="Pixelated Flower" class="flower">';
  
    // Add "Flowers for you" text below the image
    var flowerText = document.createElement('div');
    flowerText.className = 'flower-text';
    flowerText.textContent = "Here's a flower for you!";
    document.body.appendChild(flowerText);

    var flowerText2 = document.createElement('div');
    flowerText2.className = 'flower-text';
    flowerText2.textContent = "You deserve the world.";
    document.body.appendChild(flowerText2);


    var button = document.querySelector('.click-button');
    button.style.display = 'none'; // Hide the button

    var topText = document.querySelector('.top-text');
        topText.style.display = 'none'; // Hide the top text element

    // Set background image
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/05/59/94/05599424bb5a1b7819956d0288559697.gif")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    // Adjust text size
    happyText.style.fontSize = '36px'; // Increase text size
    flowerText.style.fontSize = '32px'; // Increase text size
    flowerText2.style.fontSize = '28px'; // Increase text size

    // Adjust image size
    document.querySelector('.flower').style.width = '320px'; // Increase image width

    
});