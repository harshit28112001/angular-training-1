package com.Bank.UserManagementService.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Bank.UserManagementService.Exceptions.IdNotFoundException;
import com.Bank.UserManagementService.Exceptions.PasswordMismatchException;
import com.Bank.UserManagementService.Exceptions.PasswordNotCorrectException;
import com.Bank.UserManagementService.Exceptions.UserAlreadyExistsException;
import com.Bank.UserManagementService.Model.User;
import com.Bank.UserManagementService.Service.UserService;

@RestController
@RequestMapping("registration")
public class UserController {
	
	@Autowired
	private UserService uservice;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User u)
	{
			uservice.addUser(u);
			return ResponseEntity.ok("User Registered Successfully");
		}
	

	@GetMapping("/login/{username}/{password}")
	public ResponseEntity<?> login(@PathVariable int username, @PathVariable String password)
	{
		try {
			return new ResponseEntity(uservice.getToken(username, password), HttpStatus.OK);
		}
	}
	


}
