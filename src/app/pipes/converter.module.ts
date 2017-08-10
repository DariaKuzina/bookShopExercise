import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ConverterPipe } from './converter.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [ConverterPipe],
    exports: [ConverterPipe]
})

export class ConverterPipeModule {
} 