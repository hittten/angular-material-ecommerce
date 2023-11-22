import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {SwUpdate} from "@angular/service-worker";
import {filter} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet]
})
export class AppComponent {
  private snackBar = inject(MatSnackBar)
  private updates = inject(SwUpdate)

  constructor() {
    this.updates.versionUpdates.pipe(
      takeUntilDestroyed(),
      filter(event => event.type === 'VERSION_READY'),
    )
      .subscribe((versionEvent) => {
        console.log('build version', versionEvent)
        this.snackBar
          .open('Hay una versión nueva de la aplicación', 'Actualizar')
          .onAction().pipe(takeUntilDestroyed())
          .subscribe(async () => {
            await this.updates.activateUpdate()
            document.location.reload()
          })
      })
  }
}
