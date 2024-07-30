import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';
import { FileUploadService } from '../../../core/services/roadmap/file-upload.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-roadmap-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './roadmap-form.component.html',
  styleUrls: ['./roadmap-form.component.scss']
})
export class RoadmapFormComponent implements OnInit, AfterViewInit {
  private fileUploadService = inject(FileUploadService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  roadmaps: any[] = [];
  error: any = {};

  isDragging = false;
  files: File[] = [];
  filePreviews: string[] = [];
  submitted = false;
  errors: any = {};

  @Input() roadmapForm!: FormGroup;
  @Output() sentForm = new EventEmitter<{ image: string }>();

  @ViewChild('myModal') myModal!: ElementRef;

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
        this.uploadFiles(files); // Subir archivos inmediatamente
        this.closeModal(); // Cerrar modal automáticamente
      }
    }
  
    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.handleFiles(input.files);
        this.uploadFiles(input.files);
      }
    }

  ngOnInit(): void {
    this.roadmapForm = this.formBuilder.group({
      img: [null, Validators.required]
    });
    this.fileUploadService.getAllRoadmap().subscribe((result) => this.roadmaps = result);
  }

  ngAfterViewInit() {
    if (this.myModal) {
      const modalElement = this.myModal.nativeElement;
    }
  }

  get formControls() {
    return this.roadmapForm.controls;
  }

  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.roadmapForm.get('img')?.setValue(e.target.result); // Base64
        this.filePreviews = [e.target.result]; // Mostrar solo la última imagen
      };
      reader.readAsDataURL(file); // Convertir a base64
    } else {
      this.roadmapForm.get('img')?.setValue('');
      this.filePreviews = []; // Limpiar previas imágenes
    }
  }

  handleFiles(files: FileList) {
    this.filePreviews = []; // Limpiar imágenes previas antes de añadir nuevas
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Convertir a base64 y almacenar en filePreviews
        this.filePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file); // Convertir a base64
    });
  }

  uploadFiles(files: FileList) {
    Array.from(files).forEach(file => {
      this.fileUploadService.uploadFile(file).subscribe(
        (response) => {
          console.log('Archivo subido exitosamente:', response);
        },
        (error) => {
          console.error('Error al subir el archivo:', error);
        }
      );
    });
  }

  isImage(fileUrl: string): boolean {
    return fileUrl.startsWith('data:image/');
  }

  closeModal() {
    if (this.myModal) {
      const modalElement = this.myModal.nativeElement;
      if (modalElement) {
        const modalInstance = new (window as any).bootstrap.Modal(modalElement);
        modalInstance.hide();
      } else {
        console.error('El elemento del modal es undefined.');
      }
    } else {
      console.error('this.myModal es undefined. No se puede acceder al elemento del modal.');
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.roadmapForm.valid) {
      const base64Image = this.roadmapForm.get('img')?.value;
      const formData = {
        image: base64Image
      };

      this.sentForm.emit(formData); // Emitir el formulario al componente padre
    }
  }

  validarTipoArchivo: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: any } | null => {
    if (control.value && control.value instanceof File) {
      const fileType = control.value.type;
      if (!fileType.match(/image\/(jpeg|png|gif|jpg)/)) {
        return { invalidFileType: true };
      }
    }
    return null;
  };
}
