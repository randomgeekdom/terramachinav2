import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import { HomeComponent } from '@pages/home/home.component';
import { ResourcesComponent } from '@pages/resources/resources.component';
import { ItemsComponent } from '@pages/items/items.component';
import { BestiaryComponent } from '@pages/bestiary/bestiary.component';
import { SampleCustomMovesComponent } from '@pages/sample-custom-moves/sample-custom-moves.component';
import { NpcGeneratorComponent } from '@pages/npc-generator/npc-generator.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'resources',
                component: ResourcesComponent
            },
            {
                path: 'items',
                component: ItemsComponent
            },
            {
                path: 'bestiary',
                component: BestiaryComponent
            },
            {
                path: 'sample-custom-moves',
                component: SampleCustomMovesComponent
            },
            {
                path: 'npc-generator',
                component: NpcGeneratorComponent
            }
        ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
