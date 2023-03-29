interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }];

//functions

function findNameOfTallestMountain(array: Mountain[]) {
    let highestMountain = array[0];
    array.forEach(mountain => {
        if (mountain.height > highestMountain.height) {
            highestMountain = mountain;
        }
    });
    return highestMountain.name
}

const theHighestMountain = findNameOfTallestMountain(mountains)
console.log(theHighestMountain);

//export??