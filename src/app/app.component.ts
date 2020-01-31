import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show: boolean = false;
  public buttonName: any = 'Show';
  public buttonsName: any = 'Show';
  public shows: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  emailPattern = "([a-zA-Z0-9]*)([.]?)([a-zA-Z0-9]*)([@]{1})([a-zA-Z-]*)([.]+)([a-zA-Z]*)([.]?)([a-zA-Z]*)";
  mobilepattern = "^[6-9][0-9]{9}$";
  name = "^[a-zA-Z]*$";
  date = new Date().toISOString().slice(0, 10);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //debugger;
    //   var firstname= this.registerForm.controls.firstName.value;
    //   var lastName= this.registerForm.controls.lastName.value;
    //   var email= this.registerForm.controls.email.value;
    //   var mobilenumber= this.registerForm.controls.mobilenumber.value;
    //   var dob= this.registerForm.controls.dob.value;
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.name)]],
      lastName: ['', [Validators.required, Validators.pattern(this.name)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      mobilenumber: ['', [Validators.required, Validators.pattern(this.mobilepattern)]],
      dob: ['', Validators.required]
    });
  }
  Register(regForm: any) {
    debugger;
    var firstname = regForm.controls.firstname.value;
    var lastname = regForm.controls.lastname.value;
    var email = regForm.controls.email.value;
    console.log(regForm);

  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)')
    console.log(this.registerForm);
  }
  clickEvent() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  clickEvents() {
    this.shows = !this.shows;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.shows)
      this.buttonsName = "Hide";
    else
      this.buttonsName = "Show";
  }
}