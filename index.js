// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let dis
    if (someValue >= 42){
        dis = someValue - 42
    }
    else{
        dis = 42 - someValue
    }
    return dis
  }

  function distanceFromHqInFeet(someValue) {
    let footses = distanceFromHqInBlocks(someValue) * 264;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return footses
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let feetses = Math.abs(start - destination)
    return feetses * 264
  }

   function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    //400 free, 400-2000 2c/ft -400, 2000-2500 flat fee, 2500+ nope
    let fare = distanceTravelledInFeet(start, destination)
    if(fare <= 400){
        return 0
    }
    else if(fare > 400 && fare < 2000){
        let cost = (fare - 400) * .02
        return cost
    }
    else if(fare >= 2000 && fare < 2500){
        return 25
    }
    else if(fare >= 2500){
        return "cannot travel that far"
    }
  }