const user = require('../Models/userModel')

test('getUsers', () => {
  user.getUsers(result => expect(result).toBeDefined())
});

test('getUserById return a user object with properties', ()=> {
  user.getUserById(user => expect(user.id_user).toBeDefined())
});

test('getUsernames return a user object with properties', ()=> {
  user.getUsernames(user => expect(user.username).toBeDefined())
});

test('getUserByUsername return a user object with properties', ()=> {
  user.getUserByUsername(user => expect(user.username).toBeDefined())
  user.getUserByUsername(user => expect(user.id_user).toBeDefined())
});

test('getEmails return a user object with properties', ()=> {
  user.getEmails(user => expect(user.email_user).toBeDefined())
});

test('getUsersByEmail return a user object with properties', ()=> {
  user.getUserByEmail(user => expect(user.username).toBeDefined())
});

test('addUser return a user object with properties', ()=> {
  user.addUser(user => expect(user.username).toBeDefined())
});
