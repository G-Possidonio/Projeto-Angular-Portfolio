import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {

    public arrayKnowLedge = signal<IKnowledge[]>([
      {
        src: 'assets/icons/knowledge/html5.svg',
        alt: 'Ícone de conhecimento de html5'
      },
      {
        src: 'assets/icons/knowledge/css3.svg',
        alt: 'Ícone de conhecimento de css3'
      },
      {
        src: 'assets/icons/knowledge/javascript.svg',
        alt: 'Ícone de conhecimento de javascript'
      },
      {
        src: 'assets/icons/knowledge/php.svg',
        alt: 'Ícone de conhecimento de php'
      },
      {
        src: 'assets/icons/knowledge/mysql.svg',
        alt: 'Ícone de conhecimento de mysql'
      },
      {
        src: 'assets/icons/knowledge/angular.svg',
        alt: 'Ícone de conhecimento de angular'
      }
    ])
}
