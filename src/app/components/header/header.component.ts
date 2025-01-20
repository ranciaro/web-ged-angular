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
  showUnitDropdown = false;
  showLanguageDropdown = false;
  showNotificationsDropdown = false;
  showUserDropdown = false;
  isDarkMode = true;

  notifications = [
    {
      title: 'Novo documento compartilhado',
      description: 'João Silva compartilhou o documento "Relatório Q4 2024" com você',
      time: '17:30:00'
    },
    {
      title: 'Documento atualizado',
      description: 'O documento "Contrato de Serviço" foi atualizado',
      time: '16:45:00'
    },
    {
      title: 'Lembrete de revisão',
      description: 'A revisão do documento "Política de Privacidade" está pendente',
      time: '15:20:00'
    },
    {
      title: 'Documento aprovado',
      description: 'Seu documento "Proposta Comercial" foi aprovado',
      time: '14:15:00'
    },
    {
      title: 'Erro no upload',
      description: 'Falha ao fazer upload do documento "Apresentação.pdf"',
      time: '13:30:00'
    }
  ];

  languages = [
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  units = [
    { id: 1, name: 'Unidade Centro' },
    { id: 2, name: 'Unidade Norte' }
  ];

  constructor(private userPreferences: UserPreferencesService) {
    this.userPreferences.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  toggleTheme() {
    this.userPreferences.toggleTheme();
  }

  toggleDropdown(dropdown: 'unit' | 'language' | 'notifications' | 'user') {
    this.showUnitDropdown = dropdown === 'unit' ? !this.showUnitDropdown : false;
    this.showLanguageDropdown = dropdown === 'language' ? !this.showLanguageDropdown : false;
    this.showNotificationsDropdown = dropdown === 'notifications' ? !this.showNotificationsDropdown : false;
    this.showUserDropdown = dropdown === 'user' ? !this.showUserDropdown : false;
  }

  selectUnit(unit: any) {
    // Handle unit selection
    this.showUnitDropdown = false;
  }

  selectLanguage(language: any) {
    // Handle language selection
    this.showLanguageDropdown = false;
  }
}