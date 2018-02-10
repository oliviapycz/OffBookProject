const user = require('../Models/userModel')

test('getUsers', () => {
  user.getUsers(result => expect(result).toBeDefined())
});

// test('noExists return false', () => {
//   return user.noExists("do@do.do").then(result => expect(result).toBe(false));
// })
//
// test("noExists return true", () => {
//   return user.noExists("coucou@do.do").then(result => expect(result).toBe(true));
// });

test('getUsersByEmail return a user object with properties', ()=> {
  user.getUsersByEmail(user => expect(user.username).toBeDefined())
});
