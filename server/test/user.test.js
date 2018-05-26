const user = require('../Models/userModel')

test('getUsers', () => {
  user.getUsers(result => expect(result).toBeDefined())
});

test('getUsersByEmail return a user object with properties', ()=> {
  user.getUserByEmail(user => expect(user.username).toBeDefined())
});
