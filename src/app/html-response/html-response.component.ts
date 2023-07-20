import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HighlightAutoResult, HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'app-html-response',
  templateUrl: './html-response.component.html',
  styleUrls: ['./html-response.component.scss'],
})
export class HtmlResponseComponent {
  @Input() code!: string;
  @ViewChild('codeElement', { static: false }) codeElement!: ElementRef;
  response!: HighlightAutoResult;

  constructor() {}

  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }
  copyCode() {
    const codeElement = this.codeElement.nativeElement;
    const codeToCopy = codeElement.textContent;

    const textArea = document.createElement('textarea');
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying code was ' + msg);
    } catch (err) {
      console.error('Unable to copy code');
    }

    document.body.removeChild(textArea);
  }
}
