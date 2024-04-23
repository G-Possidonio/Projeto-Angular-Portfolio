import { Component, signal } from '@angular/core';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {

  public arrayExperiences = signal <IExperiences[]>([
    {
      summary: {
        strong: "Projeto Portfólio",
        p: "Udemy | 2024" 
      },
      text: "<p>Projeto de portfólio realizado através do Curso de Angular e TypeScript do canal Vidafullstack</p>"
    },
    {
      summary: {
        strong: "Projeto AuthFront Login",
        p: "Udemy | 2023"
      },
      text: "<p>Projeto de portfólio realizado através do Curso de Angular e TypeScript do canal Vidafullstack</p>"
    },
    {
      summary: {
        strong: "Projeto Dark Theme",
        p: "Udemy | 2023"
      },
      text: "<p>Projeto de portfólio realizado através do Curso de Angular e TypeScript do canal Vidafullstack</p>"
    },
  ])

}
