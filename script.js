const playSlotMachine = async () => {
  return new Promise((fullfill, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        fullfill("Jackpot! You won 💰");
      } else {
        reject("No luck, spin again! 😢");
      }
    }, 2000);
  });
};

document.getElementById("playButton").addEventListener("click", async () => {
  const resultElement = document.getElementById("result");

  resultElement.textContent = "Wait...";

  try {
    const result = await playSlotMachine();
    resultElement.textContent = result;
    resultElement.className = "result win";
  } catch (error) {
    resultElement.textContent = error;
    resultElement.className = "result lose";
  }
});
