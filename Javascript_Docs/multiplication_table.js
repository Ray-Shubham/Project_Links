const printMultiplicationTable = (number, limit) => {
    let currentMultiplier = 1;
    const intervalId = setInterval(() => {
      console.log(`${number} x ${currentMultiplier} = ${number * currentMultiplier}`);
      currentMultiplier++;
  
      if (currentMultiplier > limit) {
        clearInterval(intervalId);
        console.log("Table printing completed.");
      }
    }, 1000);
  };
  
  // Example usage: Print the table of 5 up to 10
  const tableNumber = 5;
  const tableLimit = 10;
  
  console.log(`Printing the table of ${tableNumber} up to ${tableLimit}:`);
  printMultiplicationTable(tableNumber, tableLimit);