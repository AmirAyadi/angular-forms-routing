import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: '',
    gender: '',
  };

  submitForm(form: any): void {
    if (form.valid) {
      console.log('The Form Data is :', this.userDetails);
    }
  }
}
