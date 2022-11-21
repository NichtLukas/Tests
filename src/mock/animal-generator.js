const { faker } = require("@faker-js/faker");
const DEFAULT_MAX_ANIMALS = 5;

function getRandomAnimals(max = DEFAULT_MAX_ANIMALS) {
  return faker.datatype.array(max).map((el, index) => {
    return {
      id: index + 1,
      name: faker.animal(),
      age: faker.datatype.number({ min: 18, max: 100 }),
    };
  });
}
module.exports = { DEFAULT_MAX_ANIMALS, getRandomHumans: getRandomAnimals };
