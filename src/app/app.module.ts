import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';

@NgModule({
  bootstrap: [],
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [],
})
export class AppModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const customElement = createCustomElement(HeaderComponent, {
      injector: this.injector
    });
    customElements.define('axiom-header', customElement);
  }

}
