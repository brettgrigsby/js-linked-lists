mocha.setup("bdd");

describe('testing', function () {
  it('creates a new list with an empty head node', function () {
    var list = createList();
    assert.isNull(list.head);
  });

  it('appends an item to the list', function() {
    var list = createList();
    push(list, "pizza");
    assert.equal(list.head.data, "pizza");
  });

  it('appends an item to the end of the list', function() {
    var list = createList();
    push(list, "pizza");
    push(list, "fries");
    assert.equal(list.head.link.data, "fries");
  });

  it('prepends an item to the beginning of the list', function() {
    var list = createList();
    push(list, "pizza");
    shift(list, "fries");
    assert.equal(list.head.data, "fries");
  });

  it('prepends an item to the beginning of an empty list', function() {
    var list = createList();
    shift(list, "fries");
    assert.equal(list.head.data, "fries");
  });

  it('inserts an item at a given index', function() {
    var list = createList();
    push(list, "fries");
    push(list, "pizza");
    push(list, "jam");
    insert(list, "twix", 2)
    assert.equal(list.head.link.link.data, "twix");
    assert.equal(list.head.link.link.link.data, "jam");
  });

  it('returns if data is included in list', function() {
    var list = createList();
    push(list, "fries");
    assert(include(list, "fries"));
    assert.equal(include(list, "tacos"), false);
  });

  it('returns total count for list', function() {
    var list = createList();
    assert.equal(count(list), 0);

    push(list, "fries");
    push(list, "ries");
    push(list, "ies");
    push(list, "es");
    assert.equal(count(list), 4);
  });

  it('can pop off the last element of the list', function() {
    var list = createList();
    push(list, "pizza");
    push(list, "coke");
    push(list, "fries");
    assert.equal(pop(list), "fries");
    assert.equal(list.head.link.link, null);
  });

  it('returns last value in list', function() {
    var list = createList();
    push(list, "fries");
    push(list, "milkshakes");
    assert.equal(last(list), "milkshakes");
  });

  it('can find a value by its index', function() {
    var list = createList();
    push(list, "pizza");
    push(list, "coke");
    push(list, "fries");
    assert.equal(find_by_index(list, 1), "coke");
    assert.equal(find_by_index(list, 2), "fries");
    assert.equal(find_by_index(list, 5), null);
  });

  it('can find an index by its value', function() {
    var list = createList();
    push(list, "pizza");
    push(list, "coke");
    push(list, "fries");
    assert.equal(find_by_value(list, "coke"), 1);
    assert.equal(find_by_value(list, "fries"), 2);
    assert.equal(find_by_value(list, "cookies"), null);
  });

  it('can remove an element by index', function() {
    var list = createList();
    push(list, "pizza");
    push(list, "coke");
    push(list, "fries");
    assert.equal(remove_by_index(list, 1), "coke");
    assert.equal(list.head.link.data, "fries");
  });

  it('can remove an element by value', function() {
    var list = createList();
    push(list, "pizza");
    push(list, "coke");
    push(list, "fries");
    remove_by_value(list, "coke");
    assert.equal(list.head.link.data, "fries");
  });
});
