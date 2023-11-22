import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-signals-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule, MatDividerModule, MatInputModule],
  templateUrl: './signals-page.component.html',
  styleUrl: './signals-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsPageComponent {
  //normal
  normalCount = 0
  text = new FormControl('')

  //signals
  count = signal(0)
  showCount = signal(false);
  data = signal(['test'], {equal: (a, b)=>{
    console.log("calculando igualdad")
      for (let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
          return false;
        }
      }

      return true
    }})
  dataEffect = effect(() => console.log('[DATA-EFFECT] -', this.data()))

  //computed
  doubleCount = computed(() => {
    console.log("[COMPUTED] - doubleCount")
    return this.count() * 2;
  })
  isOdd = computed(() => this.count() % 2 === 0)
  conditionalCount = computed(() => {
    console.log("[COMPUTED] - conditionalCount")
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  //effects
  myEffect = effect(() => {
    console.log(`[MY-EFFECT] - The current count is: ${this.count()}`);
  });
  // mySecondEffect = effect((onCleanup) => {
  //   const int = setInterval(() => console.log('hello!'), 1000)
  //
  //   onCleanup(() => clearInterval(int))
  // }, {manualCleanup: true});

  //functions methods
  normalDoubleCount() {
    console.log("[FUNCTION] - normalDoubleCount")
    return this.normalCount * 2
  }

  updateCount() {
    this.count.update(count => count + 1)
    this.data.update(value => [...value])
  }

  updateNormal() {
    this.normalCount++
  }

  deleteEffect() {
    this.myEffect.destroy()
    // this.mySecondEffect.destroy()
  }
}
