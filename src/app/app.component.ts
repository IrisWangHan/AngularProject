import { serverRoutes } from './app.routes.server';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; // 匯入 FooterComponent
import { MainComponent } from './main/main.component'; // 匯入 FooterComponent
import { FooterComponent } from './footer/footer.component'; // 匯入 FooterComponent
@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent], //引入才可以使用ngFor
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basic';

}
