import { Component, inject } from '@angular/core';
import { FileUploadService } from '../../core/file-upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-roadmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-roadmap.component.html',
  styleUrl: './modal-roadmap.component.scss'
})
export class ModalRoadmapComponent {
  private fileUploadService = inject(FileUploadService); 

  isDragging = false;
  files: File[] = [];
  filePreviews: string[] = [];

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFiles(files);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFiles(input.files);
    }
  }

  handleFiles(files: FileList) {
    Array.from(files).forEach(file => {
      this.files.push(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);

      // Subir archivo
      this.fileUploadService.uploadFile(file).subscribe({
        next: response => {
          console.log('Archivo subido con éxito', response);
        },
        error: error => {
          console.error('Error al subir el archivo', error);
        },
        complete: () => {
          console.log('Subida de archivo completa');
        }
      });
    });
  }

  isImage(fileUrl: string): boolean {
    return fileUrl.startsWith('data:image/');
  }
}
