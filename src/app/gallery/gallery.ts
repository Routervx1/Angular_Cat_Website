import { Component, computed, signal } from '@angular/core';

import { CatCard } from './cat-card/cat-card';

interface GalleryCat {
  id: number;
  imageUrl: string;
  caption: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CatCard],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  private readonly captions = [
    'Sunbeam nap',
    'Box enthusiast',
    'Windowsill watcher',
    'Mid-stretch',
    'Curious paws',
    'Afternoon loaf',
    'Fresh from a zoomie',
    'Supervising dinner',
    'Blanket burrito',
  ];

  protected readonly cats = signal<GalleryCat[]>(this.buildBatch(0));
  protected readonly count = computed(() => this.cats().length);

  private buildBatch(offset: number): GalleryCat[] {
    return this.captions.map((caption, i) => ({
      id: offset + i,
      imageUrl: `https://cataas.com/cat?width=400&height=300&_=${offset + i}`,
      caption,
    }));
  }

  loadMore(): void {
    this.cats.update((current) => [...current, ...this.buildBatch(current.length)]);
  }
}
