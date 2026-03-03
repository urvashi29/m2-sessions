describe("Example", () => {
  it("visit the hompage", () => {
    cy.visit("/");
    cy.contains("Logout").should("exist");
  });
});
