package com.glowmart.glowmart_backend.repository;

import com.glowmart.glowmart_backend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Optional: you can add custom query methods if needed
    Customer findByEmail(String email);
}

