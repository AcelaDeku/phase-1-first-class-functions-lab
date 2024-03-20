// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}


function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
}

const drivers = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5'];

console.log(returnFirstTwoDrivers(drivers)); 
console.log(returnLastTwoDrivers(drivers)); 
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
console.log(createFareMultiplier(2)(10));
console.log(fareDoubler(10)); 
console.log(fareTripler(10)); 
