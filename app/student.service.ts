import {Injectable} from '@angular/core'
import {Student} from './Student'

@Injectable()
export class StudentService{
  getStudents = () => [
    new Student(1,'Ahsen'),
    new Student(2,'Basit'),
     new Student(3,'Rashid'),
    ];
    
  
}