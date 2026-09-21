package com.carepoint.pharmacy.medicine;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class MedicineControllerTest {
    @Autowired MockMvc mockMvc;
    @Test void listsSeededMedicines() throws Exception {
        mockMvc.perform(get("/api/medicines")).andExpect(status().isOk()).andExpect(jsonPath("$[0].name").value("Paracetamol"));
    }
    @Test void searchesByName() throws Exception {
        mockMvc.perform(get("/api/medicines?search=vitamin")).andExpect(status().isOk()).andExpect(jsonPath("$.length()").value(1));
    }
}
