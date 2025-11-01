import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface departmentItems {
  departmentid: string;
  title: string;
  image: string;
  groups: {
    groupname: string;
    contact: {
      name: string;
      mobil: string;
      email: string;
      function: string;
    }[];
    time: string;
    location: string;
  }[];
}

@Component({
  selector: 'app-abteilung',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './abteilung.html',
  styleUrl: './abteilung.scss',
})
export class Abteilung implements OnInit{
  columnsToDisplay = ['expand', 'groupname'];

  ngOnInit(): void {
    
  }

}
