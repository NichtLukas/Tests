export interface Human{
    uuid:string,
    name:string,
    age:number,
}

export interface HumanCreate {
    name: string,
    age: number,
}

//Naming Uppercase?
export const DEFAULT_HUMAN_CREATE:HumanCreate = {
    name: "Max Mustermann",
    age: 18,
}

export const DEFAULT_HUMAN:Human = {
    uuid: "af7c1fe6-d669-414e-b066-e9733f0de7a8",
    name: "Max Mustermann",
    age: 18,
}

