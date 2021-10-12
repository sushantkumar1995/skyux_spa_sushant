import {
  NgModule
} from '@angular/core';
import {
  SkyAgGridModule
} from '@skyux/ag-grid';
import {
  SkyAvatarModule
} from '@skyux/avatar';
import {
  SkyIdModule
} from '@skyux/core';
import {
  SkyDatepickerModule
} from '@skyux/datetime';
import {
  SkyInputBoxModule
} from '@skyux/forms';
import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';
import {
  SkyFluidGridModule
} from '@skyux/layout';
import {
  SkyNavbarModule
} from '@skyux/navbar';
import {
  SkyPhoneFieldModule
} from '@skyux/phone-field';
import {
  SkyThemeModule
} from '@skyux/theme';
import {
  SkyEmailValidationModule
} from '@skyux/validation';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyInputBoxModule,
    SkyThemeModule,
    SkyAgGridModule,
    SkyIdModule,
    SkyEmailValidationModule,
    SkyPhoneFieldModule,
    SkyDatepickerModule

  ]
})
export class AppSkyModule { }
