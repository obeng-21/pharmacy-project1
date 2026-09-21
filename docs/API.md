# Medicine API contract

Base URL: `http://localhost:8080/api`

```json
{
  "id": 1,
  "name": "Paracetamol",
  "category": "Pain Relief",
  "price": 12.50,
  "stock": 42,
  "description": "500 mg tablets for pain and fever relief."
}
```

`name` and `category` are required. `price` must be at least `0.01`, and `stock` cannot be negative. Missing medicines return HTTP `404`; invalid input returns HTTP `400`.

