db.createUser({
  user: 'kyra',
  pwd: 'Chy0902',
  roles: [{ role: 'readWrite', db: 'mission5' }],
});

db.messages.insertMany([
  {
    _id: '1',
    message: 'Hello, world!',
  },
  {
    _id: '2',
    message: 'Welcome to my app!',
  },
  {
    _id: '3',
    message: 'This is a test message.',
  },
]);
