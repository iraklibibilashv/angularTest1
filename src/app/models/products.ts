export class Products{
    id! : number;
    name? : string;
    price! : number;
    image? : string;
    vegeterian? : boolean;
    nuts? : boolean;
    spiciness! : number;
    categoryId? : number;
    
    
}
export class Buttons {
    id! : number;
    name? : string;
}
export class Tasks {
    id? : number;
    title! : string;
    completed? : boolean;
    priority? : number;
    category? : string;
    value! : number;
}
export class Select {
  name?: string;
  value!: number;
}