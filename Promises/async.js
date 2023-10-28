fetch("https://api.randomuser.me/?nat=US&results=1").then((res) =>
  console.log(res.json())
);

fetch("https://api.randomuser.me/?nat=US&results=1")
  .then((res) => res.json())
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);

const getFakePerson = async () => {
  let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
  let { results } = res;
  console.log(results);
};

getFakePerson();