// index.test.js
import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import fs from 'fs';

describe('Welcome Page Functionality', () => {
    let window;

    before((done) => {
        fs.readFile('./public/index.html', 'utf-8', (err, data) => {
            if (err) {
                done(err);
            } else {
                window = (new JSDOM(data)).window;
                done();
            }
        });
    });

    it('should display welcome message', () => {
        const h2 = window.document.querySelector('h2');
        expect(h2.textContent).to.equal('Welcome to the Page!');
    });

    it('should display success message', () => {
        const p = window.document.querySelector('p');
        expect(p.textContent).to.equal('You have successfully accessed the welcome page.');
    });
});
