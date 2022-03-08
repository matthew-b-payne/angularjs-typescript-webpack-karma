
/**
 * Renders the <training-list /> directive as a list for buttons.
 */
 export class RequirementDirective implements ng.IDirective {
    restrict = 'A'
    replace = false
    scope = {
      requirement: '=',
      parentController: '=',
    }
  
    // constructor(private authService) { }
  
    _reset(scope, uiState, reply?) {
      if (!reply) reply = { done: false, sent: false }
  
      uiState.showTextReplyPanel = false
      uiState.showUploadReplyPanel = false
      uiState.showChoicePanel = false
      uiState.showReplyButton = !reply.done && (uiState.canEnterReply || uiState.canUploadReply)
      uiState.showReplyRow = false
      uiState.showRepliedBadge = reply.done && reply.sent
      scope.chosenFile = null
      scope.invalidFileType = false
    }
  
    /**
     * AngularJS post link function use for initial configuration of instances of TrainingListDirective
     */
    link(scope: any, _el: ng.IAugmentedJQuery, _attrs: ng.IAttributes, _controller) {
      const requirementsCtrl = scope.parentController ?? scope.$parent.$parent.$parent.parentController ?? scope.$parent.$parent.$parent.$parent.requirementsCtrl
      const requirement = scope.requirement
  
      if (!requirement) return
  
      const canShowReplyButton = requirementsCtrl.showReplyButton(requirement)
      const uiState = {
        showReplyButton: !!canShowReplyButton && (requirement.reqStatus === 0 || requirement.reqStatus === 'Pending'),
        canEnterReply: canShowReplyButton?.text ?? false,
        canUploadReply: canShowReplyButton?.upload ?? true,
        hasDetails: Boolean(requirement.requirementDetails),
        hasResponse: Boolean(requirement.responseDocId),
        showViewReplyButton: false,
        showOpenDetailsButton: Boolean(requirement.requirementDetails),
        showChoicePanel: false,
        showTextReplyPanel: false,
        showUploadReplyPanel: false,
        showReplyRow: false,
        showRepliedBadge: false,
        reset: null,
      }
  
      uiState.reset = this._reset.bind(this, scope.$parent, uiState)
  
      uiState.showReplyButton = uiState.showReplyButton && (uiState.canEnterReply || uiState.canUploadReply)
      uiState.showViewReplyButton = uiState.hasResponse && !uiState.showReplyButton
  
      requirement.uiState = uiState
  
      // console.log('uiState: ', uiState)
    }
  
    /**
     * Creates an instance of TrainingsDirective, with dependencies injected.
     */
    static factory(): ng.IDirectiveFactory {
  
      const directive = () => new RequirementDirective()
  
      directive.$inject = []
  
      return directive
    }
  }

  