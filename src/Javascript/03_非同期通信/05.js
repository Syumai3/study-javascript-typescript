//#5

async function riskyFunction() {
  throw new Error("Danger!");
}

async function handleRisks() {
  const result = await riskyFunction().catch((error) => {
    console.log(error);
  });
}

handleRisks();
