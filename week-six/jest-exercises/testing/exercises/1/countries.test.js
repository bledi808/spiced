const countries = require("./countries");
const { find } = require("./countries");

// find(val) takes a a string as an arg; returns an array of up to 4 countries that begin with the string

// When find is passed an empty string, it returns an empty array

test("find() returns empty array when passes an empty string as an arg", () => {
    const result = find("");
    expect(result.length).toBe(0);
});

// The array that it returns contains no more than four matches
test("returned array contains no more than 4 matches", () => {
    expect(find("a").length).toBeLessThanOrEqual(4);
});

// The search is case insensitive
test("the search is case insensitive", () => {
    expect(find("A").length).toBeGreaterThan(0);
    expect(find("GREECE")).toContain("Greece");
});

// If there are no matching countries, an empty array is returned
test("if no matching countries, empty array is returned", () => {
    expect(find("xyx")).toEqual([]);
});
