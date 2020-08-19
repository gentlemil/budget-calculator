import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { BudgetItemCardComponent } from '../budget-item-list/budget-item-card/budget-item-card.component';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';
// import { BudgetItemCardComponent } from '../budget-item-list/budget-item-card/budget-item-card.component';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem; // = new BudgetItem('', null)    //BudgetItem(description, amount)
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() { }

  ngOnInit() {
    // if item has a value
    if(this.item) {
      // this means that an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null)
    }
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
