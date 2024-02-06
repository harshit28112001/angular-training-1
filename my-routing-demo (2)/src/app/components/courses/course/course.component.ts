import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(
    private service: CoursesService,
    private activeRoute: ActivatedRoute
  ) {}

  course: any;
  courseId: any = 0;

  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['id'];
    this.course = this.service.courses.find((x) => x.id == this.courseId);
  }
}
