import { Component } from '@angular/core';
import { ProductComponent } from './features/product/pages/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ng-19-app';
}
