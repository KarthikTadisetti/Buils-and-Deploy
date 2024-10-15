import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Welcome Page Functionality', function () {
  let dom;
  let document;

  before(function (done) {
    const filePath = path.join(process.cwd(), 'public', 'index.html');
    
    // Read the HTML file content
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return done(err);
      
      // Initialize a new JSDOM instance with the HTML
      dom = new JSDOM(data);
      document = dom.window.document;
      done();
    });
  });

  it('should have the correct title', function () {
    const title = document.querySelector('title').textContent;
    expect(title).to.equal('Welcome Page');
  });

  it('should display the welcome heading', function () {
    const heading = document.querySelector('h2').textContent;
    expect(heading).to.equal('Welcome to the Page!');
  });

  it('should display the welcome message paragraph', function () {
    const paragraph = document.querySelector('p').textContent;
    expect(paragraph).to.equal('You have successfully accessed the welcome page.');
  });
});
