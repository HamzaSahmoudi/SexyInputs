import Cleave from "./node_modules/cleave.js/dist/cleave-esm.min.js";

let cleaveName = new Cleave("#name", {
	prefix: "STUDENT",
	delimiter: "-",
	blocks: [7, 99],
	uppercase: true,
});

let cleaveDOB = new Cleave("#DOB", {
	date: true,
	datePattern: ["d", "m", "Y"],
});

let cleaveRRN = new Cleave("#RRN", {
	delimiters: [".", ".", "-", "."],
	blocks: [2, 2, 2, 3, 2],
	numericOnly: true,
});

let cleaveAge = new Cleave("#age", {
	numeral: true,
	numeralPositiveOnly: true,
});

let cleavePhone = new Cleave("#phone", {
	phone: true,
	phoneRegionCode: "BE",
});

console.log("Hello from main.js");
