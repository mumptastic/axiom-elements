import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'axiom-header',
  templateUrl: './header.component.html',
  styles: [
    `
      header {
        display: flex;
        background-color: var(--background-color);
        color: var(--color);
        height: var(--height);

        .left,
        .right {
          display: flex;
          width: 100%;
        }

        .left .title {
          margin: auto;
        }
      }
    `
  ]
})
export class HeaderComponent {

  @HostBinding("style.--background-color")
  @Input()
  public backgroundColor: string = '#7393B3';

  @HostBinding("style.--color")
  @Input()
  public color: string = 'white';

  @HostBinding("style.--height")
  @Input()
  public height: string = '50px';

  @Input()
  public title!: string;

}
