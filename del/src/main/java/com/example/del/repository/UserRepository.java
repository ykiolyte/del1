package com.example.del.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.del.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
