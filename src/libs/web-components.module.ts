import { NgModule } from "@angular/core";

// "@web-components" has to be the same as tsconfig.json path key name
import { defineCustomElements } from "@web-components/loader";

import { MyComponent } from "./stencil-generated/proxies";

defineCustomElements(window);

@NgModule({
    imports: [],
    exports: [MyComponent],
    declarations: [MyComponent],
})

export class WebComponentsModule {}