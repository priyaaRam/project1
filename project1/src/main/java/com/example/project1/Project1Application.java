package com.example.project1;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.CommandLineRunner;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;


import com.example.project1.model.User;

import com.example.project1.repository.UserRepository;


@SpringBootApplication

public class Project1Application implements CommandLineRunner {

	
public static void main(String[] args) {
		
SpringApplication.run(Project1Application.class, args);
	}
   
 @Autowired
	
private UserRepository userRepository;

	
@Override
	
public void run(String... args) throws Exception {
				
this.userRepository.save(new User("priya","Ram","priyaram@gmail.com"));
				
this.userRepository.save(new User("shankari","arun","shankari@gmail.com"));
				
this.userRepository.save(new User("vishali","arun","vishali@gmail.com"));
				


	
}


}
