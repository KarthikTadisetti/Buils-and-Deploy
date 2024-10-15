import { JSDOM } from 'jsdom';
import { expect } from 'chai';

describe('Welcome Page Functionality', () => {
  let window;

  beforeEach(() => {
    // Set up a JSDOM environment for testing
    window = new JSDOM(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Welcome Page</title>
      </head>
      <body>
          <h1>Welcome to the Page</h1>
      </body>
      </html>`).window;

    global.document = window.document;
  });

  it('should display the welcome message', () => {
    const heading = document.querySelector('h1');
    expect(heading).to.exist; // Check if the heading exists
    expect(heading.textContent).to.equal('Welcome to the Page'); // Check the content
  });
});
