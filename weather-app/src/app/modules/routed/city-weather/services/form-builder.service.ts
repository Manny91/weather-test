import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable()
export class FormBuilderService {

    public buildSearchCityWeatherForm = (): FormGroup => {
        const form = new FormGroup({
            query: new FormControl('')
        });
        return form;
    }
}
