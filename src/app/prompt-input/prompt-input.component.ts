import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prompt-input',
  templateUrl: './prompt-input.component.html',
  styleUrls: ['./prompt-input.component.scss'],
})
export class PromptInputComponent {
  textValue: string = '';
  @Output() result = new EventEmitter<string>();

  constructor(private http: HttpClient) {}
  sendApiRequest() {
    const apiUrl = 'http://10.159.19.59:31205/tokenizer';
    const requestData = { text: this.textValue };

    this.http.post(apiUrl, requestData).subscribe(
      (response) => {
        console.log('API response:', response);
      },
      (error) => {
        console.error('API error:', error);
        // Xử lý lỗi API tại đây
      }
    );
    this.result.emit(`<h1> Xin chao </h1>
<h5> ban khoe khong?</h5>`);
  }
}
