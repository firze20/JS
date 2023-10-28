let schools = [
  {
    name: "Yorktown",
  },
  {
    name: "Washington & Liberty",
  },
  {
    name: "Wakefield",
  },
];

// const editName = (oldName, name, arr) =>
//     arr.map(item => {
//         if (item.name === oldName) {
//             return {
//                 ...item,
//                 name
//             }
//         } else {
//             return item
//         }
// //     });

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));

let updatedSchools = editName("Yorktown", "Cheesetown", schools);

console.log(updatedSchools[0]); // Cheesetown

console.log(schools[0]); // Yorktown


