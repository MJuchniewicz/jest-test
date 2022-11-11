const fetch = require("node-fetch");
const swapi = require("./script2");

jest.setTimeout(20000);

// it("calls swapi to get people", async () => {
//   expect.assertions(2);
//   const data = await swapi.getPeople(fetch);
//   expect(data.count).toEqual(82);
//   expect(data.results.length).toBeGreaterThan(9);
// });

// it("calls swapi to get people", () => {
//   expect.assertions(1);
//   return swapi.getPeoplePromise(fetch).then((data) => {
//     expect(data.count).toEqual(82);
//   });
// });

it("getPeople returns count and results", () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 5]
      })
    }));
    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("http://swapi.dev/api/people/");
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(4);
    })
});
