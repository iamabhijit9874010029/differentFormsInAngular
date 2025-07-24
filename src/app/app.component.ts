import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // //reactive form using form builder
  // userForm!: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.userForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     age: ['', [Validators.required, Validators.min(18)]]
  //   });
  // }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     console.log(this.userForm.value);
  //   } else {
  //     this.userForm.markAllAsTouched();
  //   }
  // }


  // //reactive form using form control
  // userForm!: FormGroup;

  // ngOnInit(): void {
  //   this.userForm = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     age: new FormControl('', [Validators.required, Validators.min(18)])
  //   });
  // }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     console.log(this.userForm.value);
  //   } else {
  //     this.userForm.markAllAsTouched();
  //   }
  // }



  //template driven form
  user = {
    name: '',
    email: '',
    age: null
  };


  //without empty form validation at initial submit
  // onSubmit(form: any) {
  //   if (form.valid) {
  //     console.log(this.user);
  //   } else {
  //     console.log('Form Invalid');
  //   }
  // }

  //with empty form validation at initial submit
  @ViewChild('userForm') form!: NgForm;

  onSubmit() {
    if (this.form.invalid) {
      this.markAllFieldsTouched(this.form);
      return;
    }
    console.log(this.user);
  }

  markAllFieldsTouched(form: NgForm) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  ngOnInit(): void {

  }
}
