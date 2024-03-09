import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{

  ingedients:Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('Banana', 10)
  ];

  constructor(){}
  ngOnInit(): void {
      
  }

}
