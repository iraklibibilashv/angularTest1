import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartItem } from '../models/products';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {



   ngOnInit() {
    this.isOpen = true;
    this.cartItems = JSON.parse(localStorage.getItem("itemToken") || "[]" )
   }
   
  isOpen = false;

  cartItems: CartItem[]= [
    // {
    //   id: 1,
    //   name: 'Mtsvadi (Georgian BBQ)',
    //   price: 28.0,
    //   photo: '/images/mtsvadi1.jpg',
    //   quantity: 1,
    // },
    // { id: 2, name: 'Khinkali (6 pcs)', price: 18.0, photo: '/images/khinkali2.jpg', quantity: 2 },
    // {
    //   id: 3,
    //   name: 'Khachapuri Adjaruli',
    //   price: 22.0,
    //   photo: '/images/adjaruli3.avif',
    //   quantity: 1,
    // },
  ];

  promoCode = '';
  promoApplied = false;
  promoError = false;

  openCart() {
    this.isOpen = true;
  }
  closeCart() {
    this.isOpen = false;
  }

  increase(item: CartItem) {
    item.quantity++;
    this.localStorageSetItem()
    
  }

  decrease(item: CartItem) {
    if (item.quantity > 1) item.quantity--;
    else this.removeItem(item);
    this.localStorageSetItem()
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
    this.localStorageSetItem()
  }

  applyPromo() {
    if (this.promoCode.trim().toUpperCase() === 'SAVORIA10') {
      this.promoApplied = true;
      this.promoError = false;
    } else {
      this.promoError = true;
      this.promoApplied = false;
    }
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  get discount(): number {
    return this.promoApplied ? this.subtotal * 0.1 : 0;
  }

  get total(): number {
    return this.subtotal - this.discount + 3;
  }
    localStorageSetItem(){
    return  localStorage.setItem("itemToken", JSON.stringify(this.cartItems))
  }
}
