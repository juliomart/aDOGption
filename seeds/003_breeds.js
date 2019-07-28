const faker = require('faker');

exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('breeds').truncate().then(function() {
		// Inserts seed entries
		return knex('breeds').insert([
			{
				name: faker.commerce.productName()
			},
			{
				name: faker.commerce.productName()
			},
			{
				name: faker.commerce.productName()
			},
			{
				name: faker.commerce.productName()
			},
			{
				name: faker.commerce.productName()
			}
		]);
	});
};
