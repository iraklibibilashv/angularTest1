import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  categories = ["All", "Mains", "Starters", "Desserts", "Drinks"]
  activeFilter = "All"
  filteredMenuItems : any[] = []
  menuItems = [
    {
      name: 'Mtsvadi (Georgian BBQ)',
      desc: 'Marinated pork skewers, grilled over open fire with herb sauce',
      price: '₾ 28.00',
      photo: '/images/mtsvadi1.jpg',
      badge: 'Popular',
      category: 'Mains',
    },

    {
      name: 'Khinkali (6 pcs)',
      desc: 'Hand-folded dumplings filled with spiced meat broth',
      price: '₾ 18.00',
      photo: '/images/khinkali2.jpg',
      badge: "Chef's Pick",
      category: 'Mains',
    },

    {
      name: 'Khachapuri Adjaruli',
      desc: 'Boat-shaped bread filled with melted cheese and egg',
      price: '₾ 22.00',
      photo: '/images/adjaruli3.avif',
      badge: null,
      category: 'Mains',
    },
    {
      name: 'Lobiani',
      desc: 'Crispy flatbread stuffed with spiced kidney beans and herbs',
      price: '₾ 14.00',
      photo: '/images/lobiani4.webp',
      badge: null,
      category: 'Starters',
    },
    {
      name: 'Badrijani Nigvzit',
      desc: 'Fried eggplant rolls filled with walnut and garlic paste',
      price: '₾ 16.00',
      photo: '/images/badrijani5.jpg',
      badge: 'Popular',
      category: 'Starters',
    },
    {
      name: 'Pkhali (3 pcs)',
      desc: 'Spinach and walnut bites seasoned with Georgian spices',
      price: '₾ 12.00',
      photo: '/images/Pkhali6.jpg',
      badge: null,
      category: 'Starters',
    },
    {
      name: 'Chakapuli',
      desc: 'Slow-braised lamb with tarragon and white wine sauce',
      price: '₾ 34.00',
      photo: '/images/chakphal7.jpg',
      badge: 'Seasonal',
      category: 'Mains',
    },
    {
      name: 'Ojakhuri',
      desc: 'Pan-fried pork with potatoes, onion and fresh herbs',
      price: '₾ 26.00',
      photo: '/images/ojakhuri8.png',
      badge: null,
      category: 'Mains',
    },
    {
      name: 'Chanakhi',
      desc: 'Clay pot stew of lamb, tomatoes, aubergine and potatoes',
      price: '₾ 30.00',
      photo: '/images/chanakhi9.jpg',
      badge: "Chef's Pick",
      category: 'Mains',
    },
    {
      name: 'Lobio',
      desc: 'Slow-cooked red beans with walnuts, coriander and spices',
      price: '₾ 13.00',
      photo: '/images/Lobio10.jpg',
      badge: null,
      category: 'Starters',
    },
    {
      name: 'Churchkhela',
      desc: 'Traditional walnut and grape juice candy on a string',
      price: '₾ 8.00',
      photo: '/images/churchkhela11.webp',
      badge: null,
      category: 'Desserts',
    },
    {
      name: 'Pelamushi',
      desc: 'Thick grape pudding with walnuts, served chilled',
      price: '₾ 9.00',
      photo: '/images/pelamushi12.jpg',
      badge: null,
      category: 'Desserts',
    },
    {
      name: 'Tklapi Ice Cream',
      desc: 'Homemade ice cream with tart plum fruit leather swirl',
      price: '₾ 11.00',
      photo: '/images/tklapi13.jpg',
      badge: 'New',
      category: 'Desserts',
    },
    {
      name: 'Borjomi Lemonade',
      desc: 'Fresh tarragon lemonade with mint and sparkling water',
      price: '₾ 7.00',
      photo: '/images/borjomilimonati16.webp',
      badge: 'New',
      category: 'Drinks',
    },
    {
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
}
