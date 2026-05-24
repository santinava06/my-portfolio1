import {
  validateContactForm,
  hasErrors,
} from "../../../features/contact/validation/contact.schema";

describe("validateContactForm", () => {
  it("returns no errors for valid data", () => {
    const result = validateContactForm({
      name: "Juan",
      email: "juan@example.com",
      subject: "Consulta",
      message: "Hola, quiero contactarte para un proyecto",
    });
    expect(hasErrors(result)).toBe(false);
    expect(result).toEqual({});
  });

  it("returns error when name is empty", () => {
    const result = validateContactForm({
      name: "",
      email: "juan@example.com",
      subject: "Consulta",
      message: "Hola, quiero contactarte",
    });
    expect(result.name).toBe("El nombre es requerido");
  });

  it("returns error when email is invalid", () => {
    const result = validateContactForm({
      name: "Juan",
      email: "email-invalido",
      subject: "Consulta",
      message: "Hola, quiero contactarte",
    });
    expect(result.email).toBe("El email no es válido");
  });

  it("returns error when message is too short", () => {
    const result = validateContactForm({
      name: "Juan",
      email: "juan@example.com",
      subject: "Consulta",
      message: "Corto",
    });
    expect(result.message).toBe(
      "El mensaje debe tener al menos 10 caracteres",
    );
  });

  it("returns errors for all empty fields", () => {
    const result = validateContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    expect(Object.keys(result)).toHaveLength(4);
  });
});
