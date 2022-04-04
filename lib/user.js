const faker = require("@faker-js/faker").faker;

const generateUser = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: "example@example.com",
    joined: faker.date.past(),
    avatar: faker.image.avatar(),
  };
};

module.exports = { generateUser };
// console.log(generateUser());
