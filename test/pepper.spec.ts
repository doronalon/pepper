import {compare} from "../src/pepper"

/*
For testing a void function we have mocking the behavior of the function

 */

let oldObjects: Object = [
    {id: '1', name: 'Tom Bird', job: 'Lifeguard', age: 30, salary: 82},
    {id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68},
    {id: '3', name: 'Moni Levi', job: 'VP R&D', age: 44, salary: 700},
    {id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100}
];


let newObjects: Object = [
    {id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120},
    {id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68},
    {id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210},
    {id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630}
];

let infoMock


describe('{Compare function}', () => {

   beforeEach(() => {
       infoMock = jest.spyOn(console, "info").mockImplementation((element) => {
           console.log(element)
           return element
       });
   })

    afterEach(()=> {
        jest.clearAllMocks()
    })


    it('print developer1', () => {
        compare(oldObjects, newObjects)
        // expect(infoMock).toBeCalledTimes(3)
        expect(infoMock).nthCalledWith(1, '\nNew:\n [{\"id\":\"4\",\"name\":\"Jacob Brener\",\"job\":\"CEO\",\"age\":44,\"salary\":630}]')
        expect(infoMock).nthCalledWith(2, '\nRemoved:\n [{"id":"5","name":"Tal David","job":"Devops","age":20,"salary":100}]')
        expect(infoMock).nthCalledWith(3, '\nUpdated:\n [{\"id\":\"1\",\"name\":\"Tom Bird\",\"job\":\"Waiter\",\"age\":31,\"salary\":120},{\"id\":\"3\",\"name\":\"Moni Levi\",\"job\":\"Architect\",\"age\":44,\"salary\":210}]')

    })




})
