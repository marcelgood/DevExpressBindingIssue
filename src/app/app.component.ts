import { Component,  ErrorHandler as ExceptionHandler } from '@angular/core';

export function CustomExceptionHandlerFactory() {

    class CustomExceptionHandler implements ExceptionHandler {
        handleError(exception: any): void {
            let error = exception.rejection || exception.originalException || exception;
            alert(error.stack);
        }
    }

    return new CustomExceptionHandler();
};

export const customExceptionHandlerProvider = {
    provide: ExceptionHandler,
    useFactory: CustomExceptionHandlerFactory
};

export class Model {
    private _value: string;

    get value() { return this._value; }

    set value(value: string) {
        if (typeof value !== 'string') {
            throw new Error('String expected!')
        }

        this._value = value;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    model = new Model();
    dataSource = ['Option 1', 'Option 2', 'Option 3'];
}
