import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  portalName: string;

  cursos: string[];

  constructor(
    private coursesService: CoursesService
    ) {
    this.portalName = 'https:google.com';
    this.cursos = this.coursesService.getCourses();
  }

  ngOnInit(): void {}
}
