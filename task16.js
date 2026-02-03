// Map - Maps and sets that are used for the keyed value structure
// Map basicaly used any data type of keyed value

// In Map we can set the value one by one

// create the map instance

const map = new Map();

// set the map value

map.set("name", "Aman"); // sting value (stored string value )
map.set(21, "age"); // number value ( numerical value)
map.set(true, "isAdmin"); // boolean value

// get the map value

console.log(map.get("name"));

console.log(map.size); // returns the seize of the map , what's the size of the map , use only as thaat normal , not as the function

// Iterations over the Map keys

for (let dataKeys of map.keys()) {
  console.log(dataKeys); // returns the keys of the map ( iterate over the element of the keys )
}


// Itertion over the map values 

for (let dataKeys of map.values()) {
  console.log(dataKeys); 
}


// Iteration over the map whole keys and the values ( entries )

for (let dataKeys of map) {
  console.log(dataKeys); 
}