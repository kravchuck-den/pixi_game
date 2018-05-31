class Globals {
  add(name, prop) {
    this[name] = prop;
  }

  remove(name) {
    if (name in this) {
      delete this[name];
    }
  }
}

export default new Globals();
