
const fullPath = window.location.pathname; // Returns: "/pages/registration.html"
const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1);
// Output: "registration.html"
console.log(filename)