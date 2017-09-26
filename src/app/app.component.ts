import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logoImg = "assets/images/logo.png";
  cropOptions: any[] = [
    {value: 'freedom', name: 'Freedom'},
    {value: 'origin', name: 'Sample as origin'},
    {value: 'square', name: 'Square'},
    {value: 'golden', name: 'Golden Radio'},
    {value: 'iPhone', name: '2*3 (iPhone)'}
    
  ];
  
}
