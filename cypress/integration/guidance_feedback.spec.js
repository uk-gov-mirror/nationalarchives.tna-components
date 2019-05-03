describe('Guidance feedback ', () => {
  beforeEach(() => {
    cy.visit(
      Cypress.env('live') + '/help-with-your-research/research-guides-keywords/'
    );
  });
  it('Should check for DOM elements and test the widget', () => {
    cy.get('.research-guide-filter-left');
    cy.get('.utilities');
    cy.get('h2.increase').should('have.text', 'A-Z index');
    cy.get('h3').should(
      'have.text',
      'Step 1 - Select a letter to browse keywords'
    );
    cy.get('.disc-container #menu-disc li:first-child').click();
    cy.url().should(
      'eq',
      'http://www.nationalarchives.gov.uk/help-with-your-research/research-guides-keywords/?show=keywords&keyword-letter=1'
    );
    cy.get('#step-two h3').should('have.text', 'Step 2 - Select a keyword');
    cy.get('ul.keywords-selectable li:first-child a').click();
    cy.url().should(
      'eq',
      'http://www.nationalarchives.gov.uk/help-with-your-research/research-guides-keywords/?show=keywords&keyword-letter=1&keyword=16th-century#step-three'
    );
    cy.get('h3.margin-none.float-left.width-full-to-auto').should(
      'have.text',
      'How to look for records of...'
    );
    cy.get('.resource-results ul li:first-child').click();
    cy.url().should(
      'eq',
      'http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/state-papers-domestic-1547-1649/'
    );
    cy.get('#guidance-feedback-react')
      .scrollIntoView()
      .should('be.visible');
    cy.get('#guidance-feedback-react form#guidance_feedback');
    cy.get('#guidance-feedback-react form#guidance_feedback h2').should(
      'have.text',
      'Feedback'
    );
    cy.get('#guidance-feedback-react form#guidance_feedback h3#aria').should(
      'have.text',
      'Did you find the guidance you needed?'
    );
    cy.get('.btnGF--no.show')
      .should('be.visible')
      .click()
      .should('be.hidden');
    cy.get('#guidance-feedback-react form#guidance_feedback label').should(
      'have.text',
      'What did you expect to find?'
    );
    cy.get('textarea#field-no')
      .should('be.visible')
      .type('Cypress end-to-end testing', { delay: 100 });
    //cy.wait(3000);
    cy.get('.btnGF--cancel').click();
    //cy.wait(3000);
    cy.get('#guidance-feedback-react')
      .scrollIntoView()
      .should('be.visible');
    cy.get('.btnGF--yes.show')
      .should('be.visible')
      .click()
      .should('be.hidden');
    //cy.wait(3000);
    cy.get('textarea#field-yes')
      .should('be.visible')
      .type('Cypress end-to-end testing', { delay: 100 });
    cy.get('.btnGF--send').click();
    cy.get('#guidance-feedback-react form#guidance_feedback h3#aria').should(
      'have.text',
      'Thank you for your feedback.'
    );
  });
});