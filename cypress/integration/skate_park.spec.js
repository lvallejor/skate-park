describe("Skate Park", () => {
  it("frontepage can be opened", () => {
    cy.visit("http://localhost:3000/login");
    cy.contains("Skate Park");
  });

  it("Click test Ingresar", () => {
    cy.visit("http://localhost:3000/login");
    cy.contains("Ingresar").click();
  });

  it("Click test Input", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input:first").type("mi_nombre");
  });
});
