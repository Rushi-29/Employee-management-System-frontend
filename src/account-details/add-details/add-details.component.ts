import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../app/service/employee.service';
import { AccountDetailsService } from '../../app/service/account-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountDetails } from '../../app/model/AccountDetails';
export interface form{
  bankName: any,
  accountNumber: any,
  ifscCode: any,
  branch: any,
  nameOnAccount: any,
  employeeId:{
  id:any
  };
}

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit{
  accountForm!: FormGroup;
  
 
  constructor(private fb: FormBuilder,private dialog:MatDialogRef<AddDetailsComponent>,private empService:EmployeeService,private accDetails:AccountDetailsService) {
    
  }
 
  ngOnInit(): void {
    this.accountForm = this.fb.group({
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifscCode: ['', Validators.required],
      branch: ['', Validators.required],
      nameOnAccount: ['', Validators.required],
    });
    
  }
 
  onSubmit() {
    const details:AccountDetails={
      id:"",
      bankName:  this.accountForm.get('bankName')?.value,
      accountNumber:  this.accountForm.get('accountNumber')?.value,
      ifscCode: this.accountForm.get('ifscCode')?.value,
      branch:this.accountForm.get('branch')?.value,
      nameOnAccount: this.accountForm.get('nameOnAccount')?.value,
      employeeId:{
        id:localStorage.getItem("userId")
      }
    }
    this.accDetails.addDetails(details).subscribe(a=>console.log(a));
    
    
    this.dialog.close();
    
   
  }
 
  closeDialog() {
    // Implement your close dialog logic here
    this.dialog.close();
  }
}

