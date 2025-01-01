import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PutApiService } from '../put-api.service';

@Component({
  selector: 'app-put-api-service',
  imports: [ReactiveFormsModule],
  templateUrl: './put-api-service.component.html',
  styleUrl: './put-api-service.component.css'
})
export class PutApiServiceComponent {
  userForm: FormGroup;

  response: string | null = null;

  constructor(private fb: FormBuilder, private userService: PutApiService) {
    this.userForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    if(this.userForm.valid){
      const { id, name, email } = this.userForm.value;
      this.userService.updateUser(id, {name, email}).subscribe({
        next: ()=> {
          this.response = 'USer updated successfully!';
          this.userForm.reset();
        },
        error: (err) => {
          this.response = 'Error updating data';
        }
      })
    }
  }
}
