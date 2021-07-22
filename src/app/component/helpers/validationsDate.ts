import { AbstractControl } from '@angular/forms'
import { formatDate } from '@angular/common';

export class ValidationsDate {

    static controlDate(control: AbstractControl) {

        //const fecha = new Date(Date.now());
        const day = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US')
        const value = control.value;

        if (value < day.toString()) {
            return { controlDate: true };
        }

        return null;
    }

    static controlHoras(control: AbstractControl) {
        
        const hs = formatDate(Date.now(), 'HH:mm', 'en-US')
        const value = control.value;

        if (value < hs.toString()) {
            return { controlDate: true };
        }

        return null;
        
    }

}