package com.example.del.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.del.entity.AuthToken;
import com.example.del.repository.AuthTokenRepository;

@Service
public class AuthTokenService {

    @Autowired
    private AuthTokenRepository authTokenRepository;

    public String createToken(String username) {
        String token = UUID.randomUUID().toString();
        AuthToken authToken = new AuthToken(token, username);
        authTokenRepository.save(authToken);
        return token;
    }

    public boolean validateToken(String token) {
        Optional<AuthToken> authToken = authTokenRepository.findByToken(token);
        return authToken.isPresent();
    }

    public void revokeToken(String token) {
        authTokenRepository.deleteByToken(token);
    }
}

