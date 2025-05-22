import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/produtc.service';

@Component({
  selector: 'app-produtc',
  templateUrl: './produtc.component.html',
  styleUrls: ['./produtc.component.scss']
})
export class ProdutcComponent {
produtos: any[] = [];
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.productService.getAll().subscribe((res) => {
      this.produtos = res;
    });
  }

  filteredProducts() {
    return this.produtos.filter(prod =>
      prod.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deletarProduto(prod: any) {
    if (confirm(`Deseja realmente excluir o produto "${prod.name}"?`)) {
      this.productService.delete(prod.id).subscribe(() => {
        this.listarProdutos();
      });
    }
  }

  // testes

  products = [
  {
    id: 1,
    name: 'Café Expresso',
    category: 'Bebidas',
    price: 8.5,
    created_at: new Date('2025-01-15')
  },
  {
    id: 2,
    name: 'Pão de Queijo',
    category: 'Lanches',
    price: 5.0,
    created_at: new Date('2025-03-01')
  },
  {
    id: 3,
    name: 'Torta de Frango',
    category: 'Salgados',
    price: 12.0,
    created_at: new Date('2025-04-10')
  },
  {
    id: 4,
    name: 'Suco Natural',
    category: 'Bebidas',
    price: 6.0,
    created_at: new Date('2025-02-20')
  }
];

}
