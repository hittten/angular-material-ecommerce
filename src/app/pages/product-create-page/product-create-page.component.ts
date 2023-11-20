import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductInput, ProductService} from "../../modules/product/product.service";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CdkDropList} from "@angular/cdk/drag-drop";
import {imageFileValidator} from "../../image-file.validator";
import {SizeBytesPipe} from "../../size-bytes.pipe";
import {ProductModule} from "../../modules/product/product.module";
import {firstValueFrom} from "rxjs";

type WithFormControl<T> = {
  [P in keyof T]: FormControl<T[P]>;
};

//TODO: signals

type ProductForm = WithFormControl<ProductInput>

@Component({
  selector: 'app-product-create-page',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CdkDropList,
    ProductModule,
  ],
  providers: [SizeBytesPipe],
  templateUrl: './product-create-page.component.html',
  styleUrl: './product-create-page.component.scss'
})
export class ProductCreatePageComponent {
  @ViewChild("formElement") formElement!: ElementRef<HTMLFormElement>

  private formBuilder = inject(FormBuilder)
  private productService = inject(ProductService)
  private sizeBytesPipe = inject(SizeBytesPipe)

  isDragOver = false;
  imagePreviewURL = ''

  // TODO: fix hold image error.

  productForm = this.formBuilder.group<ProductForm>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    price: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(1000000)]
    }),
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(300)],
    }),
    image: new FormControl<File>(new File([], ''), {
      nonNullable: true,
      validators: imageFileValidator(['image/jpeg', 'image/png', 'image/gif'], 2),
    }),
  });

  getError(field: keyof ProductInput): string {
    const control = this.productForm.controls[field];
    if (!control.dirty || !control.errors) {
      return '';
    }

    const errors = control.errors;

    if (errors['required']) {
      return 'Campo requerido';
    }

    if (errors['minlength']) {
      return `Mínimo ${errors['minlength']["requiredLength"]} caracteres`;
    }

    if (errors['maxlength']) {
      return `Máximo ${errors['maxlength']["requiredLength"]} caracteres`;
    }

    if (errors['min']) {
      return `Mínimo ${errors['min']["min"]}`;
    }

    if (errors['max']) {
      return `Máximo ${errors['max']["max"]}`;
    }

    if (errors['fileType']) {
      const error = errors['fileType']
      return `El tipo de archivo: "${error['actual']}" es inválido. Los permitidos son: ${error['allowedTypes'].join(', ')}`;
    }

    if (errors['maxSize']) {
      return `El archivo es demasiado grande. ${this.sizeBytesPipe.transform(errors['maxSize']['actual'])}`;
    }

    return 'inválido';
  }

  dragEnter() {
    this.productForm.controls.image.markAsDirty()
    this.isDragOver = true
  }

  dragOver(dragEvent: DragEvent) {
    dragEvent.preventDefault()
  }

  dropHandler(dragEvent: DragEvent) {
    dragEvent.preventDefault()
    this.isDragOver = false

    const file = dragEvent.dataTransfer?.files[0]

    this.setFile(file)
  }

  dragLeave() {
    this.isDragOver = false
  }

  fileChange(event: Event) {
    this.productForm.controls.image.markAsDirty()
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]

    this.setFile(file)
  }

  async submit() {
    if (!this.productForm.valid) {
      return;
    }

    const product = this.productForm.getRawValue()
    await firstValueFrom(this.productService.create(product))
    this.reset()
  }

  reset() {
    this.imagePreviewURL = ''
    this.formElement.nativeElement.reset()
  }

  private setFile(file?: File) {
    if (file) {
      console.log('Selected file', file)

      this.productForm.patchValue({image: file})
      if (!this.productForm.controls.image.hasError('fileType')) {
        this.imagePreviewURL = URL.createObjectURL(file)
      }
    }
  }
}
