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
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;

  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Product not found');
    }
    const product = this.users[index];
    this.users[index] = {
      ...product,
      ...changes
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Product not found');
    }
    this.users.splice(index, 1);
    return { id };
  }

}

module.exports = UsersService;
