import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.html',
  styleUrl: './cat-card.css',
})
export class CatCard {
  readonly imageUrl = input.required<string>();
  readonly caption = input('Good cat');

  protected readonly liked = signal(false);

  toggleLike(): void {
    this.liked.update((value) => !value);
  }
}
