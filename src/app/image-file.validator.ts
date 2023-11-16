import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function imageFileValidator(allowedTypes: string[], maxSizeMB: number): ValidatorFn {
  return (control: AbstractControl<File | null>): ValidationErrors | null => {
    const file = control.value
    const maxSizeBytes = maxSizeMB * 1024 * 1024

    if (!file) {
      return null
    }

    if (!allowedTypes.includes(file.type)) {
      return {
        fileType: {
          actual: file.type,
          allowedTypes: allowedTypes,
        }
      }
    }

    if (file.size > maxSizeBytes) {
      return {
        maxSize: {
          actual: file.size,
          max: maxSizeBytes,
        }
      };
    }

    return null;
  };
}
