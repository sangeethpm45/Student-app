package com.example.student.student.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.student.student.model.Student;

public interface Studentrepository extends MongoRepository<Student, String>{
	

}
