package com.glowmart.glowmart_backend.dto;

import lombok.Data;

@Data
public class CustomerDto {
    private Long id;
    private String fullName;
    private String address;
    private String mobile;
    private String email;
}