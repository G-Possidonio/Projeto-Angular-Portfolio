import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

//Interface
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.css'
})
export class DialogProjectsComponent implements OnInit {

  constructor( 
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects ) {}
  ngOnInit(): void {
    this.getData.set(this._data)
  }

  public getData = signal<IProjects | null>(null);

  public closeModal() {
    return this._dialogRef.close();
  }

}
