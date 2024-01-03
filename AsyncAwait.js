const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

const element = document.querySelector(".btn");

// getUser("susan")
//   .then((data) => getArticles(data.id))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//we can do something better and get rid of all these '.then'
//we can use async await

const getData = async () => {
  try {
    const user = await getUser("anna");
    if (user) {
      const article = await getArticles(user.id);
      console.log(article);
    }
  } catch (err) {
    console.log(err);
  }
};

const getUser = (name) => {
  return new Promise((resolve, reject) => {
    const user = users.find((person) => person.name === name);
    if (user) {
      resolve(user);
    } else {
      reject(`no person named ${name} exists`);
    }
  });
};

const getArticles = (id) => {
  return new Promise((resolve, reject) => {
    const article = articles.find((article) => article.userId === id);
    if (article) {
      resolve(article);
    } else {
      reject(`no article for id ${id}`);
    }
  });
};

getData();
