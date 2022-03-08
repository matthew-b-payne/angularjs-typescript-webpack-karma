

  /* @ngInject */
  export class DeviceUtils {

    constructor() {
      // window.isMobilePlatform = false

    }

    isMobilePlatform(): boolean {
      return false
    }

    sAppleDevice(): boolean {
      return /iPad|iPhone|iPod/.test(navigator.platform)
    }

    isMobileFormfactor() : boolean {
      return /iPhone|Android/.test(navigator.userAgent)
    }

  }
