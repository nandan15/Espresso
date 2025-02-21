import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getquote',
  templateUrl: './getquote.component.html',
  styleUrls: ['./getquote.component.css']
})
export class GetquoteComponent {
  isFormVisible = false;

  // Object to hold form data
  formData = {
    name: '',
    phone: '',
    email: '',
    requirement: ''
  };

  constructor(private http: HttpClient) {}

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  // Method to send email
  sendEmail() {
    const apiUrl = 'https://localhost:7072/api/email/send';  

    // Make a POST request to the backend API
    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
        alert('Your message has been sent successfully!');
      },
      (error) => {
        console.error('Error sending email', error);
        alert('Failed to send email. Please try again.');
      }
    );
  }
}
