export type StateTypeReducer = {
    id: number
    name: string
    age: number
}

type ActionType = {
    type: string
    payload: any
}

export const hwReducer = (state: Array<StateTypeReducer>, action: ActionType): Array<StateTypeReducer> => {
    switch (action.type){
        case "SORT":{
            const copyState = [...state];
            if (action.payload === "up"){
                copyState.sort((a, b) => a.age - b.age)
            }
            if (action.payload === "down"){
                copyState.sort( (a, b) => b.age - a.age)
            }
            return copyState;
        }
        case "CHECK": {
            return state.filter(man => man.age > action.payload)
        }
    }
        return [];
    };

export const sortUpAc = (payload: any) => {
    return {type: "SORT", payload: "up"}
}
export const sortDownAc = (payload: any) => {
    return {type: "SORT", payload: "down"}
}
export const filter18YearsAC = (payload: any) => {
    return {type: "CHECK", payload}
}