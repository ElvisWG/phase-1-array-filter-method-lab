// Code your solution here
function findMatching (drivers, data) {
 return drivers.filter(
    (driverName) => driverName.toLowerCase() === data.toLowerCase()
 );
}
function fuzzyMatch(drivers, data) {
    return drivers.filter((driverName) => driverName.startsWith(data));
}
function matchName(drivers, data) {
    return drivers.filter(driverName => driverName.name === data)
}