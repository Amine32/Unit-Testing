const { createPool } = require("mysql2/promise");
const order = require("../Task1/solution");

describe("Database Integration Test", () => {
    let connection;

    beforeEach(async() => {
        let createTableSQL = "CREATE TABLE `sql11484914`.`orders` ( `id` INT(2) NULL AUTO_INCREMENT , `input` VARCHAR(100) NULL , `output` VARCHAR(100) NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";

        connection = await createPool({
            host: "sql11.freemysqlhosting.net",
            user: "sql11484914",
            password: "Rm65meUv4H",
            port: 3306,
            database: "sql11484914",
        });
        console.log("Connected to database");

        await connection.query(createTableSQL);
    });

    it("Test CREATE and READ", async() => {
        try {
            let insertQueries = [];
            let inputs = ["од2ин Эт1о 4многих тесто5в из3", "4of Fo1r pe6ople g3ood th5e the2", "is2 Thi1s T4est 3a"];

            for (var i = 0; i < 3; i++) {
                let insertSQL = `INSERT INTO orders (id, input, output) VALUES (NULL, '${inputs[i]}', '${order(inputs[i])}');`;

                insertQueries.push(connection.query(insertSQL));
            }

            await Promise.all(insertQueries);

            const [rows, fields] = await connection.query("SELECT * FROM orders");

            expect(rows.length).toBe(3);
        } catch (error) {
            console.log(error);
            let dropTableSQL = "DROP TABLE IF EXISTS `orders`";
            await connection.query(dropTableSQL);
            await connection.end();
        }
    }, 6000);

    afterEach(async() => {
        let dropTableSQL = "DROP TABLE IF EXISTS `orders`";
        await connection.query(dropTableSQL);
        await connection.end();
    });
});