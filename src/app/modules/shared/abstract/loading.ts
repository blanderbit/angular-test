import {Directive, OnDestroy} from '@angular/core';
import {BehaviorSubject, isObservable, Observable, throwError, } from 'rxjs';
import {finalize} from 'rxjs/operators';

@Directive()
export class LoadingDirective implements OnDestroy {
    public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public progressRequest<T>(rxJsObservable): Observable<T> {
        if (!isObservable(rxJsObservable)) {
            return throwError('TYPE_ERROR: Objects passed to the progressRequest function are not observable');
        }

        this.loading$.next(true);

        return rxJsObservable
            .pipe<T>(finalize<T>(() => this.loading$.next(false)));
    }

    public ngOnDestroy() {
        this.loading$.unsubscribe();
    }
}
