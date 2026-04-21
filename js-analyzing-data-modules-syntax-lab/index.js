// Import datejs so we can format dates
require('datejs');

// Define the combineUsers function
function combineUsers(...args) {
    // Step 1: Initialize the return object
    let combinedObject = {
        users: []
    };

    // Step 2: Loop through each array in args and merge them
    for (let arr of args) {
        combinedObject.users = [...combinedObject.users, ...arr];
    }

    // Step 3: Add today's date in M/d/yyyy format
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // Step 4: Return the object
    return combinedObject;
}

// Export the function so Jest can test it
module.exports = combineUsers;
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};