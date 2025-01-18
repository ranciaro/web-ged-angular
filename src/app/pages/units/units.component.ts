import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-units-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './units.component.html',
  styles: [`
    .page-container {
      padding: 2rem;
    }

    h1 {
      margin-bottom: 2rem;
      font-size: 2rem;
      color: var(--text-color);
    }
  `]
})
export class UnitsPageComponent {
  title = 'Units';
}
