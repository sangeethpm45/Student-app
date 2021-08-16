package com.example.student.student.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.student.student.model.Student;
import com.example.student.student.repository.Studentrepository;



@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api")
@EnableAutoConfiguration
public class StudentController {
  
  @Autowired
  Studentrepository studentRepository;


  @GetMapping("/all")
  public ResponseEntity <List<Student>> getAllTutorials() {
    try {
      List<Student> students = new ArrayList<Student>();

        studentRepository.findAll().forEach(students::add);
      
      if (students.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
  
      return new ResponseEntity<>(students, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/addstudents")

  @ResponseBody
  public ResponseEntity<Student> createStudent(@RequestBody Student student) {

    try {
      Student _tutorial = studentRepository.insert(student);
      return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }
}
