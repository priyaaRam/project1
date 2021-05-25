package com.example.project1.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project1.model.User;
import com.example.project1.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3002/")
@RestController
@RequestMapping("api/")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("users")
public List<User> getUsers(){
		return this.userRepository.findAll();
	
}
}