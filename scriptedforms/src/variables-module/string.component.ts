// scriptedforms
// Copyright (C) 2017 Simon Biggs

// Licensed under both the Apache License, Version 2.0 (the "Apache-2.0") and 
// GNU Affrero General Public License as published by the Free Software 
// Foundation, either version 3 of the License, or (at your option) any later 
// version (the "AGPL-3.0+").

// You may not use this file except in compliance with both the Apache-2.0 AND 
// the AGPL-3.0+ in combination (the "Combined Licenses").

// You may obtain a copy of the AGPL-3.0+ at

//     https://www.gnu.org/licenses/agpl-3.0.txt

// You may obtain a copy of the Apache-2.0 at 

//     https://www.apache.org/licenses/LICENSE-2.0.html

// Unless required by applicable law or agreed to in writing, software
// distributed under the Combined Licenses is distributed on an "AS IS" BASIS, 
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See 
// the Combined Licenses for the specific language governing permissions and 
// limitations under the Combined Licenses.

import { StringBaseComponent } from './string-base.component';

import {
  Component, AfterViewInit
} from '@angular/core';

@Component({
  selector: 'variable-string',
  template: `
<span #variablecontainer *ngIf="variableName === undefined">
  <ng-content></ng-content>
</span>
<mat-input-container class="variableString" *ngIf="variableName">
  <textarea
  [required]="required"
  matInput matTextareaAutosize
  [disabled]="!isFormReady"
  [placeholder]="placeholderValue"
  [(ngModel)]="variableValue"
  (ngModelChange)="variableChanged()"
  (blur)="onBlur()" 
  (focus)="onFocus()"
  type="text" class="variableString"></textarea>
</mat-input-container>`,
styles: [
  `.variableString {
  width: 100%;
}
`]
})
export class StringComponent extends StringBaseComponent implements AfterViewInit { }