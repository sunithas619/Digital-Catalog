import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  submitted = false;
  oppoSuits: any = ['Filter', 'Test Catalogue', 'Dev Catalogue', 'Search Catalogue', 'Digital Catalogue']

  constructor(public fb: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  oppoSuitsForm = this.fb.group({
    name: ['', [Validators.required]]
  })

  changeSuit(e: { target: { value: any; }; }) {
    this.oppoSuitsForm.get('name')?.setValue(e.target.value , {
      onlySelf: true
    })
  }

  /* Select Dropdown error handling */
  public handleError = (controlName: string, errorName: string) => {
    return this.oppoSuitsForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }

}