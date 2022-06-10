// Code your solution here
function findMatching(arrayOfDrivers, name){
    return arrayOfDrivers.filter((item) => 
        item.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
}

function fuzzyMatch(listOfDrivers, character){
    return listOfDrivers.filter((driver) => driver.toLowerCase().indexOf(character.toLowerCase()) === 0
    )
}

function matchName(listOfDrivers, name){
    return listOfDrivers.filter((driver) => driver.name === name
    )

}

