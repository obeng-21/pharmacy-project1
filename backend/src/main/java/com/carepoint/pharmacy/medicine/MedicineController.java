package com.carepoint.pharmacy.medicine;

import jakarta.validation.Valid;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "http://localhost:5173")
public class MedicineController {
    private final MedicineRepository repository;
    public MedicineController(MedicineRepository repository) { this.repository = repository; }

    @GetMapping
    public List<Medicine> all(@RequestParam(defaultValue = "") String search) {
        return search.isBlank() ? repository.findAll() : repository.findByNameContainingIgnoreCase(search);
    }
    @GetMapping("/{id}")
    public Medicine one(@PathVariable Long id) { return repository.findById(id).orElseThrow(() -> new MedicineNotFoundException(id)); }
    @PostMapping
    public ResponseEntity<Medicine> create(@Valid @RequestBody Medicine medicine) { return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(medicine)); }
    @PutMapping("/{id}")
    public Medicine update(@PathVariable Long id, @Valid @RequestBody Medicine input) {
        Medicine medicine = repository.findById(id).orElseThrow(() -> new MedicineNotFoundException(id));
        medicine.setName(input.getName()); medicine.setCategory(input.getCategory()); medicine.setPrice(input.getPrice()); medicine.setStock(input.getStock()); medicine.setDescription(input.getDescription());
        return repository.save(medicine);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repository.existsById(id)) throw new MedicineNotFoundException(id);
        repository.deleteById(id); return ResponseEntity.noContent().build();
    }
}

