package com.glowmart.glowmart_backend.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String fullName;
    private String email;
    private String mobile;
    private String password;
}
