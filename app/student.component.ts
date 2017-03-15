import { Component, Input } from '@angular/core';
import {StudentService} from './student.service'
import {Student} from './Student'

@Component({
  selector: 'my-student',
  templateUrl: 'app/student.component.html',
 
})
export class StudentComponent{
  
  @Input() studentfoo: Student;
}