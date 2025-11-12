import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagSelector } from './tag-selector/tag-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagSelector],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('book-finder');
}
