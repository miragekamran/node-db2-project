
exports.seed = async function (knex) {
  // clear out our table
  // truncate does more than .del(), like resetting the autoincrementing ID
  await knex("cars").truncate()

  await knex("cars").insert([
      {
          vin: "BC12332124",
          make: "Toyota",
          model: "RAV 4",
          mileage: "344433.43"
      },
      {
          vin: "NV43443434",
          make: "Toyota",
          model: "Camry",
          mileage: "35543.53"
      },
      {
          vin: "JJK43433343",
          make: "Jeep",
          model: "Sport",
          mileage: "44303.21"
      }
  ]);
};
