import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DivisionService } from '../../_services/division.service';
import { Division } from '../../Models/division';
import { FormService } from '../../_services/form.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ElectionFlyerComponent } from '../election-flyer/election-flyer.component';
@Component({
  selector: 'app-flyer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SweetAlert2Module, ElectionFlyerComponent],
  templateUrl: './flyer.component.html',
  styleUrl: './flyer.component.css'
})
export class FlyerComponent implements OnInit {
  private fb = inject(FormBuilder);
  private divisionService = inject(DivisionService);
  private formService = inject(FormService);
  private router = inject(Router);
  candidateImage: string = '/assets/candidate_img2.png';

  elecForm: FormGroup;
  divisions: Division[] = [];
  constructor() {
    this.elecForm = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      division: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadDivisions();
  }

  private loadDivisions() {
    this.divisionService.getDivision().subscribe({
      next: (res) => {
        this.divisions = res.data;
      },
      error: (error) => {
        console.error('Error fetching divisions :', error);
      },
    });
  }

  onSubmit() {
    if (this.elecForm.valid) {
      this.formService.submitForm(this.elecForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully', response);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Saved Successfully',
            showConfirmButton: false,
            timer: 2000,
          });
          this.elecForm.reset();
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        },
        error: (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'error occured',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    }
  }
}
