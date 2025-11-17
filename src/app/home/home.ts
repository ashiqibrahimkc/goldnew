import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Category {
  title: string;
  img: string;
  old: number;
  new:number;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   categories: Category[] = [
    { title: 'Rings',       img: '/assets/image/ring.png', old:100,new: 95      },
    { title: 'Necklaces',   img: '/assets/image/necklace.png', old:200,new: 195 },
    { title: 'Earrings',    img: '/assets/image/BRACELET.png', old:400,new:  395 },
    { title: 'Bracelets',   img: '/assets/image/ear.png', old:500,new: 495  },
    { title: 'Watches',     img: '/assets/image/ring.png', old:600,new: 595    },
    { title: 'Brooches',    img: '/assets/image/ear.png', old:700,new: 695   },
    { title: 'Anklets',     img: '/assets/image/necklace.png', old:800,new: 795     },
  ];

  getRandom(){
    return [...this.categories]
    .sort(()=>Math.random()-0.5)
    .slice(0,4);
  }
  randomCategories: Category[] = this.getRandom();
}
