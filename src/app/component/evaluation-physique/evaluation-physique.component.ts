import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './service/api.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-evaluation-physique',
  templateUrl: './evaluation-physique.component.html',
  styleUrl: './evaluation-physique.component.css'
})

export class EvaluationPhysiqueComponent implements OnInit {
  evaluationphysiqueForm!: FormGroup;
  apiResponse: any;
  constructor(private fb: FormBuilder,private service:ApiService,private authService:AuthService) { }

  ngOnInit(): void {
    this.evaluationphysiqueForm = this.fb.group({
      age: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      gender: ['', Validators.required],
      activity: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.evaluationphysiqueForm.valid) {
      console.log(this.evaluationphysiqueForm.value);
      const payload = {
        age: this.evaluationphysiqueForm.value.age,
        gender: this.evaluationphysiqueForm.value.gender,
        height: this.evaluationphysiqueForm.value.height,
        weight: this.evaluationphysiqueForm.value.weight,
        activitylevel: this.evaluationphysiqueForm.value.activity,
        goal: 'mildlose'
      };
      this.service.calculateMacro(payload).subscribe((res:any)=>{
        if (res.status_code == 200){
          this.apiResponse = res.data
        }
        console.log(res)
      })
     
    } else {
      
      this.evaluationphysiqueForm.markAllAsTouched();
    }
  }
  public logout(){
    this.authService.logout()
  }
}