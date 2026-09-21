package com.carepoint.pharmacy.config;

import com.carepoint.pharmacy.medicine.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.math.BigDecimal;

@Configuration
public class SeedData {
    @Bean CommandLineRunner seed(MedicineRepository repository) { return args -> {
        if (repository.count() == 0) {
            repository.save(new Medicine("Paracetamol", "Pain Relief", new BigDecimal("12.50"), 42, "500 mg tablets for pain and fever relief."));
            repository.save(new Medicine("Vitamin C", "Vitamins", new BigDecimal("28.00"), 18, "1000 mg immune-support tablets."));
            repository.save(new Medicine("Cough Syrup", "Cold & Flu", new BigDecimal("35.00"), 7, "Soothing syrup for dry cough symptoms."));
        }
    }; }
}

