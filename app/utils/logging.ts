export class LoggingService {

    apiPrefix: string = '/logging' //
  
    constructor(private $http: angular.IHttpService) {
    }
  
    log(message: string, level: 'info' | 'warn' | 'error' = 'info', module: string = 'general') {
      const messagePayload = { message: message, level: level, module: module }
  
      this.$http.post(this.apiPrefix, messagePayload)
        .then(response => response.data)
    }
  
  }
  LoggingService.$inject = ['$http']
  