import {
  NgModule
} from '@angular/core';

import {
  SkyDemoComponentsModule
} from './components/demo-components.module';

import {
  SkyInlineFormDemoTileComponent
} from './demos/inline-form/inline-form-demo-tile.component';

import {
  SkyDemoTitleService
} from './shared/title.service';

require('style-loader!./styles.scss');

@NgModule({
  entryComponents: [
    SkyInlineFormDemoTileComponent
  ],
  exports: [
    SkyDemoComponentsModule
  ],
  providers: [
    SkyDemoTitleService
  ]
})
export class AppExtrasModule { }
