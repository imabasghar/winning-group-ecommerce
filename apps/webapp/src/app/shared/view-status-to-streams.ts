import { Observable, partition } from 'rxjs';
import { filter, skipWhile, take } from 'rxjs/operators';
import { complement, equals } from './ramda-functions';
import { ViewStatus } from './view-status';

export const viewStatusToStreams =
  (viewStatusSelector$: Observable<ViewStatus>) => {
    const viewStatus$ =
      viewStatusSelector$
        .pipe(
          skipWhile(complement(equals(ViewStatus.Loading))),
          take(2),
        );
    const [loading$, loadingComplete$] =
       partition(viewStatus$, equals(ViewStatus.Loading))

    const success$ = viewStatus$
      .pipe(
        filter(viewStatus => equals(ViewStatus.Success, viewStatus))
      )
    const failure$ = viewStatus$
      .pipe(
        filter(viewStatus => equals(ViewStatus.Failure, viewStatus))
      )
    return { loading$, loadingComplete$, success$, failure$ };
  }
