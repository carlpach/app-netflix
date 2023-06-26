import { Component } from '@angular/core';
import { TypeFilmsI } from "./models/interfaces.js";
import { comedyFilms, actionFilms, top5 } from "./data/films";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-netflix';
  
  comedyFilms: TypeFilmsI = comedyFilms;
  actionFilms: TypeFilmsI = actionFilms;
  top5: TypeFilmsI = top5;

  isDark : boolean = true;

  handleClick = (): void => {
    this.isDark = this.isDark? false : true;
    console.log(this.isDark);
    
  }

}
