import { Component, Input } from '@angular/core';
import { TypeFilmsI } from '../models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input() filmsGallery!: TypeFilmsI
}
