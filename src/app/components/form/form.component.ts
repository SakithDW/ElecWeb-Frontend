import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private fb = inject(FormBuilder);
  elecForm: FormGroup;

  constructor() {
    this.elecForm= this.initForm();
    
  }

  private initForm(): FormGroup {
    return this.fb.group({
      name: ['',Validators.required],
      contactNo: ['',Validators.required],
      reason:['',Validators.required]
    });
  }
}
