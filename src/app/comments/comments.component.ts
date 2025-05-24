import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Comment {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  birthDate: Date;
  rating: number;
  message: string;
  createdAt: Date;
}

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  private fb = inject(FormBuilder);
  private nextId = 1;
  currentYear = new Date().getFullYear();

  comments: Comment[] = [];

  commentForm = this.fb.group({
    fullName: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[а-яА-ЯёЁa-zA-Z\s]+$/)
    ]],
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]],
    phone: ['', [
      Validators.required,
      Validators.pattern(/^\+?[0-9]{10,12}$/),
      Validators.maxLength(12)
    ]],
    birthDate: ['', [
      Validators.required,
      this.maxDateValidator(new Date('2025-01-01'))
    ]],
    rating: [0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ]],
    message: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500)
    ]]
  });

  private maxDateValidator(maxDate: Date) {
    return (control: any) => {
      const selectedDate = new Date(control.value);
      return selectedDate <= maxDate ? null : { maxDate: true };
    };
  }

  get fullName() { return this.commentForm.get('fullName'); }
  get email() { return this.commentForm.get('email'); }
  get phone() { return this.commentForm.get('phone'); }
  get birthDate() { return this.commentForm.get('birthDate'); }
  get rating() { return this.commentForm.get('rating'); }
  get message() { return this.commentForm.get('message'); }

  addComment() {
    if (this.commentForm.valid) {
      const newComment: Comment = {
        id: this.nextId++,
        fullName: this.commentForm.value.fullName!.trim(),
        email: this.commentForm.value.email!.trim(),
        phone: this.commentForm.value.phone!.trim(),
        birthDate: new Date(this.commentForm.value.birthDate!),
        rating: Number(this.commentForm.value.rating),
        message: this.commentForm.value.message!.trim(),
        createdAt: new Date()
      };
      
      this.comments.unshift(newComment);
      this.commentForm.reset({
        rating: 0
      });
    }
  }

  deleteComment(id: number) {
    this.comments = this.comments.filter(comment => comment.id !== id);
  }
}