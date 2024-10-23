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

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private divisionService = inject(DivisionService);
  private formService = inject(FormService);
  elecForm: FormGroup;
  divisions: Division[] = [];
  constructor() {
    this.elecForm = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone:['',Validators.required],
      division: ['', Validators.required],
      reason: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.loadDivisions();
  }

  private loadDivisions() {
    this.divisionService.getDivision().subscribe({
      next: (data) => {
        this.divisions = data;
      },
      error: (error) => {
        console.error('Error fetching divisions :',error);
      },
    });
  }

  onSubmit() {
    if (this.elecForm.valid) {
      debugger;
      this.formService.submitForm(this.elecForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully', response);
          alert('Form submitted successfully!');
          this.elecForm.reset();
        },
        error: (error) => {
          console.error('Error submitting form', error);
          alert('Error submitting form. Please try again.');
        }
      });
    }
  }
}
