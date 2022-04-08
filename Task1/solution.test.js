const order = require('./solution')

describe('order input control', () => {
    it.each([
        ["test"],
        ["."],
        ["wh1at tes1t2"],
        ["tes12t"],
    ])(
        'should only allow single digited words',
        (string) => {
            expect(() => {
                order(string);
            }).toThrow("Word must contain a single digit");
        }
    );

    it.each([
        ["tes0t"],
        ["wha1t tes0t"],
    ])(
        'should only accept digits from 1 to 9',
        (string) => {
            expect(() => {
                order(string);
            }).toThrow("Word can only have digits from 1 to 9");
        }
    );

    it.each([
        ["tes2t"],
        ["a1 ver2y 4useful sent5ence"],
    ])(
        'should only accept consecutive digits starting from 1',
        (string) => {
            expect(() => {
                order(string);
            }).toThrow("The words in the input String will only contain valid consecutive numbers starting with 1.");
        }
    );
});

describe('order output control', () => {
    it.each([
        ["од2ин Эт1о 4многих тесто5в из3", "Эт1о од2ин из3 4многих тесто5в"],
        ["frien3ds 1We ea5t pi6e ar2e let's4", "1We ar2e frien3ds let's4 ea5t pi6e"]
    ])(
        'should sort given string numerically',
        (input, result) => {
            expect(order(input)).toStrictEqual(result);
        }
    );

    test('empty input should return empty string', () => {
        expect(order("")).toStrictEqual("");
    });
});