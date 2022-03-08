
(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('mfaUnitTestData', {
      'pocList': pocList,
      'pocAdd': pocAdd,
      'mfaInitiate': mfaInitiate,
      'mfaVerify': mfaVerify,
      'mfaStatus': mfaStatus,
      'mfaTrust': mfaTrust,
    })

  function pocList() {
    return {
      'success': [{'uid': '654940f3-a5b0-4367-8d53-1bec3dc6ebf8', 'type': 'PHONE', 'verified': true, 'info': {'countryCode': '1', 'phoneNumber': '6106390931'}, 'metadata': {'provider': 'Verizon Wireless', 'phoneType': 'MOBILE', 'supportedVerificationMethods': ['VOICE', 'TEXT']}}, {'uid': '7ee7adf9-cc4e-4761-9774-577d1c25969a', 'type': 'PHONE', 'verified': false, 'info': {'countryCode': '1', 'phoneNumber': '2672658650'}, 'metadata': {'provider': 'AT&T Wireless', 'phoneType': 'MOBILE', 'supportedVerificationMethods': ['VOICE', 'TEXT']}}],
      'fail': {
        'timestamp': '2020-06-09T19:17:47.373+0000',
        'status': 404,
        'error': 'Not Found',
        'exception': 'com.pennmutual.services.security.client.exceptions.UserNotFoundException',
        'message': 'No user found for supplied userId',
        'path': '/client-security-service/verifications/61569078-79d1-4158-91b5-3583be94716e/',
      },
    }
  }

  function pocAdd() {
    return {
      success: {
        'uid': '654940f3-a5b0-4367-8d53-1bec3dc6ebf8',
        'type': 'PHONE',
        'verified': true,
        'info': {
          'countryCode': '1',
          'phoneNumber': '6106390931',
        },
        'metadata': {
          'provider': 'Verizon Wireless',
          'phoneType': 'MOBILE',
          'supportedVerificationMethods': [
            'VOICE',
            'TEXT',
          ],
        },
      },
      fail409: {
        'timestamp': '2020-05-22T14:44:52.440+0000',
        'status': 409,
        'error': 'Conflict',
        'exception': 'com.pennmutual.services.security.client.exceptions.EntityExistsException',
        'message': 'Verified Point of Contact Already Associated with User',
        'path': '/client-security-service/verifications/61569078-79d1-4158-91b5-3583be94716f/',
      },
      fail404: {
        'timestamp': '2020-06-10T15:41:24.295+0000',
        'status': 404,
        'error': 'Not Found',
        'exception': 'com.pennmutual.services.security.client.exceptions.UserNotFoundException',
        'message': 'No user found for supplied userId',
        'path': '/client-security-service/verifications/61569078-79d1-4158-91b5-3583be94716e/',
      },
    }
  }

  function mfaInitiate() {
    return {
      success: {},
      fail404: {
        'timestamp': '2020-06-10T16:25:08.734+0000',
        'status': 404,
        'error': 'Not Found',
        'exception': 'com.pennmutual.services.security.client.exceptions.UserNotFoundException',
        'message': 'No user found for supplied userId',
        'path': '/client-security-service/verifications/61569078-79d1-4158-91b5-3583be94716e/a6139979-32ab-4f4a-ae88-acc56822e963/initiate',
      },
    }
  }

  function mfaVerify() {
    return {
      success: {},
      fail: {
        'status': 400,
        'errorKey': 'NONE_PENDING',
        'errorMessage': 'No verifications are pending for phone number supplied',
      },
    }
  }

  function mfaStatus() {
    return {
      'userGuid': '61569078-79d1-4158-91b5-3583be94716f',
      'actionRequired': 'VERIFY_POC',
      'actionDescription': 'Requires verifying an established Point of Contact',
    }
  }

  function mfaTrust() {
    return {
      'uid': '8691ad39-bc2c-4e7b-9218-734193af04fe',
      'nickname': 'MacMini Office',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTU2N2E0Ni1lODJhLTQxYmMtOGJjMS1iMGY5NWQyN2NkOWQiLCJzdWIiOiJSRU1FTUJFUkVEX0RFVklDRSIsImlhdCI6MTU5NDI0ODgzNywianRpIjoiODY5MWFkMzktYmMyYy00ZTdiLTkyMTgtNzM0MTkzYWYwNGZlIn0.aQt4GtXim-PJqRVha1UIhERW9f8Qos7Fop1lAS89nco',
      'createdDate': '2020-07-08T22:53:57.293+0000',
      'modifiedDate': '2020-07-08T22:53:57.293+0000',
    }
  }
})()
