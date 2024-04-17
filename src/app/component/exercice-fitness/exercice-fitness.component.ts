import { Component, OnInit } from '@angular/core';;
import { Exercice, Muscle, Options} from './services/exercice_fitness_interfaces';
import { Navbar2Component } from '../navbar2/navbar2.component';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-exercice-fitness',
  templateUrl: './exercice-fitness.component.html',
  styleUrl: './exercice-fitness.component.css'
})

export class ExerciceFitnessComponent implements OnInit {
  public muscleListe:Muscle[]=[]
  public MuscleOption:Options[]=[]
  public selectedMuscle:Options={label:"test",value : "test", id: 0}
  public exercice:Exercice={description:""}
  public exerciceListe:Exercice[]=[]
  public selectedPeriod: string = '';
  public isButtonClicked: boolean = false;
  public phraseAffichee: string = '';

  constructor(
  public apiService:ApiService

  ){}

  ngOnInit(){this.getMuscleListe(), this.selectedMuscle }



  public getMuscleListe(){
    this.apiService.getMuscleListe().subscribe(a=>{
      this.muscleListe = <Muscle[]>a.results;
      
      // Filtrer les muscles avec un label non vide
      this.muscleListe = this.muscleListe.filter(muscle => muscle.name_en.trim() !== '');
  
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
    if (this.selectedPeriod === 'one') {
      this.phraseAffichee = 'Pratiquez 1 fois par jour pendant 15 minutes pour une semaine cela :';
    } else if (this.selectedPeriod === 'two') {
      this.phraseAffichee = 'Pratiquez 1 fois tous les deux jours pendant 30 minutes pour les deux semaines cela :';
    }

    this.isButtonClicked = true;
  }
  

  public getselectedPeriod(selectedPeriod: string): string {
    this.isButtonClicked = false;
    return selectedPeriod; 
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

