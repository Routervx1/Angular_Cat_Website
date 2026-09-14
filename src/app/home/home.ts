import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CAT_FACTS } from '../shared/cat-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly facts = CAT_FACTS;
  protected readonly factIndex = signal(0);
  protected readonly currentFact = signal(this.facts[0]);

  nextFact(): void {
    const next = (this.factIndex() + 1) % this.facts.length;
    this.factIndex.set(next);
    this.currentFact.set(this.facts[next]);
  }
}
