package com.wego.web.person;

import java.util.Date;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class PersonDTO {
	private String id;
	private String userid;
	private String passwd;
	private String name;
	private Date birthday;
	private String gender;
	private int hak;
	private int ban;
	private int score;
	private String role;
}
