package com.Bank.UserManagementService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Bank.UserManagementService.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	User findByUsernameAndPassword(int username, String password);

}
