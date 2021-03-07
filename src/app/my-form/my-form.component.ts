import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:['',Validators.required],
      phoneNo: [''],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      postalAddress:['',Validators.required],
      comment:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  submitForm() {
    alert(JSON.stringify(this.form.value))
  }

}
