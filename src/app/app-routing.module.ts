import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'player', loadChildren: './player/player.module#PlayerModule' },
    { path: 'player-detail/:id', loadChildren: './player-detail/player-detail.module#PlayerDetailModule' },
    { path: 'player-edit/:id', loadChildren: './player-edit/player-edit.module#PlayerEditModule' },
    { path: 'player-add', loadChildren: './player-add/player-add.module#PlayerAddModule' },
    { path: 'league', loadChildren: './league/league.module#LeagueModule' },
    { path: 'league-edit/:id', loadChildren: './league-edit/league-edit.module#LeagueEditModule' },
    { path: 'league-detail/:id', loadChildren: './league-detail/league-detail.module#LeagueDetailModule' },
    { path: 'league-add', loadChildren: './league-add/league-add.module#LeagueAddModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
