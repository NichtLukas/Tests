import { Human } from "../human";
import { v4 as uuidv4 } from 'uuid';

export const HUMAN_LIST_MOCK:Human[] = [
    {uuid:uuidv4(),name:"Lukas Bode",age:22},
    {uuid:uuidv4(),name:"Wilhelm Sauerwald",age:30},
    {uuid:uuidv4(),name:"Yannic Wetzel",age:31},
    {uuid:uuidv4(),name:"Lukas Walter",age:22},
]
