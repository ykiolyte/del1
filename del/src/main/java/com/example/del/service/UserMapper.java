package com.example.del.service;

// package com.example.del.service;


// import org.mapstruct.Mapper;
// import org.mapstruct.factory.Mappers;
// import org.springframework.stereotype.Component;

// import com.example.del.entity.User;
// import com.example.del.entity.dto.UserDto;

// import lombok.RequiredArgsConstructor;

// @Component
// @RequiredArgsConstructor
// public class UserMapper {

//     public User toUserEntity(UserDto userRegistrationDto, User userEntity) {

//         userEntity.setName(userRegistrationDto.getName());
//         userEntity.setSurname(userRegistrationDto.getSurname());
//         userEntity.setPassword(userRegistrationDto.getPassword());
//         userEntity.setNickname(userRegistrationDto.getNickname());
//         userEntity.setUserRoleEnum(UserRoleEnum.DEFAULT);

//         return userEntity;
//     }

// }


import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.example.del.entity.User;
import com.example.del.entity.dto.UserDto;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDto userToUserDto(User user);
    User userDtoToUser(UserDto userDto);
}
