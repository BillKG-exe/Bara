const thousands = 1000;
const hundred_thousand = 100000;
const millions = 1000000;


function convertSalary(val) {
    if(val > hundred_thousand && val < millions) {
      return (val / thousands).toFixed(0) + "K";
    } else if (val > millions) {
      return (val / millions).toFixed(0) + "M";
    } else {
      return val;
    }
}

module.exports = convertSalary;