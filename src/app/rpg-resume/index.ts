import {ViewComponents} from './view-components';
import {RpgResume} from './rpg-resume.component';
import {RpgRouting} from './rpg-resume.routes';
import {RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';

@NgModule({
    imports: [ViewComponents, RpgRouting],
    declarations: [RpgResume],
    exports: [RouterModule, ViewComponents]
})
export class RpgResumeMod
{
        
}

export * from './rpg-resume.component';
export * from './rpg-resume.routes';