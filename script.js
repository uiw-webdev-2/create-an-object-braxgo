const firstName = "Brax";
const lastName = "Gonzalez";
const ssn = 1234567;

console.log(`<p>${firstName} ${lastName} has a social ${ssn}</p>`);


/**
 * Create a Box object.
 */

 const box = {
    name: "Amazon Box", //separated by comma
    volume: 50,
    color: "Brown", //only contain letters, digits, dollar signs, underscore
    pocketNum: 20,
    boxDimensions: { //camelCase property names avoid issues
      length: 12,
      width: 12,
    },  
  };
  

  console.log("The box object:", box);
  console.log("The pocketNum value:", box.pocketNum); //dot notation - most common
  console.log("The boxLength Left value:", box.boxLength.length);

  console.log("The pocketNum value:", box["pocketNum"]); //bracket notation - need to pass variable or property with non-standard characters
  var query = "pocketNum";
  console.log("The pocketNum value:", box[query]);