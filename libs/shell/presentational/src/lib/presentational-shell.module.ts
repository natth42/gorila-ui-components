import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { GdkModule } from '@gorilainvest/gdk';
import { ArrowVariationModule } from '@gorilainvest/ui-toolkit/arrow-variation';
import { DataFormatterModule } from '@gorilainvest/ui-toolkit/data-formatter';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';

import { PresentationalComponent } from './presentational/presentational.component';
import { ArrowVariationComponent } from './ui/arrow-variation/arrow-variation.component';
import { DataFormatterComponent } from './ui/data-formatter/data-formatter.component';
import { PipesComponent } from './ui/pipes';

export class TranslateServicePresentational {
  public instant = (str) => str;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    GdkModule,
    ArrowVariationModule,
    DataFormatterModule,
    TranslateModule.forRoot({}),
    PipesModule,
    RouterModule.forChild([
      {
        path: 'arrow-variation',
        pathMatch: 'full',
        component: ArrowVariationComponent
      },
      {
        path: 'data-formatter',
        pathMatch: 'full',
        component: DataFormatterComponent
      },
      {
        path: 'pipes',
        pathMatch: 'full',
        component: PipesComponent
      },
      { path: '', pathMatch: 'full', component: PresentationalComponent }
    ])
  ],
  providers: [
    { provide: TranslateService, useClass: TranslateServicePresentational }
  ],
  declarations: [ArrowVariationComponent, PresentationalComponent, DataFormatterComponent, PipesComponent],
  exports: [ArrowVariationComponent, DataFormatterComponent, PipesComponent]
})
export class PresentationalShellModule {}
