/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@web-components/dist/components';




export declare interface MyComponent extends Components.MyComponent {
  /**
   *  
   */
  ratingUpdated: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['emptyStarIcon', 'fullStarIcon', 'maxValue', 'numberOfComments', 'productName', 'titleOfComment', 'value']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['emptyStarIcon', 'fullStarIcon', 'maxValue', 'numberOfComments', 'productName', 'titleOfComment', 'value']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ratingUpdated']);
  }
}
