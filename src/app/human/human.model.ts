import { FormControl } from "@angular/forms"

export interface Human{
    uuid:number,
    name:string,
    age:number,
}
export interface HumanApi{
    id:number,
    name:string,
    age:number,
}

export interface HumanCreate {
    name: string,
    age: number,
}

export interface HumanCreateForm {
    name: FormControl<string|null>
    age: FormControl<number|null>,

}

//Naming Uppercase?
export const DEFAULT_HUMAN_CREATE:HumanCreate = {
    name: "Max Mustermann",
    age: 18,
}

export const DEFAULT_HUMAN:Human = {
    uuid: 100,
    name: "Max Mustermann",
    age: 18,
}

