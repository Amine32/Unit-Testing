const order = require('./solution')

test('should sort given string numerically', () => {
    expect(order("од2ин Эт1о 4многих тесто5в из3")).toStrictEqual("Эт1о од2ин из3 4многих тесто5в");
    expect(order("frien3ds 1We ea5t pi6e ar2e let's4")).toStrictEqual("1We ar2e frien3ds let's4 ea5t pi6e");
    expect(order("")).toStrictEqual(""); //пустой ввод должен возвращать пустую строку
});