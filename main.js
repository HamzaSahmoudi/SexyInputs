import Cleave from "./../SexyInputs/node_modules/cleave.js/dist/cleave-esm.min.js";

var cleaveName = new Cleave("#name", {
	prefix: "STUDENT-",
	delimiter: "-",
	blocks: [7, 3, 3, 4],
	uppercase: true,
});

var cleaveDOB = new Cleave("#DOB", {
	date: true,
	datePattern: ["d", "m", "Y"],
});

var cleaveRRN = new Cleave("#RRN", {
	delimiters: [".", ".", "-", "."],
	blocks: [2, 2, 2, 3, 2],
	numericOnly: true,
});

var cleaveAge = new Cleave("#age", {
	numeral: true,
	numeralPositiveOnly: true,
});

var cleavePhone = new Cleave("#phone", {
	phone: true,
	phoneRegionCode: "BE +32",
});

console.log("Hello from main.js");
