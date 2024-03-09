import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  recipes:Recipe[]=[
    new Recipe('A test Recipe', 'this  is a test recipe', 'https://imgs.search.brave.com/DyeEaReZlgndfSbiH2Z3ltGK5pTEOlQDJiUJ96QBYAo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/aWctc2FuZHdpY2gt/aGFtYnVyZ2VyLXdp/dGgtanVpY3ktYmVl/Zi1idXJnZXItY2hl/ZXNlLXRvbWF0by1y/ZWQtb25pb24td29v/ZGVuLXRhYmxlXzI4/MjktMTk2MzEuanBn/P3NpemU9NjI2JmV4/dD1qcGc'),
    new Recipe('A test Recipe', 'this  is a test recipe', 'https://imgs.search.brave.com/DyeEaReZlgndfSbiH2Z3ltGK5pTEOlQDJiUJ96QBYAo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/aWctc2FuZHdpY2gt/aGFtYnVyZ2VyLXdp/dGgtanVpY3ktYmVl/Zi1idXJnZXItY2hl/ZXNlLXRvbWF0by1y/ZWQtb25pb24td29v/ZGVuLXRhYmxlXzI4/MjktMTk2MzEuanBn/P3NpemU9NjI2JmV4/dD1qcGc')
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(){

  }



}
