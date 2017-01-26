import { Component } from '@angular/core';

declare var require;
@Component({
    template: require('./faq.component.html'),
    styles: [require('./faq.component.css')]
})

export class FAQComponent { }