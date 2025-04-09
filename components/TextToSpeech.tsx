'use client'; // Ensure this is a client component

import { useState } from 'react';
import { FaVolumeUp } from 'react-icons/fa'; // Importing a volume icon

const TextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    const textContent = document.body.innerText; // Grab all the text content from the body
    const speech = new SpeechSynthesisUtterance(textContent);
    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Choose a voice (default to the first one)
    
    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Stop the current speech if already speaking
    } else {
      window.speechSynthesis.speak(speech); // Start speaking the text
    }
    
    setIsSpeaking(!isSpeaking); // Toggle speaking state
  };

  return (
    <div className="text-to-speech-button" onClick={handleSpeak}>
      <FaVolumeUp />
    </div>
  );
};

export default TextToSpeech;
