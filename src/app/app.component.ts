import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-forms-routing';
}
