import { findOrCreateModule } from '../../ng-helpers'
import { EpayMessageResolver } from './epay-message-resolver'
import { EpayUIStateService } from './epay-ui-state-service'

findOrCreateModule('app.client.epay', ['app', 'app.core'])
    .service('epayMessageResolver', EpayMessageResolver)
    .service('epayUIState', EpayUIStateService)

    /**
     * let app = await import('./data');
console.log(`The addition is: ${add(2, 3)}`);
     */

// import for side effects onplay(async () => {
//     if (somethingIsTrue) {
//       // import module for side effects
//       await import('/modules/my-module.js');
//     }
//   })();

// https://dmitripavlutin.com/ecmascript-modules-dynamic-import/
// const { 
//     default: defaultComponent, 
//     namedExport1,
//     namedExport2
//   } = await import(path)