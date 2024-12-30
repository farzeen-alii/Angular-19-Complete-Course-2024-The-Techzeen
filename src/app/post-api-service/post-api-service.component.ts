import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostApiService } from '../post-api.service';

@Component({
  selector: 'app-post-api-service',
  imports: [ReactiveFormsModule],
  templateUrl: './post-api-service.component.html',
  styleUrl: './post-api-service.component.css'
})
export class PostApiServiceComponent {
  userForm: FormGroup;

  response: string | null = null;

  constructor(private fb: FormBuilder, private userService: PostApiService){
    this.userForm = this.fb.group({
      name: this.fb.nonNullable.control('', Validators.required),
      email: this.fb.nonNullable.control('',[Validators.required, Validators.email])
    })
  }
  onSubmit(){
    if(this.userForm.valid){
      const user = this.userForm.value as { name: string; email: string};
      this.userService.addUser(user).subscribe({
        next: () => {
          this.response = 'User added successfully!';
          this.userForm.reset();
        },
        error: (err) => {
          this.response = 'Error adding user: ' + err.message;
        }
      })
    }
  }
}
