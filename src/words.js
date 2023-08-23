// randomWordFetcher.js

const fetchRandomWord = async () => {
  try {
    const response = await fetch('/dictionary.txt');
    const text = await response.text();
    const words = text.trim().split('\n');
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  } catch (error) {
    console.error('Error fetching random word:', error);
    return null;
  }
};

export default fetchRandomWord;