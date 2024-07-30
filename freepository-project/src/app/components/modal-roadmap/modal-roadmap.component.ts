import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { FileUploadService } from '../../core/services/roadmap/file-upload.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Roadmap } from '../../shared/models/roadmap';

@Component({
  selector: 'app-modal-roadmap',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-roadmap.component.html',
  styleUrl: './modal-roadmap.component.scss'
})
export class ModalRoadmapComponent {
  // private fileUploadService = inject(FileUploadService); // Inyectar el servicio sin usar constructor

  // @Input() roadmapForm!:FormGroup;
  // @Output() sentForm=new EventEmitter<Roadmap>();
  
  // isDragging = false;
  // files: File[] = [];
  // filePreviews: string[] = [];
  
  // @ViewChild('myModal') myModal!: ElementRef; // Referencia al modal

  // onDragOver(event: DragEvent) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.isDragging = true;
  // }

  // onDragLeave(event: DragEvent) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.isDragging = false;
  // }

  // onDrop(event: DragEvent) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.isDragging = false;

  //   const files = event.dataTransfer?.files;
  //   if (files && files.length > 0) {
  //     this.handleFiles(files);
  //     this.uploadFiles(); // Subir archivos inmediatamente
  //     this.closeModal(); // Cerrar modal automáticamente
  //   }
  // }

  // onFileSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.handleFiles(input.files);
  //   }
  // }

  // handleFiles(files: FileList) {
  //   Array.from(files).forEach(file => {
  //     this.files.push(file);
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.filePreviews.push(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // }

  // isImage(fileUrl: string): boolean {
  //   return fileUrl.startsWith('data:image/');
  // }

  // uploadFiles() {
  //   this.files.forEach(file => {
  //     this.fileUploadService.uploadFile(file).subscribe({
  //       next: response => {
  //         console.log('Archivo subido con éxito', response);
  //       },
  //       error: error => {
  //         console.error('Error al subir el archivo', error);
  //       },
  //       complete: () => {
  //         console.log('Subida de archivo completa');
  //       }
  //     });
  //   });
  // }

  // closeModal() {
  //   const modalElement = this.myModal.nativeElement;
  //   const modalInstance = new (window as any).bootstrap.Modal(modalElement);
  //   modalInstance.hide(); // Cerrar modal
  // }

  // submit(){
  //   const roadmap:Roadmap={
  //     image:this.roadmapForm.controls["image"].value;
  //   }
  //   this.sentForm.emit(roadmap);
  // }
}
