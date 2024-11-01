import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{

  userList: any = [
    {
      "id": 1,
      "name": "Vijay",
      "email": "Vijay@test.com",
      "phone": 9087654321,
      "address": "test address"
    },
    {
      "id": 2,
      "name": "Raj",
      "email": "raj@test.com",
      "phone": 1234567890,
      "address": "raj test"
    },
    {
      "id": 3,
      "name": "vijayaraj",
      "email": "vijayr@test.com",
      "phone": 1234567890,
      "address": "No 1234"
    }
  ];
  dummyData: any = [];
  userForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl()
  });
  @ViewChild('content')
  contentPopup!: TemplateRef<any>;
  addTitle = 'Add New User';
  editTitle = 'Edit New User';
  heading: string = '';
  isUpdate:boolean = false;
  editIndex:any;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit(): void {
    this.dummyData = this.userList;
    this.heading = this.addTitle;
  }

  editData(user: any, index: any) {
    this.isUpdate = true;
    this.heading = this.editTitle;
    this.editIndex = index;
    this.userForm.patchValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
      });
    this.modalService.open(this.contentPopup);
  }

  deleteUser(user: any, index: any) {
    this.userList.splice(index, 1);
    this.dummyData = this.userList;
  }

  open(content: any) {
		this.modalService.open(content);
	}

  closeModal() {
    this.editIndex = '';
    this.isUpdate = false;     
    this.userForm.reset();
    this.modalService.dismissAll();
  }

  onSubmit() {
    if(this.userForm.value.name) {
      if(this.isUpdate) {
        this.userList[this.editIndex] = this.userForm.value;
        this.dummyData = this.userList;
      } else {
        this.userList.push(this.userForm.value);
        this.dummyData = this.userList;
      } 
      this.closeModal();
    }
  }

}
