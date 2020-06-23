
exports.up = async function(knex) {
    await knex.schema.createTable("cars", table => {
        table.increments("id");
        table.string("vin").notNull().unique();
        table.integer("make").notNull();
        table.text("model").notNull().unique();
        table.float("mileage").notNull();
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars");
};
