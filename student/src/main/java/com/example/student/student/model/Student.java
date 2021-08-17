package com.example.student.student.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="student")
public class Student {
	@Id
	private String id;
	public static final String SEQUENCE_NAME="roll-number";
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSclass() {
		return sclass;
	}
	public void setSclass(String sclass) {
		this.sclass = sclass;
	}
	public String getDivishion() {
		return divishion;
	}
	public void setDivishion(String divishion) {
		this.divishion = divishion;
	}
	public String getDateofbirth() {
		return dateofbirth;
	}
	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}
	private String name;
	private String sclass ;
	private String divishion;
	private String dateofbirth;
	private String gender;

	public int getSl_number() {
		return sl_number;
	}

	public void setSl_number(int sl_number) {
		this.sl_number = sl_number;
	}

	private int sl_number;
	public String getRollnumber() {
		return rollnumber;
	}

	public void setRollnumber(String rollnumber) {
		this.rollnumber = rollnumber;
	}

	private  String rollnumber;
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}


}
