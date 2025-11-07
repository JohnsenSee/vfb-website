import { Component, OnInit } from '@angular/core';
import DepartmentDetails from '../../assets/abteilungsinfo.json'
import { CommonModule } from '@angular/common';

interface Contact {
  name: string;
  mobil: string;
  email: string;
  function: string;
}

interface Group {
  groupname: string;
  image: string;
  contact: Contact[];
  time: string;
  location: string;
}


@Component({
  selector: 'app-abteilung',
  imports: [
    CommonModule
  ],
  templateUrl: './abteilung.html',
  styleUrl: './abteilung.scss',
})
export class Abteilung implements OnInit{
  expandedGroup: Group | null = null;
  groups: Group[] = []
  showSide:boolean = true

  ngOnInit(): void {
    const obj = DepartmentDetails.find(item => item.departmentid === 'Fussball');
    this.groups = obj?.groups ?? [];
    
  }
  
  toggleExpand(group: Group): void {
    this.expandedGroup = this.expandedGroup === group ? null : group;
  }

}
