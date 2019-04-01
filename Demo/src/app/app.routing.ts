import { Component } from '@angular/core';
import { Home } from './home.component';
import { About } from './about.component';
import { RouterModule } from '@angular/router';

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    //{ path: '**', component: NotFound }
  ];
  
  export const AppRouting = RouterModule.forRoot(routes, { 
    useHash: true
  });