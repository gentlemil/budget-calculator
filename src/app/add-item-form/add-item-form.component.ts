import { Component, OnInit, Input } from '@angular/core';
// import { BudgetItemCardComponent } from '../budget-item-list/budget-item-card/budget-item-card.component';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', null)    //BudgetItem(description, amount)

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
