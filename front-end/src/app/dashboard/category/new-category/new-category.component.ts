import { Component } from '@angular/core';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent {
  categoryName: string = '';
  
  cadastrarCategoria() {
    if (this.categoryName.trim()) {
      console.log('Categoria cadastrada:', this.categoryName);  
      this.categoryName = ''; 
    }
  }
}
