package com.glowmart.glowmart_backend.dto;

import lombok.Data;
import java.util.List;

@Data
public class OrderRequest {
    private CustomerDto customer;
    private List<ItemDto> items;
    private int total;
}