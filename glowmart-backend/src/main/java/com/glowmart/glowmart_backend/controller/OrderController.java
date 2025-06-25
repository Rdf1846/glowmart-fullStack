package com.glowmart.glowmart_backend.controller;
import com.glowmart.glowmart_backend.dto.OrderRequest;
import com.glowmart.glowmart_backend.dto.ItemDto;
import com.glowmart.glowmart_backend.dto.CustomerDto;
import com.glowmart.glowmart_backend.entity.*;
import com.glowmart.glowmart_backend.repository.CustomerRepository;
import com.glowmart.glowmart_backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/place")
    public String placeOrder(@RequestBody OrderRequest request) {
        // Check if this user already exists
        String email = request.getCustomer().getEmail(); // from session
        Customer customer = customerRepository.findByEmail(email);

        // If not, create new (only for guest)
        if (customer == null) {
            customer = new Customer();
            customer.setFullName(request.getCustomer().getFullName());
            customer.setAddress(request.getCustomer().getAddress());
            customer.setMobile(request.getCustomer().getMobile());
            customer.setEmail(email);
        } else {
            // Optional: update address (if changed)
            customer.setAddress(request.getCustomer().getAddress());
        }

        Order order = new Order();
        order.setCustomer(customer);
        order.setTotalAmount(request.getTotal());

        List<OrderItem> items = request.getItems().stream().map(dto -> {
            OrderItem item = new OrderItem();
            item.setProductName(dto.getName());
            item.setPrice(dto.getPrice());
            item.setOrder(order);
            return item;
        }).collect(Collectors.toList());

        order.setItems(items);

        orderRepository.save(order);

        return "Order placed successfully!";
    }



    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUser(@PathVariable Long userId) {
        return orderRepository.findByCustomerId(userId);
    }

    @GetMapping("/email/{email}")
    public List<Order> getOrdersByEmail(@PathVariable String email) {
        return orderRepository.findByCustomerEmail(email);
    }


}