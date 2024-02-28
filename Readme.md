### SpeechSynthesisUtterance

##### The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request.<br>
It contains the content the speech service should read and information about how to read<br>
it (e.g. language, pitch and volume.). SpeechSynthesisUtterance is a Web Speech API interface used to represent the speech text that the speech synthesis service will pronounce. It allows you to control various aspects of the speech, such as the text content, voice, rate, pitch, and volume.

Here's a breakdown of its key features:

Text Content: You can set the text property of the SpeechSynthesisUtterance object to specify the text that you want the speech synthesis service to pronounce.

Voice: You can set the voice property to specify the voice to be used for the speech synthesis. You can obtain a list of available voices using SpeechSynthesis.getVoices().

Rate: The rate property controls the speed at which the text is spoken. A value of 1.0 represents the normal speaking rate, and higher values increase the rate, while lower values decrease it.

Pitch: The pitch property controls the pitch of the speech. It represents the perceived frequency of the voice. Values less than 1.0 decrease the pitch, while values greater than 1.0 increase it.

Volume: The volume property controls the volume of the speech. It ranges from 0 (silent) to 1 (full volume).

Once you've configured the SpeechSynthesisUtterance object with the desired text and settings, you can pass it to the SpeechSynthesis interface's speak() method to initiate the speech synthesis process.

Here's a basic example of how you might use SpeechSynthesisUtterance:

'''
const utterance = new SpeechSynthesisUtterance('Hello, world!');
utterance.voice = speechSynthesis.getVoices()[0]; // Set voice
utterance.rate = 1.5; // Set speaking rate
utterance.pitch = 1.2; // Set pitch
utterance.volume = 0.8; // Set volume

speechSynthesis.speak(utterance); // Speak the text
'''



















Constructor
SpeechSynthesisUtterance()
Returns a new SpeechSynthesisUtterance object instance.

Instance properties
SpeechSynthesisUtterance also inherits properties from its parent interface, EventTarget.

SpeechSynthesisUtterance.lang
Gets and sets the language of the utterance.

SpeechSynthesisUtterance.pitch
Gets and sets the pitch at which the utterance will be spoken at.

SpeechSynthesisUtterance.rate
Gets and sets the speed at which the utterance will be spoken at.

SpeechSynthesisUtterance.text
Gets and sets the text that will be synthesized when the utterance is spoken.

SpeechSynthesisUtterance.voice
Gets and sets the voice that will be used to speak the utterance.

SpeechSynthesisUtterance.volume
Gets and sets the volume that the utterance will be spoken at.

Events
Listen to these events using addEventListener() or by assigning an event listener to the oneventname property of this interface.

boundary
Fired when the spoken utterance reaches a word or sentence boundary. Also available via the onboundary property.

end
Fired when the utterance has finished being spoken. Also available via the onend property.

error
Fired when an error occurs that prevents the utterance from being successfully spoken. Also available via the onerror property

mark
Fired when the spoken utterance reaches a named SSML "mark" tag. Also available via the onmark property.

pause
Fired when the utterance is paused part way through. Also available via the onpause property.

resume
Fired when a paused utterance is resumed. Also available via the onresume property.

start
Fired when the utterance has begun to be spoken. Also available via the onstart property.