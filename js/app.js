var AppViewModel = function() {
  var self = this;

  self.isMenuOpen = ko.observable(false);

  self.toggleMenu = function() {
    self.isMenuOpen(!self.isMenuOpen());
  };

  self.address = ko.observable();

  self.getAddress = function() {
    setAddress(self.address());
    self.address("");
  };
};

ko.applyBindings(new AppViewModel());
