import { Component } from '@angular/core';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css']
})
export class TextListComponent {
  texts: string[] = [
    'holamundo',
    'transformando textos',
    'mi nombre es sheila'];

}
