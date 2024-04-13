import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Exercice, Muscle, Options } from '../../exercice_fitness_interfaces';



@Component({
  selector: 'app-exercice-fitness',
  templateUrl: './exercice-fitness.component.html',
  styleUrl: './exercice-fitness.component.css'
})

export class ExerciceFitnessComponent implements OnInit {
  public muscleListe:Muscle[]=[]
  public MuscleOption:Options[]= [{label:"test",value : "test", id: 0}]
  public selectedMuscle:Options={label:"test",value : "test", id: 0}
  public exercice:Exercice={description:""}
  public exerciceListe:Exercice[]=[]
  
  constructor(
  public apiService:ApiService

  ){}

  ngOnInit(){this.getMuscleListe(), this.selectedMuscle }



  public getMuscleListe(){
    this.apiService.getMuscleListe().subscribe(a=>{
      this.muscleListe = <Muscle[]>a.results;
      
      this.muscleListe.map((muscle)=>{
        this.MuscleOption.push({
          label:muscle.name_en,
          value:muscle.name,
          id: muscle.id
        })
      })
      console.log(this.MuscleOption)
     });
    
  }
 
  public search(){
    console.log(this.selectedMuscle)
    this.getMuscle_exercice(this.selectedMuscle)
  } 


  public getMuscle_exercice(selectedMuscle:Options){
      this.apiService.getMuscleExercice(this.selectedMuscle.id).subscribe(a=>{
      
          this.exerciceListe=<Exercice[]>a.results;
          console.log(<Exercice[]>a.results)
          console.log(this.exerciceListe)
          if (this.exerciceListe.length > 1) {
        
            this.exercice.description = this.exerciceListe[1].description;
            console.log(this.exercice.description);
          }
      })


  }
  

}

