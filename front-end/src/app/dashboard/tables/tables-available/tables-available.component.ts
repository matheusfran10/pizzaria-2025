import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Tables } from 'src/app/services/models/table';

@Component({
  selector: 'app-tables-available',
  templateUrl: './tables-available.component.html',
  styleUrls: ['./tables-available.component.scss']
})
export class TablesAvailableComponent implements OnInit{
   tables: Tables[] = [];
  editingTableId: number | null = null;
  newTableNumber: number = 0;

  ngOnInit(): void {
    this.loadMockTables();
  }

  loadMockTables() {
    const mockTables: Tables[] = [
      { id: 1, number: 1, status: 0, created_at: new Date(), updated_at: new Date() },
      { id: 2, number: 2, status: 1, created_at: new Date(), updated_at: new Date() },
      { id: 3, number: 3, status: 0, created_at: new Date(), updated_at: new Date() },
      { id: 4, number: 4, status: 0, created_at: new Date(), updated_at: new Date() },
    ];

    of(mockTables).subscribe((res) => (this.tables = res));
  }

  getStatusLabel(status: number): string {
    return status === 1 ? 'Ocupada' : 'Disponível';
  }
}
