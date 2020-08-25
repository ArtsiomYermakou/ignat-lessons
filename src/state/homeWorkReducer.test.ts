import {filter18YearsAC, hwReducer, sortDownAc, sortUpAc, StateType} from "./homeWorkReducer";


let startState = [] as Array<StateType>
beforeEach( () => {
     startState = [
        {id: 1, name: "Artem", age: 21},
        {id: 2, name: "Ksusha", age: 20},
        {id: 3, name: "Misha", age: 4},
        {id: 4, name: "Sasha", age: 74},
        {id: 5, name: "Igor", age: 16},
    ]
})

test("sort people UP", () => {
    const action = sortUpAc("up");
    const endState = hwReducer(startState, action);

    expect(startState[0].age).toBe(21);
    expect(endState[0].age).toBe(4);
    expect(endState[4].age).toBe(74);
})

test("sort people DOWN", () => {
    const action = sortDownAc("down");
    const endState = hwReducer(startState, action);

    expect(startState[0].age).toBe(21);
    expect(endState[0].age).toBe(74);
    expect(endState[4].age).toBe(4);
})
test("filter people 18 years old", () => {
    const action = filter18YearsAC(18);
    const endState = hwReducer(startState, action);

    expect(startState[0].age).toBe(21);
    expect(endState[2].age).toBe(74);
    expect(endState.length).toBe(3);
})

