import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation , inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  
  @Input() productToEdit?: Product | null = null;
  @Output() save = new EventEmitter<Product>();

  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [0],
      name: [''],
      description: [''],
      price: [0, [Validators.min(0)]],
      category: [0]
    });
  }

  ngOnChanges(): void {
    if (this.productToEdit) {
      this.productForm.patchValue(this.productToEdit);
    }
  }

  onSubmit() : void {
    this.save.emit(this.productForm.value as Product);
    this.productForm.reset({id : ''}); 
  }

}
