export class EpayMessageResolver {

    isHo: boolean = false
    isClientView: boolean = false
  
    // references for messages http://pmlwiki/pages/viewpage.action?spaceKey=PMLLEV&title=UI+Messages+When+User+Can%27t+Pay+Premium%2C+Loan%2C+or+PUA
    premiumMessages = [{
      typeCode: 1,
      HOText: 'There is a pending payment',
    },
    // {
    //   typeCode: 3,
    //   CPText: 'Premium are being paid through the Penn Check automatic debit program.',
    //   FPText: 'Premium are being paid through the Penn Check automatic debit program.',
    //   HOText: 'Premium are being paid through the Penn Check automatic debit program.',
    // },
    {
      typeCode: 4,
      HOText: 'Billing is suspended. (This message is only visible to Home Office staff.)',
    },
    {
      typeCode: 7,
      CPText: 'Premiums are being paid through a salary allotment program',
      FPText: 'Premiums are being paid through a salary allotment program',
      HOText: 'Premiums are being paid through a salary allotment program',
    },
    // {
    //   typeCode: 8,
    //   CPText: 'The scheduled premium will be deducted from the Premium Deposit Fund.',
    //   FPText: 'The scheduled premium will be deducted from the Premium Deposit Fund.',
    //   HOText: 'The scheduled premium will be deducted from the Premium Deposit Fund.',
    // },
    {
      typeCode: 9,
      CPText: 'Premiums are being paid through the Automated Premium Offset program.',
      FPText: 'Premiums are being paid through the Automated Premium Offset program.',
      HOText: 'Premiums are being paid through the Automated Premium Offset program.',
    },
    {
      typeCode: 10,
      CPText: 'Premiums are being waived under the Disability Waiver of Premium Agreement',
      FPText: 'Premiums are being waived under the Disability Waiver of Premium Agreement',
      HOText: 'Premiums are being waived under the Disability Waiver of Premium Agreement',
    },
    {
      typeCode: 12,
      HOText: 'Bill is intercepted. (This message is only visible to Home Office staff.)',
    },
    {
      typeCode: 28,
      HOText: 'Note: There is a discrepancy between policy and bill. (This message is only visible to Home Office staff.)"',
    },
    {
      typeCode: 999,
      HOText: 'Note: There was an error processing this request. (This message is only visible to Home Office staff.)',
    },
    {
      typeCode: 1012300002,
      CPText: 'Your card was declined.  Please use a different card or contact your Financial Institution.',
      HOText: 'Only client can make a card payment',
      FPText: 'Only client can make a card payment',
    },
    {
      typeCode: 1012300001,
      CPText: 'Your card was declined.  Please use a different card or contact your Financial Institution.',
      HOText: 'Only client can make a card payment',
      FPText: 'Only client can make a card payment',
    },
    {
      typeCode: 1012300003,
      CPText: 'Your card was declined.  Please use a different card or contact your Financial Institution.',
      HOText: 'Only client can make a card payment',
      FPText: 'Only client can make a card payment',
    },
    ]
  
    loanMesssages = [{
      typeCode: 1,
      CPText: 'There is a pending loan payment.',
      HOText: 'There is a pending loan payment.',
      FPText: 'There is a pending loan payment.',
    }]
  
    puaMessages = [{
      typeCode: 1,
      CPText: 'There is a pending Paid-Up Additions payment.',
      HOText: 'There is a pending Paid-Up Additions payment.',
      FPText: 'There is a pending Paid-Up Additions payment.',
    },
    {
      typeCode: 18,
      HOText: 'Paid-Up Additions yearly contribution limit has been hit.',
      FPText: 'Paid-Up Additions yearly contribution limit has been hit. (Client does not see this message.)',
    },
  
    ]
  
    ROLE_HASH_KEYS = {
      CP_USER: '10',
      HO_USER: '01',
      FP_USER: '00',
    }
    epayErrorMessages = {}
    epayDefaultErrorMessage = {}
  
    PHONE_NUMBER = {
      [this.ROLE_HASH_KEYS.CP_USER]: {
        NY: '855-446-7393',
        NON_NY: '800-523-0650',
      },
      [this.ROLE_HASH_KEYS.HO_USER]: {
        NY: '855-446-7393',
        NON_NY: '800-523-0650',
      },
      [this.ROLE_HASH_KEYS.FP_USER]: {
        NY: '855-446-7393',
        NON_NY: '800-523-0650',
      },
    }
    static $inject: any = ['authService', 'CONSTANTS']
  
    constructor(public authService, private CONSTANTS) {
      this.isHo = this.authService.isHomeOfficeUser()
      this.isClientView = this.authService.isClientView() || this.authService.isARealClient()
          // authService.isClientView()) || authService.isARealClient()
      // console.info('is clientView', this.authService.isARealClient(), this.authService.isClientView(), this.authService.isHomeOfficeUser())
  
      this._initEpayErrorMessages()
    }
  
