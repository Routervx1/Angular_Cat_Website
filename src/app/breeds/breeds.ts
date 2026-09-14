import { Component, signal } from '@angular/core';

import { BREEDS, Breed } from '../shared/cat-data';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.html',
  styleUrl: './breeds.css',
})
export class Breeds {
  protected readonly breeds: Breed[] = BREEDS;
  protected readonly expanded = signal<string | null>(null);

  toggle(name: string): void {
    this.expanded.update((current) => (current === name ? null : name));
  }
}
