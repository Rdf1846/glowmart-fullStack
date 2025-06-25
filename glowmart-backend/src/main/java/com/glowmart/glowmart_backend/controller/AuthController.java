package com.glowmart.glowmart_backend.controller;

import com.glowmart.glowmart_backend.dto.LoginRequest;
import com.glowmart.glowmart_backend.dto.RegisterRequest;
import com.glowmart.glowmart_backend.entity.UserEntity;
import com.glowmart.glowmart_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {
        // check email/mobile already exists
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already registered!");
        }
        if (userRepository.findByMobile(request.getMobile()).isPresent()) {
            return ResponseEntity.badRequest().body("Mobile already registered");
        }

        UserEntity user = new UserEntity();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setMobile(request.getMobile());
        user.setPassword(request.getPassword()); // plain text (for now)

        UserEntity savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public Object loginUser(@RequestBody LoginRequest request) {
        Optional<UserEntity> userOpt;

        // check by email or mobile
        if (request.getEmailOrMobile().contains("@")) {
            userOpt = userRepository.findByEmail(request.getEmailOrMobile());
        } else {
            userOpt = userRepository.findByMobile(request.getEmailOrMobile());
        }

        if (userOpt.isEmpty()) return "User not found";

        UserEntity user = userOpt.get();

        if (!user.getPassword().equals(request.getPassword())) {
            return "Invalid password";
        }

        return user; // frontend can store this object in sessionStorage
    }
}

