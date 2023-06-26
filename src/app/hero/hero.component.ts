import { Component, Input } from '@angular/core';
import { TypeFilmsI } from '../models/interfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() topGallery!: TypeFilmsI
}
