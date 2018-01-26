class TabItem {
  constructor(element) {
    // attach dom element to object. Example in Tabs class
    this.element = element;
  }

  select() {
    // should use classList
    this.element.classList.add("Tabs__item-selected");
  }

  deselect() {
    // should use classList
    this.element.classList.remove("Tabs__item-selected");
  }
}

class TabLink {
  constructor(element) { // old code: constructor(element, parent) {
    this.element = element;// attach dom element to object
    // this.tabs = parent;// attach parent to object
    // this.tabItem = this.tabs.getTab(this.element.dataset.tab);// assign this to the associated tab using the parent's "getTab" method by passing it the correct data
    // // reassign this.tabItem to be a new instance of TabItem, passing it this.tabItem
    // this.tabItem = new TabItem(this.tabItem);
    // this.element.addEventListener('click', (event) => {
    //   event.stopPropagation();
    //   this.tabs.updateActive(this);
    //   this.select();
    // });
  };

  select() {
    // select this link
    this.element.classList.add("Tabs__link-selected");
    // select the associated tab
    // old code: this.tabItem.select();
  }

  deselect() {
    // deselect this link
    this.element.classList.remove("Tabs__link-selected");
    // deselect the associated tab
    // old code: this.tabItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabLink(link, this);
    });
    this.activeLink = this.links[0];
    // this.init();
    // refactoring: reference to "Tabs__item"
    this.items = element.querySelectorAll(".Tabs__item");
    this.items = Array.from(this.items).map((item) => {
      return new TabItem(item, this);
    });
    this.element.addEventListener('click', (event) => {
      this.updateActive(event.target.dataset.tab);
      event.stopPropagation();
      // this.select();
    });
    this.activeItem = this.items[0];
    this.init();
  }

  init() {
    // select the first link and tab upon initialization
    this.activeLink = this.links[0];
    this.links[0].select();
    // refactoring
    this.activeItem = this.items[0];
    this.items[0].select();
  }

  updateActive(tabIndex) {
    // deselect the old active link
    this.activeLink.deselect();
    // assign the new active link
    this.links[tabIndex-1].select();
    this.activeLink = this.links[tabIndex-1];
    // refactoring
    this.activeItem.deselect();
    this.items[tabIndex-1].select();
    this.activeItem = this.items[tabIndex-1];
  }

  // getTab(data) {
  //   // use the tab item classname and the data attribute to select the proper tab
  //   return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
  // }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
