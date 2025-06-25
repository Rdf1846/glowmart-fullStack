package com.glowmart.glowmart_backend.repository;

import com.glowmart.glowmart_backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerId(Long userId);
    List<Order> findByCustomerEmail(String email);

}
