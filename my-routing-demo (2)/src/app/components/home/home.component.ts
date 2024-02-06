import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}

  courses: any[]= [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
}
