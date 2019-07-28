const faker = require('faker');

exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('admins').truncate().then(function() {
		// Inserts seed entries
		return knex('admins').insert([
			{
				kennels_id: 1,
				username: faker.name.firstName(),
				password: faker.internet.password()
			},
			{
				kennels_id: 2,
				username: faker.name.firstName(),
				password: faker.internet.password()
			},
			{
				kennels_id: 3,
				username: faker.name.firstName(),
				password: faker.internet.password()
			}
		]);
	});
};
