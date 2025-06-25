package com.glowmart.glowmart_backend.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OtpService {

    @Autowired
    private JavaMailSender mailSender;

    private Map<String, OtpEntry> otpStore;

    @PostConstruct
    public void init() {
        otpStore = new HashMap<>();
    }

    public String generateOtp(String email) {
        String otp = String.valueOf(new Random().nextInt(999999));
        OtpEntry entry = new OtpEntry(otp, LocalDateTime.now().plusMinutes(5));
        otpStore.put(email, entry);

        sendOtpToEmail(email, otp);
        return otp;
    }

    private void sendOtpToEmail(String to, String otp) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(to);
        msg.setSubject("Your OTP from GlowMart project governed by Shaiv @RDF");
        msg.setText("Your OTP is: " + otp + "\nIt is valid for 5 minutes.");

        mailSender.send(msg);
    }

    public boolean verifyOtp(String email, String userOtp) {
        OtpEntry entry = otpStore.get(email);
        if (entry == null) return false;
        if (entry.getExpiry().isBefore(LocalDateTime.now())) return false;
        return entry.getOtp().equals(userOtp);
    }

    private static class OtpEntry {
        private final String otp;
        private final LocalDateTime expiry;

        public OtpEntry(String otp, LocalDateTime expiry) {
            this.otp = otp;
            this.expiry = expiry;
        }

        public String getOtp() {
            return otp;
        }

        public LocalDateTime getExpiry() {
            return expiry;
        }
    }
}
