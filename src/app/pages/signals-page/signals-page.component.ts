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
  // SIGNALS
  normalCount = 0
  count = signal(0)

  updateCount() {
    this.normalCount++
    this.count.update(count => count + 1)
    // this.count.set(this.count() + 1) // NEVER!
  }

  resetCount() {
    this.normalCount = 0
    this.count.set(0)
  }

  // COMPUTED SIGNALS
  // normalDoubleCount() {
  //   console.warn("F - normalDoubleCount")
  //   return this.normalCount * 2
  // }
  //
  // doubleCount = computed(() => {
  //   console.log("S -doubleCount")
  //   return this.count() * 2;
  // })
  //
  // text = new FormControl('')

  // // COMPUTED SIGNALS - dynamic dependencies
  // showCount = signal(false);
  // conditionalCount = computed(() => {
  //   console.log("CS - conditionalCount")
  //   if (this.showCount()) {
  //     return `The count is ${this.count()}.`;
  //   } else {
  //     return 'Nothing to see here!';
  //   }
  // });
  // isOdd = computed(() => this.count() % 2 === 0)

  // // EFFECTS
  // constructor() {
  //   effect(() => {
  //     console.log(`EF - count is: ${this.count()}`);
  //   });
  // }
  //
  // myEffect = effect(() => {
  //   console.log(`myEF - The current count is: ${this.count()}`);
  // });
  //
  // deleteEffect() {
  //   this.myEffect.destroy()
  // }

  // // SIGNAL - equality functions
  // data = signal(['test'], {
  //   // equal: (a, b) => {
  //   //   console.log("calculando igualdad", a, b)
  //   //   if (a.length !== b.length) {
  //   //     return false;
  //   //   }
  //   //
  //   //   for (let i = 0; i < a.length; i++) {
  //   //     if (a[i] !== b[i]) return false;
  //   //   }
  //   //   return true;
  //   // }
  // })
  // dataEffect = effect(() => console.log('[dataEffect] -', this.data()))
  //
  // updateData() {
  //   // const words = ["hello", "how are you", "bye", "hi!"]
  //   // const randomIndex = Math.floor(Math.random() * words.length);
  //   // const selectedWord = words[randomIndex];
  //   //
  //   //
  //   // this.data.update(value => [...value, selectedWord])
  //   this.data.update(value => [...value])
  // }


  // // EFFECTS - cleanup functions
  // mySecondEffect = effect((onCleanup) => {
  //   const int = setInterval(() => console.log('hello!'), 1000)
  //
  //   onCleanup(() => clearInterval(int))
  // }, {manualCleanup: true});
}
