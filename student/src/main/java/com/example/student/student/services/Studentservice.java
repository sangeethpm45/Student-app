package com.example.student.student.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.student.student.model.Student;
import com.example.student.student.repository.Studentrepository;



@Service

@Transactional
public class Studentservice {
     @Autowired 
	private Studentrepository studentrepository;
     
     public void addstudent(Student student) {
    	 studentrepository.insert(student);
     }
}
