import {
  Component
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  SkyValidators
} from '@skyux/validation';
import {
  DataService
} from './shared/data.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public dataForm = this.fb.group({
    firstName : ['', Validators.required],
    lastName : [''],
    emailAddress : ['', [Validators.required, SkyValidators.email]],
    contactNumber : ['', Validators.required],
    dateOfBirth : ['', Validators.required],
    address : ['']
  });

  constructor(
    private fb: FormBuilder,
      private ds: DataService,
      private router: Router
  ) { }

  public emailControl(): AbstractControl {
    return this.dataForm.get('emailAddress');
  }

  public onSubmit() {
    this.ds.saveUser(this.dataForm.value);
    alert('Data Saved');
    this.router.navigate(['/demo']);
  }

  public resetForm() {
    this.dataForm.reset();
  }

}
