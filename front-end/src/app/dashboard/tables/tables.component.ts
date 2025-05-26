import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Tables } from 'src/app/services/models/table';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {
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
      { id: 4, number: 4, status: 1, created_at: new Date(), updated_at: new Date() },
    ];

    of(mockTables).subscribe((res) => (this.tables = res));
  }

  getStatusLabel(status: number): string {
    return status === 1 ? 'Ocupada' : 'Disponível';
  }

  openTable(table: Tables) {
    table.status = 1;
    table.updated_at = new Date();
  }

  closeTable(table: Tables) {
    table.status = 0;
    table.updated_at = new Date();
  }

  enableEdit(table: Tables) {
    this.editingTableId = table.id;
    this.newTableNumber = table.number;
  }

  saveEdit(table: Tables) {
    table.number = this.newTableNumber;
    table.updated_at = new Date();
    this.editingTableId = null;
  }

  cancelEdit() {
    this.editingTableId = null;
  }
}