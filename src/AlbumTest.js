// https://stackabuse.com/reading-and-writing-json-files-with-node-js/
// https://stackoverflow.com/a/46190552
const fs = require("fs");

let data = fs.readFileSync("./test/albums.json");
const albums = JSON.parse(data.toString());
console.log(`albums: ${albums}`);

data = fs.readFileSync("./test/users.json");
const users = JSON.parse(data.toString());
console.log(`users: ${users}`);

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

//To test this:
//let a1 = albums[0]
// => { userId: 1, id: 1, title: 'quidem molestiae enim' }
//NOT AS DEEPLY WRAPPED AS WE THOUGHT! :-)
const drillUserId = ({ myId: album }) => {
  return album.id;
};


// const predicate = (user) => {
//   return (album) => {
//     return user.id === drillUserId(album);
//   };
// };

const predicate = (user) => {
  return (album) => {
    return user.id === album.userId;
  };
};

//from src folder, run node.
//.load AlbumTest.js

//use case for above:
//albums.filter(predicate(aUser)(album))
