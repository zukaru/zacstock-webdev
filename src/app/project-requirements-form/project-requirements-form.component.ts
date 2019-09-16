import { Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DropletService } from '../Services/Droplet.service';

@Component({
  selector: 'app-project-requirements-form',
  templateUrl: './project-requirements-form.component.html',
  styleUrls: ['./project-requirements-form.component.css']
})
export class ProjectRequirementsFormComponent implements OnInit {
  formDirty = false;
  submitted = false;

  @ViewChild('f') public userFrm: NgForm;






  constructor(private ds: DropletService) { }

  ngOnInit() {
    if(this.userFrm.dirty) {
      this.formDirty = true;
    }
  }

  canDeactivate() {
    console.log('i am navigating away');
    if (this.formDirty) {
        console.log('no, you wont navigate anywhere');
        return false;
    }
    console.log('you are going away, goodby');
    return true;
}

  onSubmit(form: NgForm)  {
    if (form.invalid) {
      return;
    } else {
      this.ds.submitRequirements(
        form.value.first_name,
        form.value.lname,
        form.value.phone,
        form.value.email,
        form.value.job_title,

        form.value.company,
        form.value.Address,
        form.value.City,
        form.value.State,
        form.value.Zip,
        form.value.describe_org,
        form.value.has_website,
        form.value.website_address,
        form.value.website_reno,
        form.value.domain_help,
        form.value.social_media,
        form.value.social_media_links,

        form.value.brand_color,
        form.value.hex_colors,
        form.value.logo,
        form.value.website_objective,
        form.value.website_like1,
        form.value.website_like2,
        form.value.website_like3,
        form.value.like_about_website,
        form.value.pages_needed,
        form.value.stock_images,
        form.value.copywriting,
        form.value.selling_online,
        form.value.how_many_products,
        form.value.help_uploading_products,
        form.value.want_cms,
        form.value.deadline,
        form.value.budget_range,
        form.value.questions_concerns
      );
      console.log(form);
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        form.reset();
      }, 7000);

    }
  }

}
