// Define a higher-order function 'userLogs' that takes a 'userName' parameter
// and returns a function that takes a 'message' parameter and logs to the console
const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);

// Call 'userLogs' with the argument "grandpa23"
// This returns a function that is assigned to the variable 'log'
const log = userLogs("grandpa23");

// Call the returned function with the argument "attempted to load 20 fake members"
// This logs "grandpa23 -> attempted to load 20 fake members" to the console
log("attempted to load 20 fake members");

// Define a function 'getFakeMembers' that returns a Promise
// This function makes an API request to fetch fake members
const getFakeMembers = (count) =>
  new Promise((resolves, reject) => {
    const api = `https:/api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    // Set up the XMLHttpRequest to make the API request
    request.open("GET", api);
    request.onload = () =>
      // If the request is successful, resolve the Promise with the parsed response
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : // If there's an error, reject the Promise with an error message
          reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    // Send the request
    request.send();
  });

// Call 'getFakeMembers' with an argument of 20
// Use the 'then' method to handle the resolved and rejected states of the Promise
getFakeMembers(20).then(
  // If the Promise is resolved, log a success message using the 'log' function
  (members) => log(`successfully loaded ${members.length} members`),
  // If the Promise is rejected, log an error message using the 'log' function
  (error) => log("encountered an error loading members")
);
