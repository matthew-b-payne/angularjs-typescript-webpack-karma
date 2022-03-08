import { findOrCreateModule } from '../ng-helpers'
import { RequirementDirective } from './requirement-directive'

findOrCreateModule('app.directives', [])
 .directive('requirement', RequirementDirective.factory())