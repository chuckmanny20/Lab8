describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when Slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of audio element changes when Slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when party horn button selected', () => {
    cy.get('#radio-party-horn').check().trigger('input');
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button is disabled when textbox input is empty or non-number', () => {
    cy.get('#volume-number').clear().type('e');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Error shown when type number outside of range for volume input', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el);
    });
  });
});
