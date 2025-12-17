namespace college.srv;
using { student.db } from '../db/studentDetails';
service collegeSrv {
 entity college as projection on db.college;
 entity student as projection on db.student;
entity course as projection on db.course;
entity subject as projection on db.subjects;

}

