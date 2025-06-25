package com.glowmart.glowmart_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String address;
    private String mobile;
    private String email;

    // Optional — Only if you plan to add this field in the future
    // @OneToMany(mappedBy = "customer")
    // @JsonIgnore
    // private List<Order> orders;
}
