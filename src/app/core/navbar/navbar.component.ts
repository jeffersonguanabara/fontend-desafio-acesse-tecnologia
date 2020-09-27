import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  
  constructor(
    private router:Router,
    private title: Title
  ) { }

  ngOnInit(): void {
  
    if(this.router.url === '/') {
      this.title.setTitle('Home');
    }
    this.items = [
      { 
        label: 'Processos',
        icon: 'pi pi-bar',
        routerLink: ['/processos']
      },
      {
        label: "Usuarios",
        icon: 'pi pi-user',
        routerLink: ['/usuarios']
      }
    ];
  }
}
