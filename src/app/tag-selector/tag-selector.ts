import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-selector',
  imports: [CommonModule],
  templateUrl: './tag-selector.html',
  styleUrl: './tag-selector.css',
})
export class TagSelector {
  tropes = [
    'Enemies to Lovers',
    'Found Family',
    'Grumpy x Sunshine',
    'Chosen One',
    'Antihero',
    'Slow Burn',
    'Secret Identity',
    'Time Travel',
    'Heist Crew',
    'Fake Dating',
  ];

  selectedTropes: string[] = [];

  toggleTrope(trope: string) {
    if (this.selectedTropes.includes(trope)) {
      this.selectedTropes = this.selectedTropes.filter((t) => t !== trope);
    } else {
      this.selectedTropes.push(trope);
    }
  }
}
