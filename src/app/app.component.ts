import { Component, computed, signal, effect } from '@angular/core';

declare var google: any;

interface Vehicle {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // Define a signal for the list of items
  Hello = signal('Hello');
  word = signal('word');

  items = [    
    { name: 'Product A', price: 10 },    
    { name: 'Product B', price: 15 },   
     { name: 'Product C', price: 20 },  
  ];
  itemList = signal(this.items);
  map: any;
  //Define a computed value for the total price
  newWord = computed(() => { return this.Hello() + " " + this.word(); });
  totalPrice = computed(() => {
    return this.itemList().reduce((total, item) => total + item.price, 0);
  });

  removeItem(item: any) {
    // Update the itemList signal by removing the selected item
    this.itemList.set(
      this.itemList().filter((i) => i !== item)
    );
  }

  constructor() {



    //this.Hello.set('Hello World');

    //resucing the value of signal
    setTimeout(() => {
      //this.Hello.update((value)=> value = "Rajat");
      // this.itemList.update(qty => qty.filter((i) => i.price > 10));
      // this.itemList.mutate(qty => qty[0]['price'] = 30);
    }, 5000);



    // Effect to log the total price whenever any of the signals change
    effect(() => {
      console.log(`Is Adult: ${this.totalPrice()}`);
    });
  }

  ngOninit(){}
  
}
