package com.example.del.entity.dto;

import javax.persistence.Column;

import lombok.Data;

@Data
public class UserDto {
    private String username;

    private String password;
}
