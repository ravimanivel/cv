// Web Speech API Text-to-Speech Utility - Single Dedicated ChatGPT AI Voice
let voiceEnabled = false;
let currentUtterance = null;
let speechTimeout = null;
let lastSpokenText = '';
let cachedVoices = [];

// Initialize voices immediately & on voice load event
const loadVoices = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    cachedVoices = window.speechSynthesis.getVoices() || [];
  }
};

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

export const setVoiceEnabled = (enabled) => {
  voiceEnabled = enabled;
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    if (!enabled) {
      window.speechSynthesis.cancel();
      lastSpokenText = '';
    } else {
      window.speechSynthesis.resume();
    }
  }
};

export const isVoiceEnabled = () => voiceEnabled;

// Select natural, clear ChatGPT-like AI voice from system voices
const selectChatGPTVoice = (voices) => {
  if (!voices || voices.length === 0) return null;

  const englishVoices = voices.filter((v) => v.lang.startsWith('en'));

  // Priority search for smooth, natural ChatGPT AI voice models (e.g. Google Natural, Neural, Samantha, Aria, Jenny)
  const chatGPTVoiceKeywords = [
    'natural',
    'google us english',
    'neural',
    'aria',
    'jenny',
    'samantha',
    'zira',
    'google uk english female',
    'google',
    'female'
  ];

  for (const keyword of chatGPTVoiceKeywords) {
    const matched = englishVoices.find((v) => v.name.toLowerCase().includes(keyword));
    if (matched) return matched;
  }

  return englishVoices[0] || voices[0];
};

export const speakText = (text, force = false) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Ensure voice is marked enabled if forced or state active
  if (!voiceEnabled && !force) {
    return;
  }

  const cleanText = text ? text.trim().replace(/\s+/g, ' ') : '';
  if (!cleanText || cleanText.length < 2) {
    return;
  }

  if (cleanText === lastSpokenText && !force) {
    return;
  }

  // Clear previous pending speech timeouts
  if (speechTimeout) {
    clearTimeout(speechTimeout);
  }

  speechTimeout = setTimeout(() => {
    try {
      window.speechSynthesis.cancel(); // Stop any currently playing audio
      window.speechSynthesis.resume(); // Ensure audio context is unpaused

      const utterance = new SpeechSynthesisUtterance(cleanText);

      // ChatGPT Voice parameters: Natural pitch, natural speech cadence
      utterance.pitch = 1.0;
      utterance.rate = 1.0;
      utterance.volume = 1.0;

      // Select natural ChatGPT AI voice
      const voices = cachedVoices.length > 0 ? cachedVoices : (window.speechSynthesis.getVoices() || []);
      const chatGPTVoice = selectChatGPTVoice(voices);

      if (chatGPTVoice) {
        utterance.voice = chatGPTVoice;
      }

      currentUtterance = utterance;
      lastSpokenText = cleanText;

      utterance.onend = () => {
        setTimeout(() => {
          if (lastSpokenText === cleanText) {
            lastSpokenText = '';
          }
        }, 600);
      };

      utterance.onerror = (e) => {
        console.warn('SpeechSynthesis error:', e);
        lastSpokenText = '';
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }, 150);
};

export const stopSpeech = () => {
  if (speechTimeout) clearTimeout(speechTimeout);
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  lastSpokenText = '';
};
