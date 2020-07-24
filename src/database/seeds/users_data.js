
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "tom@hot.com", password: '12345'},
        {email: "rafa@yahoo.com", password: '952812'},
        {email: "nelson@gmail.com", password: '54321'}
      ]);
    });
};
