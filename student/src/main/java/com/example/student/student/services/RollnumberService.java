package com.example.student.student.services;

import com.example.student.student.model.RollNumber;
import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;


import java.util.Objects;

import static org.springframework.data.mongodb.core.query.Criteria.*;

@Service
public class RollnumberService {
    @Autowired
   private MongoOperations mongoOperations;


// Service for generate sequence since mongo db doesn't support auto increment 

   public int getSlnumber(String roll){
       Query query= new Query(Criteria.where("id").is(roll));
       Update update=new Update().inc("seq",1);
       RollNumber counter=mongoOperations.findAndModify(query,update,options().returnNew(true).upsert(true),RollNumber.class);
    return !Objects.isNull(counter)?counter.getSeq():1;
   }
   
//------------------------

// Service for converting sequence to roll number// 

public String getRollnumber(int rollnumber){
       String roll="R-00"+rollnumber;
       return roll;
}

//----------------------------------------------
}
