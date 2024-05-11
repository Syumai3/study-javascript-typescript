//#4

async function fetchData() {
  return "Data";
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
