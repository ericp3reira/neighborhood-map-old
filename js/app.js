(function() {
  var mapViewModel = function() {
    var self = this;

    self.isMenuOpen = ko.observable(false);

    self.toggleMenu = function() {
      self.isMenuOpen(!isMenuOpen());
    };
  };

  ko.applyBindings(mapViewModel);
})();
