import { Component } from '@angular/core';
import {StudentComponent} from './student.component';
import {Student} from './student';
import {StudentService} from './student.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html', 
  providers: [StudentService]
})
export class AppComponent {
  selectedStudent: Student;
  title = 'Angular 2 Property Binding Test';
  story = 'The Empire Strikes Back';
  imagePath = 'angular.png';
  link = "http://try.io";
  students: Array<Student>;
  constructor(private _studentService: StudentService){
    this.students = this._studentService.getStudents();
  }
  
  
  select(st: Student){
    this.selectedStudent = st;
  }
}