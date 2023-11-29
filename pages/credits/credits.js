// JavaScript Function
function toggleVisibility() {
    var credits = document.getElementById('credits');
    var consoleCommand = document.getElementById('console-command');
  
    // Check if elements exist
    if (credits && consoleCommand) {
      // Make the credits span visible
      credits.style.display = 'block';
  
      // Hide the console-command div
      consoleCommand.style.display = 'none';
    } else {
      console.error("Elements not found");
    }
  }
  