function twoIndicesSumEqualsTarget(input,target) {

        const map = new Map();
        map.set(input[0], 0);

        for (let i = 1; i < input.length; i++) {
            //if found returns array with two indices
            if (map.has(target - input[i]))
                return new Array(map.get(target - input[i]), i);
            else
            //pushes to the map
                map.set(input[i], i);
        }
        //if not found
        return [-1,-1];
    }

const myArray=[2,4,5,7,11]
const target=16


let indices=twoIndicesSumEqualsTarget(myArray,target)
console.log(indices.toString())


