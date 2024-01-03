const number = 1;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === number) {
    resolve("successfull");
  } else {
    reject("unsuccessful");
  }
});

promise.then((data) => console.log(data)).catch((data) => console.log(data));
