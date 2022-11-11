const googleDatabase = [
  "cats.com",
  "souprecepies.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats2.com",
  "myfavouritecats3.com",
  ,
  "myfavouritecats.com",
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter((website) => {
      return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0, 3) : matches
}



console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch