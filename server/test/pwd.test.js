const { encode, compare } = require('../auth/pwd')

test('PWD encode', () => {
  return encode('motdepasse')
  .then( hash => expect(hash).toBeDefined() )
})

test("PWD encode empty password generate error", () => {
  return encode()
  .then( t => console.log('t : ', t))
  .catch(err => {
    return expect(err).toBeDefined()
  });
});

test('PWD compare true', async () => {
  const hash = await encode('motdepasse')
  const isMatch = await compare('motdepasse', hash)
  expect(isMatch).toBe(true)
})

test("PWD compare false", () => {
  return encode("motdepasse")
    .then(hash => compare("autremotdepasse", hash))
    .then(isMatch => expect(isMatch).toBe(false))
});
