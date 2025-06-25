package com.glowmart.glowmart_backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private int price;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonBackReference // 🛑 Prevent recursive serialization
    private Order order;
}
