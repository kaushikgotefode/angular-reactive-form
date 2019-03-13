import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
  registrationForm: any;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['kaushikgotefode@gmail.com'],
      password: [''],
      address: this.fb.group({
        line1: [''],
        line2: [''],
        city: [''],
        state: ['Karnataka'],
      })
    });
  }
  register() {
    console.log(this.registrationForm.value);
  }
}
