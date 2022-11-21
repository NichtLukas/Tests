const { faker } = require("@faker-js/faker");
const DEFAULT_MAX_HUMANS = 5;

function getRandomHumans(max = DEFAULT_MAX_HUMANS) {
  return faker.datatype.array(max).map((el, index) => {
    return {
      id: index + 1,
      name: faker.name.fullName(),
      age: faker.datatype.number({ min: 18, max: 100 }),
    };
  });
}
module.exports = { DEFAULT_MAX_HUMANS, getRandomHumans };
