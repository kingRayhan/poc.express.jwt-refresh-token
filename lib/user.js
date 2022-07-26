const { faker } = require("@faker-js/faker");

const generateUser = () => {
  return {
    // _id: faker.datatype.uuid(),
    _id: "d5dfddcd-d4ec-4708-ad9b-4187ca042dd9",
    name: faker.name.findName(),
    email: "example@example.com",
    joined: faker.date.past(),
    avatar: faker.image.avatar(),
  };
};

module.exports = { generateUser };
