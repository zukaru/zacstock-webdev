import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SocialIconsComponent } from './Social/SocialIcons/SocialIcons.component';
import { TestimonialComponent } from './Slider/Testimonial/Testimonial.component';
import { LetsTalkComponent } from './LetsTalk/LetsTalk.component';
import { ServiceGridComponent } from './ServiceGrid/ServiceGrid.component';
import { TemplateModule } from '../Template/Template.module';
import { WidgetHeadingComponent } from './WidgetHeading/WidgetHeading.component';
import { RecentWorkComponent } from './RecentWork/RecentWork.component';
import { ExploreStdioComponent } from './ExploreStudio/ExploreStudio.component';
import { ClientSaysComponent } from './ClientSays/ClientSays.component';
import { ContactComponent } from './Contact/Contact.component';
import { ContactFormComponent } from './Form/ContactForm/ContactForm.component';
import { ContactContentComponent } from './ContactContent/ContactContentV1/ContactContentV1.component';
import { SubscribeComponent } from './Subscribe/Subscribe/Subscribe.component';
import { ThemeDarkLogoComponent } from './Logo/ThemeDarkLogo/ThemeDarkLogo.component';
import { ThemeLightLogoComponent } from './Logo/ThemeLightLogo/ThemeLightLogo.component';
import { WorkingHoursComponent } from './WorkingHours/WorkingHours.component';
import { SearchComponent } from './Search/SearchV1/SearchV1.component';
import { PostListComponent } from './List/PostList/PostList.component';
import { CategoriesComponent } from './List/Categories/Categories.component';
import { TagComponent } from './Tag/Tag.component';
import { RecentCommentsComponent } from './List/RecentComments/RecentComments.component';
import { BannerComponent } from './Banner/Banner/Banner.component';
import { LeavecommentComponent } from './Form/LeaveComment/LeaveComment.component';
import { AboutAuthorComponent } from './AboutAuthor/AboutAuthor.component';
import { PaginationComponent } from './Pagination/Pagination.component';
import { TeamFounderComponent } from './TeamFounder/TeamFounder.component';
import { TeamMemberComponent } from './Slider/TeamMember/TeamMember.component';
import { ClientSliderComponent } from './Slider/ClientSlider/ClientSlider.component';
import { ServiceItemComponent } from './Slider/ServiceItemSlider/ServiceItemSlider.component';
import { BannerSliderComponent } from './Slider/BannerSlider/BannerSlider.component';
import { HomeBannerComponent } from './Banner/HomeBanner/HomeBanner.component';
import { ContactFormV2Component } from './Form/ContactFormV2/ContactFormV2.component';
import { ContactContentV2Component } from './ContactContent/ContactContentV2/ContactContentV2.component';
import { MapComponent } from './Map/Map.component';
import { SearchV2Component } from './Search/SearchV2/SearchV2.component';
import { CounterComponent } from './Counter/Counter.component';
import { BannerV2Component } from './Banner/BannerV2/BannerV2.component';
import { ProjectRequirementsFormComponent } from '../project-requirements-form/project-requirements-form.component';

@NgModule({
	declarations: [
		SocialIconsComponent,
		TestimonialComponent,
		LetsTalkComponent,
		ServiceGridComponent,
		WidgetHeadingComponent,
		RecentWorkComponent,
		ExploreStdioComponent,
		ClientSaysComponent,
		ContactComponent,
		ContactFormComponent,
		ContactContentComponent,
		SubscribeComponent,
		ThemeDarkLogoComponent,
		ThemeLightLogoComponent,
		WorkingHoursComponent,
		SearchComponent,
		PostListComponent,
		CategoriesComponent,
		TagComponent,
		RecentCommentsComponent,
		BannerComponent,
		LeavecommentComponent,
		AboutAuthorComponent,
		PaginationComponent,
		TeamFounderComponent,
		TeamMemberComponent,
		ClientSliderComponent,
		ServiceItemComponent,
		BannerSliderComponent,
		HomeBannerComponent,
		ContactFormV2Component,
		ContactContentV2Component,
		MapComponent,
		SearchV2Component,
		CounterComponent,
    BannerV2Component,
    ProjectRequirementsFormComponent
	],
	imports: [
		CommonModule,
		TemplateModule,
		SlickCarouselModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule
	],
	exports: [
		SocialIconsComponent,
		TestimonialComponent,
		LetsTalkComponent,
		ServiceGridComponent,
		WidgetHeadingComponent,
		RecentWorkComponent,
		ExploreStdioComponent,
		ClientSaysComponent,
		ContactComponent,
		ContactFormComponent,
		ContactContentComponent,
		SubscribeComponent,
		ThemeDarkLogoComponent,
		ThemeLightLogoComponent,
		WorkingHoursComponent,
		CategoriesComponent,
		PostListComponent,
		SearchComponent,
		TagComponent,
		RecentCommentsComponent,
		BannerComponent,
		LeavecommentComponent,
		AboutAuthorComponent,
		PaginationComponent,
		TeamFounderComponent,
		TeamMemberComponent,
		ClientSliderComponent,
		ServiceItemComponent,
		BannerSliderComponent,
		HomeBannerComponent,
		ContactFormV2Component,
		ContactContentV2Component,
		MapComponent,
		SearchV2Component,
		BannerV2Component,
    CounterComponent,
    ProjectRequirementsFormComponent
	]
})
export class WidgetsModule { }
