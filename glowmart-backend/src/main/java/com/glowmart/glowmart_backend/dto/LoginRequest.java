package com.glowmart.glowmart_backend.dto;


import lombok.Data;

@Data
public class LoginRequest {
    private String emailOrMobile;
    private String password;
}

