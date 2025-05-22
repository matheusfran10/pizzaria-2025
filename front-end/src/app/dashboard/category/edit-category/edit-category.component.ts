import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit{
categoria = {
    id: 0,
    name: ''
  };

  constructor( private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // this.categoriaService.getCategoriaById(id).subscribe(data => {
    //   this.categoria = data;
    // });
  }

  atualizarCategoria() {
    // this.categoriaService.updateCategoria(this.categoria.id, this.categoria).subscribe(() => {
    //   this.router.navigate(['/dashboard/categorias']);
    // });
  }
}
