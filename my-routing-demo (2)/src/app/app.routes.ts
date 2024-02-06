import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { CourseComponent } from './components/courses/course/course.component';
import { authenticationGuard } from './authentication.guard';
import { courseGuard } from './course.guard';
import { contactGuard } from './contact.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent ,canDeactivate:[contactGuard]},
  { path: 'courses', component: CoursesComponent, canActivate: [authenticationGuard]},

  // { path: 'courses/course/:id', component: CourseComponent },
  {path: 'courses',canActivateChild :[courseGuard],children: [
    {path: 'course/:id',component:CourseComponent},
   
  ]},
  { path: '**', component: ErrorComponent },
];




