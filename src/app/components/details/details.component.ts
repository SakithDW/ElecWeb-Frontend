import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { UserRecord } from '../../Models/userRecord';
import { FormService } from '../../_services/form.service';
import { startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator, MatPaginatorModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  loading = false;
  dataSource = new MatTableDataSource<UserRecord>();
  displayedColumns: string[] = [
    'name',
    'phone',
    'division',
    'reason',
    'createdAt',
  ];
  totalItems: number = 0;  // Total number of items across all pages
  pageSize: number = 10;   // Items per page
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getFormDetails(1);
  }

  ngAfterViewInit() {
    // Remove this line as we're handling pagination manually
    // this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    const pageIndex = event.pageIndex + 1; // Convert to 1-based index for the server
    this.getFormDetails(pageIndex);
  }

  getFormDetails(pageId: number) {
    this.loading = true;
    this.formService.getForm(pageId).subscribe({
      next: (res) => {
        this.dataSource.data = res.items;
        this.totalItems = res.totalPages * this.pageSize; // Calculate total items
        this.currentPage = res.currentPage - 1; // Convert to 0-based index for MatPaginator
        
        // Update paginator's page index if it doesn't match the current page
        if (this.paginator && this.paginator.pageIndex !== this.currentPage) {
          this.paginator.pageIndex = this.currentPage;
        }
        
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}