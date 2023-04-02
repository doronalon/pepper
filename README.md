# # pepper

Version:
  node: v16.13.1
  npm: 8.19.2

Running by commands:
  npm i
  npm  run build
  npm run test
  npm run start



#Task
build a compare function which get two parameters, oldObjects and newObjects

E.G:

let oldObjects = [
{ id: '1', name: 'Tom Bird', job: 'Lifeguard', age: 30, salary: 82 },
{ id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68 },
{ id: '3', name: 'Moni Levi', job: 'VP R&D', age: 44, salary: 700 },
{ id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100 }
];

let newObjects = [
{ id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120 },
{ id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68 },
{ id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210 },
{ id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630 }
];

Compare between two object and print the new records, remove records and update records

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