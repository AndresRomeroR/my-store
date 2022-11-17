const faker = require('faker');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for(let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        registeredAt: faker.date.past(),
    });
  }

  }

  create() {

  }

  find() {
    return this.users;

  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = UsersService;
