import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';

describe('Welcome Page', () => {
    let window;

    before(() => {
        const html = fs.readFileSync(path.join(__dirname, 'welcome.html'), 'utf8');
        window = new JSDOM(html).window;
    });

    it('should display welcome message', () => {
        const h2 = window.document.querySelector('h2');
        expect(h2.textContent).to.equal('Welcome to the Page!');
    });

    it('should display success message', () => {
        const p = window.document.querySelector('p');
        expect(p.textContent).to.equal('You have successfully loaded the page.');
    });
});
