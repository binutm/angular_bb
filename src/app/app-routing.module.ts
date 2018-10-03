import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { LoginGuard } from './login.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatedDatasourcesComponent } from './components/created-datasources/created-datasources.component';
import { PageSignupComponent } from './page-signup/page-signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
	{ path: '',       component: LandingPageComponent },
	{ path: 'login',  component: PageLoginComponent   },
	{ path: 'signup', component: PageSignupComponent  },
	{ path: 'profile',component: ProfileComponent     },
	{ path: 'stats',  component: StatsComponent       },
	
	{
		path: 'dashboard',
		canActivate: [LoginGuard],
		children: [
			{ path: '', component: DashboardComponent }
		]
	},
	{ path: 'datasources', component: CreatedDatasourcesComponent },
	{ path: 'datasources/:status', component: CreatedDatasourcesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
