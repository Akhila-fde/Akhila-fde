// Initial story text
let storyText = "Welcome! You find yourself in a mysterious forest...";

// Array to hold different story paths
let storyPaths = [
    {
        text: "You decide to explore deeper into the forest...",
        choices: [
            {
                text: "Follow a faint trail",
                outcome: "You discover an abandoned cabin."
            },
            {
                text: "Cross a rushing river",
                outcome: "You stumble upon a hidden cave."
            }
        ]
    },
    {
        text: "You decide to climb a tree for a better view...",
        choices: [
            {
                text: "Spot a distant mountain",
                outcome: "You notice smoke rising from a distant village."
            },
            {
                text: "See a glint of metal",
                outcome: "You find an old, rusted chest hidden in the branches."
            }
        ]
    }
];

// Function to update the story based on user choice
function makeChoice(choiceIndex) {
    let currentPath = storyPaths.shift(); // Get and remove the current story path
    let choice = currentPath.choices[choiceIndex - 1]; // Array index is 0-based

    // Update story text with chosen outcome
    storyText = choice.outcome;

    // Update HTML content
    document.getElementById('story').textContent = storyText;

    // Clear previous choices
    document.getElementById('choices').innerHTML = '';

    // If there are more story paths, show new choices
    if (storyPaths.length > 0) {
        for (let choice of storyPaths[0].choices) {
            let button = document.createElement('button');
            button.textContent = choice.text;
            button.setAttribute('onclick', `makeChoice(${storyPaths[0].choices.indexOf(choice) + 1})`);
            document.getElementById('choices').appendChild(button);
        }
    } else {    
        // Display ending or final message
        document.getElementById('choices').innerHTML = '<p>The end. Thanks for playing!</p>';
    }
}

// Initialize the first set of choices
for (let choice of storyPaths[0].choices) {
    let button = document.createElement('button');
    button.textContent = choice.text;
    button.setAttribute('onclick', `makeChoice(${storyPaths[0].choices.indexOf(choice) + 1})`);
    document.getElementById('choices').appendChild(button);
}