import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string | undefined;

  ngOnInit(): void {
    this.title = "cb-assessment"
  }
}
