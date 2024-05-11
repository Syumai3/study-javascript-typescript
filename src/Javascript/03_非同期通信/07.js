//#7
fetchData()
  .then((data) => {
    console.log(data);
    return fetchData2();
  })
  .then((data2) => {
    console.log(data2);
  });
