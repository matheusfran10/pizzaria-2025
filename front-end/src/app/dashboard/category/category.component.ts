import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
categories = [
    { id: '1', name: 'Pizzas', created_at: '2025-01-01' },
    { id: '2', name: 'Bebidas', created_at: '2025-01-05' },
    { id: '3', name: 'Sobremesas', created_at: '2025-01-10' },
  ];

 constructor() {}

  ngOnInit(): void {}

  searchTerm = '';

filteredCategories() {
  return this.categories.filter(cat =>
    cat.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

editarCategoria(cat: any) {
  console.log('Editar categoria:', cat);
}

deletarCategoria(cat: any) {
  console.log('Excluir categoria:', cat);
}

}
