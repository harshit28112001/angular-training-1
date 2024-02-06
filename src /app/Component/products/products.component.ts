import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      id: 101,
      name: 'Laptop',
      color: 'Silver',
      availability: 'available',
      image: '/assets/laptop.jpg',
      price: 12321,
    },
    {
      id: 102,
      name: 'Smartphone',
      color: 'Black',
      availability: 'available',
      image: '/assets/smartphone.jpg',
      price: 12321,
    },
    {
      id: 103,
      name: 'Headphones',
      color: 'White',
      availability: 'available',
      image: '/assets/headphone.jpg',
      price: 12321,
    },
    {
      id: 104,
      name: 'Camera',
      color: 'Black',
      availability: 'unavailable',
      image: '/assets/camera.webp',
      price: 12321,
    },
    {
      id: 105,
      name: 'Smartwatch',
      color: 'Rose Gold',
      availability: 'available',
      image: '/assets/smartwatch.webp',
      price: 12321,
    },
    {
      id: 106,
      name: 'Backpack',
      color: 'Blue',
      availability: 'available',
      image: '/assets/backpack.jpg',
      price: 12321,
    },
  ];
}
