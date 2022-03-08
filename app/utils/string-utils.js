export {stringUtils}
  stringUtils.$inject = []

  /* @ngInject */
  function stringUtils() { // injecting this (and its module) into another module's .run() call causes Karma test issues
    // this.capitalize = function(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1)
    // }

    // TODO: Make this work properly for names line 'Anderson von Cooper'
    this.capitalizeString = function(capitalize) {
      if (capitalize) {
        return capitalize.toLowerCase().replace(/\b-?\w/g, function(m) {
          return m.toUpperCase()
        })
      }
      return capitalize
    }
    this.capitalize = this.capitalizeString.bind(this)

    this.pluralize = function(string) {
      var lastCharacterIndex = string.length - 1

      if (string.charAt(lastCharacterIndex) === 'y') {
        return string.substr(0, lastCharacterIndex) + 'ies'
      }

      return string + 's'
    }

    this.trimStart = function(string, character) {
      var startIndex = 0

      while (string[startIndex] === character) {
        startIndex++
      }

      return string.substr(startIndex)
    }

    this.containsAny = function(str, substrings) {
      var i
      var substring

      for (i = 0; i !== substrings.length; i++) {
        substring = substrings[i]

        if (str.indexOf(substring) !== -1) {
          return substring
        }
      }
    }
  }
