import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo:string = 'fintech CRUD';
  nome:string = "Ana";

}