    _initEpayErrorMessages() {
      const epayErrorKeys = this.CONSTANTS.epayErrors // should probably get out of js kitchen sink and keep in typescript
  
      this.epayDefaultErrorMessage = 'Online payment is currently unavailable, please do not make another payment attempt. Contact your Financial Professional or Penn Mutual Client Services for more information. (D)'
      this.epayErrorMessages = {
        [epayErrorKeys.ROUTING_NUMBER]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'An invalid Bank Routing Number was used. Please try again with a valid Bank Routing Number. (R038)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.ROUTING_NUMBER_THOMPSON]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'An invalid Bank Routing Number was used. Please try again with a valid Bank Routing Number. (R039)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.ACCOUNT_INVALID]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'An invalid Bank Account Number was used. Please try again with a valid Bank Account Number. (R070)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.ACCOUNT_INCOMPLETE]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'An invalid Bank Account Number was used. Please use a valid Bank Account Number. (R383)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.PAYMENT_RANGE]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'The payment amount was outside of allowed range. (R362)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.PAYMENT_DATE]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'Online payment is currently unavailable. Please contact your financial professional or Penn Mutual Client Services. (R363)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.INVALID_CREDENTIALS]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'Online payment is currently unavailable. Please contact your financial professional or Penn Mutual Client Services. (R378)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.PROCESSING_DOWN]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'Online payment is currently unavailable due to system maintenance. Please try again in a few hours. (R999)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.SERVER_500_ERROR]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'Online payment is currently unavailable, please do not make another payment attempt. Contact your financial professional or Penn Mutual Client Services for more information. (H500)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.NICKNAME_TOO_LONG]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'The account nickname should be no longer than 20 characters. Please try again using a shorter nickname. (AN20)',
          [this.ROLE_HASH_KEYS.HO_USER]: '',
          [this.ROLE_HASH_KEYS.FP_USER]: '',
        },
        [epayErrorKeys.GUIDELINE_PREMIUM]: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'We cannot process your payment at this time. Please contact your Financial Professional, or call PHONE_NUMBER for additional information.',
          [this.ROLE_HASH_KEYS.HO_USER]: 'Payment failed. Payment amount is over Guideline Premium.',
          [this.ROLE_HASH_KEYS.FP_USER]: ' ', // Single space is intentional, empty string would trigger default message.
        },
        ['1012300002']: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'Your card was declined.  Please use a different card or contact your Financial Institution.',
          [this.ROLE_HASH_KEYS.HO_USER]: 'Only client can make a card payment',
          [this.ROLE_HASH_KEYS.FP_USER]: 'Only client can make a card payment',
        },
        ['1012300001']: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'Your card was declined.  Please use a different card or contact your Financial Institution.',
          [this.ROLE_HASH_KEYS.HO_USER]: 'Only client can make a card payment',
          [this.ROLE_HASH_KEYS.FP_USER]: 'Only client can make a card payment',
        },
        ['1012300003']: {
          [this.ROLE_HASH_KEYS.CP_USER]: 'Your card was declined.  Please use a different card or contact your Financial Institution.',
          [this.ROLE_HASH_KEYS.HO_USER]: 'Only client can make a card payment',
          [this.ROLE_HASH_KEYS.FP_USER]: 'Only client can make a card payment',
        },
      }
    }
  
    resolveEpayErrorMessage(code, isClient, isHo, jurisdiction) {
      const roleHashKey = String(+isClient) + String(+isHo)
      const foundErrorMessage = this.epayErrorMessages[code]
      const roleMessage = foundErrorMessage?.[roleHashKey] || foundErrorMessage?.[this.ROLE_HASH_KEYS.CP_USER]
      const messageTemplate = !roleMessage ? this.epayDefaultErrorMessage : roleMessage
      const phoneNumberJurisdiction = jurisdiction === 'New York' ? 'NY' : 'NON_NY'
      const phoneNumber = this.PHONE_NUMBER[roleHashKey][phoneNumberJurisdiction]
      const finalResult = messageTemplate.replace('PHONE_NUMBER', phoneNumber)
  
      // console.log('roleHashKey', roleHashKey, phoneNumberJurisdiction, phoneNumber)
      // console.log('>>>>', foundErrorMessage, finalResult)
      return finalResult
    }
  
    resolvePremiumMessage(typeCodeString: string) {
      const typeCode = Number(typeCodeString)
      const msg = this.premiumMessages.find(element => element.typeCode === typeCode)
  
      return this._pickRoleMessage(msg)
  
    }
  
    resolvePuaMessage(typeCodeString: string) {
      const typeCode = Number(typeCodeString)
      const msg = this.puaMessages.find(element => element.typeCode === typeCode)
  
      return this._pickRoleMessage(msg)
    }
  
    resolveLoanMessage(typeCodeString: string) {
      const typeCode = Number(typeCodeString)
      const msg = this.loanMesssages.find(element => element.typeCode === typeCode)
  
      return this._pickRoleMessage(msg)
    }
  
    _pickRoleMessage(msg) {
      if (this.isClientView) {
        return msg?.CPText
      }
  
      if (this.isHo) {
        return msg?.HOText
      }
  
      return msg?.FPText
    }
  
  }
  