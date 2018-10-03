import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { LoginService } from './services/login.service';
import { LoginGuard } from './login.guard';
import { CustomInterceptor } from './custom-interceptor.service';
import { GetsrcdestService } from './services/getsrcdest.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatasourcesComponent } from './components/datasources/datasources.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConnectionsContainerComponent } from './components/connections/connections-container/connections-container.component';
import { ConnectionsSelectorComponent } from './components/connections/connections-selector/connections-selector.component';
import { ConnectionsSearchComponent } from './components/connections/connections-search/connections-search.component';
import { ConnectionsListComponent } from './components/connections/connections-list/connections-list.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { ConnectionsSourceValidatorComponent } from './components/connections/connections-source-validator/connections-source-validator.component';
import { ConnectionsDestinationValidatorComponent } from './components/connections/connections-destination-validator/connections-destination-validator.component';
import { IsvalidService } from './services/isvalid.service';
import { ConnectionsDestinationFormComponent } from './components/connections/connections-destination-form/connections-destination-form.component';
import { ConnectionsFilterEndpointsComponent } from './components/connections/connections-filter-endpoints/connections-filter-endpoints.component';
import { FetchdbsService } from './services/fetchdbs.service';
import { ValidateService } from './services/validate.service';
import { ConnectionsSchedulerComponent } from './components/connections/connections-scheduler/connections-scheduler.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConnectionsStepperComponent } from './components/connections/connections-stepper/connections-stepper.component';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreatedDatasourcesComponent } from './components/created-datasources/created-datasources.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageSignupComponent } from './page-signup/page-signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlertService } from './services/alert.service';
import { SignupService } from './services/signup.service';
import { DashboardDataService } from './services/dashboard-data.service';
import { TextMaskModule } from 'angular2-text-mask';
import { CompareValidatorDirective } from './compare-validator.directive';
import { ProfileComponent } from './profile/profile.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EditprofileService } from './editprofile.service';
import { StatsComponent } from './stats/stats.component';





@NgModule({
	declarations: [
		AppComponent,
		PageLoginComponent,
		DashboardComponent,
		DatasourcesComponent,
		ConnectionsContainerComponent,
		ConnectionsSelectorComponent,
		ConnectionsSearchComponent,
		ConnectionsListComponent,
		BackdropComponent,
		ConnectionsSourceValidatorComponent,
		ConnectionsDestinationValidatorComponent,
		ConnectionsDestinationFormComponent,
		ConnectionsFilterEndpointsComponent,
		ConnectionsSchedulerComponent,
		NavbarComponent,
		ConnectionsStepperComponent,
		CreatedDatasourcesComponent,
		SidenavComponent,
		PageSignupComponent,
		FooterComponent,
		LandingPageComponent,
		CompareValidatorDirective,
		ProfileComponent,
		StatsComponent,
		
	
	
		

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgbModule.forRoot(),
		MatSidenavModule,
		MatExpansionModule,
		MatTableModule,
		ChartsModule,
		TextMaskModule,
		NgbCollapseModule,
		ModalModule.forRoot(),
		AccordionModule.forRoot(),
		BsDropdownModule.forRoot(),
		CarouselModule.forRoot(),
		
		
	],
	providers: [
		LoginService,
		GetsrcdestService,
		IsvalidService,
		FetchdbsService,
		ValidateService,
		AlertService,
		SignupService,
		DashboardDataService,
		EditprofileService,
	

		{ provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
		LoginGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
