import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pageTitle = 'Dashboard';
  isDarkMode = true;

  constructor(private userPreferences: UserPreferencesService) {
    this.userPreferences.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  toggleTheme() {
    this.userPreferences.toggleTheme();
  }
}
