const speech = new SpeechSynthesisUtterance();
speech.volume = 0.8; // Volume (0 to 1)
speech.pitch = 1.2; // Pitch (0 to 2, 1 is normal)
speech.rate = 1.5; // Rate (speed) (0.1 to 10, 1 is normal)

// Declare an empty array to store available voices
let voices = [];
// Select the <select> element from the DOM
let voiceSelect = document.querySelector("select");


// Event listener to update the voices when the list of available voices changes
window.speechSynthesis.onvoiceschanged = () => {
    // Update the 'voices' array with the available voices
    voices = window.speechSynthesis.getVoices();
    // Assign the first voice in the array to the speech object
    speech.voice = voices[0];

    // Populate the dropdown list with available voices
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}


// Event listener to handle voice selection from the dropdown
voiceSelect.addEventListener("change", () => {
    // Update the voice of the speech object based on the selected voice from the dropdown
    speech.voice = voices[voiceSelect.value];
});



// Event listener to trigger speech synthesis when the button is clicked
document.querySelector("button").addEventListener("click", function() {
    // Set the text to be spoken to the content of the textarea
    speech.text = document.querySelector("textarea").value;
    // Trigger speech synthesis
    window.speechSynthesis.speak(speech);
});