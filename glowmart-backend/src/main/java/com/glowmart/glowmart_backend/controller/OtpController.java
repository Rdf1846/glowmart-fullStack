package com.glowmart.glowmart_backend.controller;

import com.glowmart.glowmart_backend.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "http://localhost:5173")
public class OtpController {

    @Autowired
    private OtpService otpService;

    @PostMapping("/send")
    public String sendOtp(@RequestParam String email) {
        String otp = otpService.generateOtp(email);
        return "OTP sent to email: " + email;
    }

    @PostMapping("/verify")
    public String verifyOtp(@RequestParam String email, @RequestParam String otp) {
        boolean isValid = otpService.verifyOtp(email, otp);
        return isValid ? "OTP verified successfully!" : "Invalid or expired OTP.";
    }
}
