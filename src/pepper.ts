import * as _ from 'lodash'

export const compare = (oldObjects, newObjects) : void => {
    try {
        let updated = []
        let newRecords = []

        let oldMap: Map<string, Object> = convertArrayToMap(oldObjects)

        for (let obj of newObjects) {
            if (oldMap.has(obj.id)) {
                if (!_.isEqual(oldMap.get(obj.id), obj)) {
                    updated.push(obj)
                }
                oldMap.delete(obj.id)
            } else if (!oldMap.has(obj.id)) {
                newRecords.push(obj)
            }
        }

        console.info(`\nNew:\n ${JSON.stringify(newRecords)}`)
        console.info(`\nRemoved:\n ${JSON.stringify([...oldMap.values()])}`)
        console.info(`\nUpdated:\n ${JSON.stringify(updated)}`)
    } catch (e) {
        console.error(`e.message: ${e.message}`)
    }
}

function convertArrayToMap(arr) : Map <string, Object>{
    let map = new Map()
    arr.forEach((value) => {
            map.set(value.id, value)
        }
    )
    return map
}


let oldObjects = [
    {id: '1', name: 'Tom Bird', job: 'Lifeguard', age: 30, salary: 82},
    {id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68},
    {id: '3', name: 'Moni Levi', job: 'VP R&D', age: 44, salary: 700},
    {id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100}
];


let newObjects = [
    {id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120},
    {id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68},
    {id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210},
    {id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630}
];


console.log(compare(oldObjects, newObjects));


/* Expected Result
{
new: [
  { id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630 }
 ],
removed: [
  { id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100 }
 ],
updated: [
  { id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210 },
  { id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120 }
]
}

*/