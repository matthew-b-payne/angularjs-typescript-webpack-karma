export class EpayUIStateService {
  static $injector = []

  /******* BEGIN Payment View *******/
  // Bitmap decoder
  // isPennCheck|hasSavedAccounts|canUseCreditCards|ccLimitExceeded
  paymentScenarioLookupMap = {
    '0000': 'NoPennCheck1',
    '0001': 'NoPennCheck1',
    '0011': 'NoPennCheck1',
    '0111': 'NoPennCheck4',
    '0100': 'NoPennCheck4',
    '0110': 'NoPennCheck3',
    '0101': 'NoPennCheck4',
    '0010': 'NoPennCheck2',
    '1000': 'PennCheck1',
    '1001': 'PennCheck1',
    '1011': 'PennCheck1',
    '1111': 'PennCheck4',
    '1100': 'PennCheck4',
    '1110': 'PennCheck3',
    '1101': 'PennCheck4',
    '1010': 'PennCheck2',
  }

  paymentViewScenarios = {
    NoPennCheck1: {
      showPaymentOptions: false,
      paymentOptionsTitle: '',
      showSavedAccountsDropdown: false,
      showSavedAccountsContinueButton: false,
      showAddNewCreditCardButton: false,
      showACHForm: true,
      achFormTitle: 'Payment Information',
      showPennCheckDraftDates: false,
      showPennCheckContinueButton: true,
      showSaveAccountCheckbox: true,
      creditCardButtonText: '',
      achButtonText: '',
    },
    NoPennCheck2: {
      showPaymentOptions: true,
      paymentOptionsTitle: 'Payment Options',
      showSavedAccountsDropdown: false,
      showSavedAccountsContinueButton: false,
      showAddNewCreditCardButton: true,
      showACHForm: false,
      achFormTitle: '',
      showPennCheckDraftDates: false,
      showPennCheckContinueButton: false,
      showSaveAccountCheckbox: false,
      creditCardButtonText: 'Pay with Card',
      achButtonText: 'Pay with Bank Account',
    },
    NoPennCheck3: {
      showPaymentOptions: true,
      paymentOptionsTitle: 'Payment Options',
      showSavedAccountsDropdown: true,
      showSavedAccountsContinueButton: true,
      showAddNewCreditCardButton: true,
      showACHForm: false,
      achFormTitle: '',
      showPennCheckDraftDates: false,
      showPennCheckContinueButton: false,
      showSaveAccountCheckbox: false,
      creditCardButtonText: 'Pay with New Card',
      achButtonText: 'Pay with New Bank Account',
    },
    NoPennCheck4: {
      showPaymentOptions: true,
      paymentOptionsTitle: 'Payment Options',
      showSavedAccountsDropdown: true,
      showSavedAccountsContinueButton: true,
      showAddNewCreditCardButton: false,
      showACHForm: false,
      achFormTitle: '',
      showPennCheckDraftDates: false,
      showPennCheckContinueButton: false,
      showSaveAccountCheckbox: false,
      creditCardButtonText: '',
      achButtonText: 'Pay with New Bank Account',
    },
    PennCheck1: {
      showPaymentOptions: false,
      paymentOptionsTitle: '',
      showSavedAccountsDropdown: false,
      showSavedAccountsContinueButton: false,
      showAddNewCreditCardButton: false,
      showACHForm: true,
      achFormTitle: 'Payment Information',
      showPennCheckDraftDates: true,
      showPennCheckContinueButton: true,
      showSaveAccountCheckbox: true,
      creditCardButtonText: undefined,
      achButtonText: undefined,
    },
    PennCheck2: {
      showPaymentOptions: true,
      paymentOptionsTitle: 'Initial Payment',
      showSavedAccountsDropdown: false,
      showSavedAccountsContinueButton: false,
      showAddNewCreditCardButton: true,
      showACHForm: true,
      achFormTitle: 'PennCheck Payment',
      showPennCheckDraftDates: true,
      showPennCheckContinueButton: true,
      showSaveAccountCheckbox: false,
      creditCardButtonText: 'Pay with Card',
      achButtonText: 'Pay with Bank Account',
    },
    PennCheck3: {
      showPaymentOptions: true,
      paymentOptionsTitle: 'Initial Payment',
      showSavedAccountsDropdown: true,
      showSavedAccountsContinueButton: false,
      showAddNewCreditCardButton: true,
      showACHForm: true,
      achFormTitle: 'PennCheck Payment',
      showPennCheckDraftDates: true,
      showPennCheckContinueButton: true,
      showSaveAccountCheckbox: false,
      creditCardButtonText: 'Pay with New Card',
      achButtonText: 'Pay with New Bank Account',
    },
    PennCheck4: {
      showPaymentOptions: true,
      paymentOptionsTitle: 'Initial Payment',
      showSavedAccountsDropdown: true,
      showSavedAccountsContinueButton: false,
      showAddNewCreditCardButton: false,
      showACHForm: true,
      achFormTitle: 'PennCheck Payment',
      showPennCheckDraftDates: true,
      showPennCheckContinueButton: true,
      showSaveAccountCheckbox: false,
      creditCardButtonText: undefined,
      achButtonText: 'Pay with New Bank Account',
    },
  }

  _resolvePaymentViewScenarioName(isPennCheck, hasExistingAccounts, canUseCreditCards, ccLimitExceeded) {
    const hashKey = [isPennCheck, hasExistingAccounts, canUseCreditCards, ccLimitExceeded]
      .map(b => String(+b))
      .join('')
    const scenario = this.paymentScenarioLookupMap[hashKey]

    // console.log(isPennCheck, hasExistingAccounts, canUseCreditCards, ccLimitExceeded)
    // console.log('hashKey', hashKey, scenario)

    return { scenario, hashKey }
  }

  resolvePaymentView(isPennCheck, hasExistingAccounts, canUseCreditCards, ccLimitExceeded) {
    const { scenario, hashKey } = this._resolvePaymentViewScenarioName(isPennCheck, hasExistingAccounts, canUseCreditCards, ccLimitExceeded)
    const uiState = this.paymentViewScenarios[scenario]

    uiState.hashKey = hashKey
    uiState.scenario = scenario

    // console.info('Payment View Scenario', scenario, uiState)

    // Apply enableCreditCards feature flag to scenario's showAddNewCreditCardButton value
    // uiState.showAddNewCreditCardButton = enableCreditCards && uiState.showAddNewCreditCardButton

    return uiState
  }
  /******* END: Payment View *******/

  /******* BEGIN: Review View *******/
  // // @ts-ignore
  // reviewScenarioLookupMap1 = {
  //   '1000': 'NoPennCheck1',
  //   '1001': 'NoPennCheck2',
  //   '1010': 'NoPennCheck3',
  //   '1011': 'NoPennCheck4',
  //   '0100': 'PennCheck1',
  //   '1101': 'PennCheck2',
  //   '1110': 'PennCheck3',
  //   '1111': 'PennCheck4',
  // }

  // initialPaymentAccount, pennCheckPaymentAccount, isSavedAccount, isCardPayment
  reviewScenarioLookupMap = {
    '0000': 'ErrorCondition',
    '0001': 'ErrorCondition',
    '0010': 'ErrorCondition',
    '0011': 'ErrorCondition',
    '0100': 'PennCheck1',
    '0101': 'ErrorCondition',
    '0110': 'ErrorCondition',
    '0111': 'ErrorCondition',
    '1000': 'NoPennCheck1',
    '1001': 'NoPennCheck2',
    '1010': 'NoPennCheck3',
    '1011': 'NoPennCheck4',
    '1100': 'PennCheck1',
    '1101': 'PennCheck2',
    '1110': 'PennCheck3',
    '1111': 'PennCheck4',
  }

  reviewDataPoints = {
    NoPennCheck1: {
      showPennCheckTable: false,
      showCreditCardTable: false,
      showACHTable: true,
      paymentTableTitle: 'Payment Information',
      pennCheckTableTitle: '',
      pennCheckTablePaymentDateAmount: false,
      message: 'By clicking "Submit Payment", I authorize the payee to electronically debit my bank account for the amount(s) and date(s) set forth above. I also attest I am the owner of the policy and bank account.',
    },
    NoPennCheck2: {
      showPennCheckTable: false,
      showCreditCardTable: true,
      showACHTable: false,
      paymentTableTitle: 'Payment Information',
      pennCheckTableTitle: '',
      pennCheckTablePaymentDateAmount: false,
      message: 'By clicking "Submit Payment", cardholder agrees to pay the issuer of the charge or debit card in accordance with the agreement between the issuer and the cardholder.  I also attest that I am the owner of the policy and am the cardholder.',
    },
    NoPennCheck3: {
      showPennCheckTable: false,
      showCreditCardTable: false,
      showACHTable: true,
      paymentTableTitle: 'Payment Information',
      pennCheckTableTitle: '',
      pennCheckTablePaymentDateAmount: false,
      message: 'By clicking "Submit Payment", I authorize the payee to electronically debit my bank account for the amount(s) and date(s) set forth above. I also attest I am the owner of the policy and bank account',
    },
    NoPennCheck4: {
      showPennCheckTable: false,
      showCreditCardTable: true,
      showACHTable: false,
      paymentTableTitle: 'Payment Information',
      pennCheckTableTitle: '',
      pennCheckTablePaymentDateAmount: false,
      message: 'By clicking "Submit Payment", cardholder agrees to pay the issuer of the charge or debit card in accordance with the agreement between the issuer and the cardholder.  I also attest that I am the owner of the policy and am the cardholder.',
    },
    PennCheck1: {
      showPennCheckTable: true,
      showCreditCardTable: false,
      showACHTable: false,
      paymentTableTitle: '',
      pennCheckTableTitle: 'Payment Information',
      pennCheckTablePaymentDateAmount: true,
      message: 'By clicking "Submit Payment", I authorize the payee to electronically debit my bank account for the amount(s) and date(s) set forth above. I also attest I am the owner of the policy and bank account',
    },
    PennCheck2: {
      showPennCheckTable: true,
      showCreditCardTable: true,
      showACHTable: false,
      paymentTableTitle: 'Payment Information',
      pennCheckTableTitle: 'Penn Check Payment',
      pennCheckTablePaymentDateAmount: false,
      message: 'By clicking "Submit Payment", I attest that I am the owner of the policy and the cardholder of the card being used for my initial payment and, as cardholder, I agree to pay the issuer of the charge or debit card in accordance with the agreement between the issuer and the cardholder. For subsequent payments, I authorize the payee to electronically debit my bank account for the amount and dates set forth above, and attest I am the owner of the policy and bank account.',
    },
    PennCheck3: {
      showPennCheckTable: true,
      showCreditCardTable: false,
      showACHTable: true,
      paymentTableTitle: 'Payment Information',
      pennCheckTableTitle: 'Penn Check Payment',
      pennCheckTablePaymentDateAmount: false,
      message: 'By clicking "Submit Payment", I authorize the payee to electronically debit my bank account for the amount(s) and date(s) set forth above. I also attest I am the owner of the policy and bank account',
    },
    PennCheck4: {
      showPennCheckTable: true,
      showCreditCardTable: true,
      showACHTable: false,
      paymentTableTitle: 'Payment Information',
      pennCheckTableTitle: 'Penn Check Payment',
      pennCheckTablePaymentDateAmount: false,
      message: 'By clicking "Submit Payment", I authorize the payee to electronically debit my bank account for the amount(s) and date(s) set forth above.  I also attest I am the owner of the policy and bank account.',
    },
  }

  _resolveReviewViewDataPoints(initialPaymentAccount, pennCheckPaymentAccount, isSavedAccount, isCardPayment) {
    const hashKey = [initialPaymentAccount, pennCheckPaymentAccount, isSavedAccount, isCardPayment]
      .map(b => String(+b))
      .join('')
    const scenario = this.reviewScenarioLookupMap[hashKey]

    // console.log(initialPaymentAccount, pennCheckPaymentAccount, isSavedAccount, isCardPayment)
    // console.log('hashKey', hashKey, scenario)

    return { scenario, hashKey }
  }

  resolveReviewView(initialPaymentAccount, pennCheckPaymentAccount, isSavedAccount, isCardPayment) {
    const { scenario, hashKey } = this._resolveReviewViewDataPoints(!!initialPaymentAccount, !!pennCheckPaymentAccount, isSavedAccount, isCardPayment)
    const uiState = this.reviewDataPoints[scenario] ?? {}

    uiState.hashKey = hashKey
    uiState.scenario = scenario

    // console.info('Review View Datapoints', scenario, uiState)

    return uiState
  }
  /******* END: Review View *******/
}

