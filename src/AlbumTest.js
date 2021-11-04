// https://stackabuse.com/reading-and-writing-json-files-with-node-js/
// https://stackoverflow.com/a/46190552
const fs = require("fs");

let data = fs.readFileSync("./test/albums.json");
let albums = JSON.parse(data.toString());
console.log(`albums: ${albums}`);

data = fs.readFileSync("./test/users.json");
let users = JSON.parse(data.toString());
console.log(`albums: ${users}`);

// function getMyAlbums(user) {
//   const drillUserId = ({ myId: album }) => {
//     return album.id;
//   };
//   const predicate = (user) => {
//     return (album) => {
//       return user.id === drillUserId(album);
//     };
//   };
//   return albums.filter(predicate);
// }

const drillUserId = ({ myId: album }) => {
  return album.id;
};
const predicate = (user) => {
  return (album) => {
    return user.id === drillUserId(album);
  };
};
