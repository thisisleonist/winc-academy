const functions = require("./functions.js");

test("Should be null", () => {
    expect(
        functions.isNull()
    ).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
    expect(
        functions.checkValue()
    ).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    expect.objectContaining(functions.createUser());
});

test('Should be under or equal to 1600', () => {
	const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBe(1600);
});

test('There is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});