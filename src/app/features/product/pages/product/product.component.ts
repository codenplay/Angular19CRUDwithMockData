import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent, MatButtonModule, MatIconModule],
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductService);
  private toastr = inject(ToastrService);
  products: Product[] = [];
  productToEdit?: Product | null = null;
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {this.products = products;});
  }

  onSave(product: Product) {
    const save$ = product.id === 0
      ? this.productService.addProduct(product)
      : this.productService.updateProduct(product);

    save$.subscribe(() => this.productToEdit = {id: 0, name: '', price: 0, category: 0}); // Reset the form after successful submission
    this.toastr.success('Product saved successfully!', 'Success!');
  }

  edit(product: Product) {
    this.productToEdit = {...product};
  }

  delete(id: number) {
    if(confirm('Are you sure you want to delete this product?'))
    { 
      this.productService.removeProduct(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      });
      this.toastr.warning('Product deleted successfully!', 'Deleted!');
    }
  }

}
