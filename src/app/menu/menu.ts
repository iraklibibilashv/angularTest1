import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../models/products';

@Component({
  selector: 'app-menu',
  imports: [CommonModule,FormsModule,],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  categories = ["All", "Mains", "Starters", "Desserts", "Drinks"]
  activeFilter = "All"
  filteredMenuItems : any[] = []
  menuItems = [
    { 
      id : 1,
      name: 'Mtsvadi (Georgian BBQ)',
      desc: 'Marinated pork skewers, grilled over open fire with herb sauce',
      price: '₾ 28.00',
      photo: '/images/mtsvadi1.jpg',
      badge: 'Popular',
      category: 'Mains',
    },

    {
      id : 2,
      name: 'Khinkali (6 pcs)',
      desc: 'Hand-folded dumplings filled with spiced meat broth',
      price: '₾ 18.00',
      photo: '/images/khinkali2.jpg',
      badge: "Chef's Pick",
      category: 'Mains',
    },

    {
      id : 3,
      name: 'Khachapuri Adjaruli',
      desc: 'Boat-shaped bread filled with melted cheese and egg',
      price: '₾ 22.00',
      photo: '/images/adjaruli3.avif',
      badge: null,
      category: 'Mains',
    },
    {
      id : 4,
      name: 'Lobiani',
      desc: 'Crispy flatbread stuffed with spiced kidney beans and herbs',
      price: '₾ 14.00',
      photo: '/images/lobiani4.webp',
      badge: null,
      category: 'Starters',
    },
    {
      id : 5,
      name: 'Badrijani Nigvzit',
      desc: 'Fried eggplant rolls filled with walnut and garlic paste',
      price: '₾ 16.00',
      photo: '/images/badrijani5.jpg',
      badge: 'Popular',
      category: 'Starters',
    },
    {
      id : 6,
      name: 'Pkhali (3 pcs)',
      desc: 'Spinach and walnut bites seasoned with Georgian spices',
      price: '₾ 12.00',
      photo: '/images/Pkhali6.jpg',
      badge: null,
      category: 'Starters',
    },
    {
      id : 7,
      name: 'Chakapuli',
      desc: 'Slow-braised lamb with tarragon and white wine sauce',
      price: '₾ 34.00',
      photo: '/images/chakphal7.jpg',
      badge: 'Seasonal',
      category: 'Mains',
    },
    {
      id : 8,
      name: 'Ojakhuri',
      desc: 'Pan-fried pork with potatoes, onion and fresh herbs',
      price: '₾ 26.00',
      photo: '/images/ojakhuri8.png',
      badge: null,
      category: 'Mains',
    },
    {
      id : 9,
      name: 'Chanakhi',
      desc: 'Clay pot stew of lamb, tomatoes, aubergine and potatoes',
      price: '₾ 30.00',
      photo: '/images/chanakhi9.jpg',
      badge: "Chef's Pick",
      category: 'Mains',
    },
    {
      id : 10,
      name: 'Lobio',
      desc: 'Slow-cooked red beans with walnuts, coriander and spices',
      price: '₾ 13.00',
      photo: '/images/Lobio10.jpg',
      badge: null,
      category: 'Starters',
    },
    {
      id : 11,
      name: 'Churchkhela',
      desc: 'Traditional walnut and grape juice candy on a string',
      price: '₾ 8.00',
      photo: '/images/churchkhela11.webp',
      badge: null,
      category: 'Desserts',
    },
    {
      id : 12,
      name: 'Pelamushi',
      desc: 'Thick grape pudding with walnuts, served chilled',
      price: '₾ 9.00',
      photo: '/images/pelamushi12.jpg',
      badge: null,
      category: 'Desserts',
    },
    {
      id : 13,
      name: 'Tklapi Ice Cream',
      desc: 'Homemade ice cream with tart plum fruit leather swirl',
      price: '₾ 11.00',
      photo: '/images/tklapi13.jpg',
      badge: 'New',
      category: 'Desserts',
    },
    {
      id : 14,
      name: 'Borjomi Lemonade',
      desc: 'Fresh tarragon lemonade with mint and sparkling water',
      price: '₾ 7.00',
      photo: '/images/borjomilimonati16.webp',
      badge: 'New',
      category: 'Drinks',
    },
    {
      id : 15,
      name: 'Rkatsiteli Wine',
      desc: 'Dry amber wine from Kakheti, served chilled by the glass',
      price: '₾ 15.00',
      photo: '/images/rqawiteli18.jpg',
      badge: null,
      category: 'Drinks',
    },
  ];
   
  ngOnInit(){
    this.filteredMenuItems = [...this.menuItems]
  }

   filterItems(){
    if (this.activeFilter === "All") {
    this.filteredMenuItems = this.menuItems;
  } else {
    this.filteredMenuItems = this.menuItems.filter(item => item.category === this.activeFilter);
  
  }
      
    
  }
  setFilter(cat : string) {
  this.activeFilter = cat;
  this.filterItems()
  }

  addToCart(item: any) {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem("itemToken") || "[]");
    
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
      existing.quantity++;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }
    
    localStorage.setItem("itemToken", JSON.stringify(cartItems));
  }
}
