# Sentinel Security Journal

## 2023-10-27 - Input Validation for Aluno Controller
**Vulnerability:** Lack of input validation on email and CPF formats allows malformed or dangerous inputs in `createAluno` and `updateAluno`.
**Learning:** Simply checking field presence is insufficient to secure database inputs. Standardized format validation of email and CPF must be enforced at the controller layer.
**Prevention:** Implement and reuse validation helper functions in a shared utility file (`src/utils/validation.js`) to enforce regex and semantic correctness.
