export interface Muscle {
    id:number;
    name_en:string;
    name:string;
}

export interface Options{

    label:string,
    value: string
    id: number
  }

export interface MuscleResponse{
    count:string
    results: Muscle[] | Exercice[]

}

export interface Exercice{
    description:string;  
}

