exports.up = function(knex) {
	return knex.schema.createTable('dogs', function(tbl) {
		tbl.increments('id').primary();
		tbl.integer('kennel_id').unsigned().notNullable().references('id').inTable('kennels');
		tbl.string('bio', 255);
		tbl.integer('age');
		tbl.string('size', 100);
		tbl.boolean('male');
		tbl.integer('price');
		tbl.string('img_url', 255);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('dogs');
};
