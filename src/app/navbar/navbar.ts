import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import navData from '../../assets/navigation.json'

interface NavbarItem {
  title: string;
  path?: string;
  children?: NavbarItem[];
  isOpen?: boolean; 
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuOpen = false;
  navbarItems: NavbarItem[] = [];

  constructor() {}

  ngOnInit() {
    this.navbarItems=navData
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleChild(item: NavbarItem) {
    item.isOpen = !item.isOpen;
  }
}
