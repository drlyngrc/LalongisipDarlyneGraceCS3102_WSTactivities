document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const wordCount = document.getElementById("wordCount");
    const sentenceCount = document.getElementById("sentenceCount");
  
    textInput.addEventListener("input", () => {
      const text = textInput.value.trim();
    
      const words = text.split(/\s+/).filter(word => word.length > 0);
      wordCount.textContent = `Words: ${words.length}`;
    
      const sentences = text
        .split(/(?<!\b[A-Z])(?<!\bMr)(?<!\bMs)(?<!\bDr)[.!?]+\s*/)
        .filter(sentence => sentence.trim().length > 0);
      sentenceCount.textContent = `Sentences: ${sentences.length}`;
    });
});