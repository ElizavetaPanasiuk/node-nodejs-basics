// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
const parseArgs = () => {
    console.log(process.argv.slice(2).map((el, id, arr) => `${el} is ${arr[id + 1]}`).filter((el, id) => !(id % 2)).join(', '));
};

parseArgs();