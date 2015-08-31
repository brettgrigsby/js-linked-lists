function createList() {
  return {
    head: null,
    makeNode: function(data) {
      return {
        data: data,
        push:function(node) {
          if(this.link) {
            this.link.push(node);
          } else {
            this.link = node;
          };
        },
        insert: function(node, index, count) {
          if(index === count) {
            node.link = this.link;
            this.link = node;
          } else {
            this.link.insert(node, index, count + 1);
          };
        },
        include: function(data) {
          if(this.data === data) {
            return true;
          } else if(this.link) {
            return link.include(data);
          } else {
            return false;
          };
        },
        pop: function() {
          if(this.link.link) {
            return this.link.pop();
          } else {
            var value = this.link.data;
            this.link = null;
            return value;
          };
        },
        last: function() {
          if(this.link.link) {
            return this.link.last();
          } else {
            return this.link.data;
          };
        },
        find_by_index: function(index, count) {
          if(index === count) {
            return this.data;
          } else if(this.link) {
            return this.link.find_by_index(index, count + 1);
          } else {
            return null;
          };
        },
        find_by_value: function(value, index) {
          if(this.data === value) {
            return index;
          } else if(this.link) {
            return this.link.find_by_value(value, index + 1);
          } else {
            return null;
          };
        },
        remove_by_index: function(index, count) {
          if(index === count && this.link) {
            var value = this.link.data;
            this.link = this.link.link;
            return value;
          } else if (this.link) {
            return this.link.remove_by_index(index, count + 1);
          } else {
            return null;
          };
        },
        remove_by_value: function(value) {
          if(this.link && this.link.data === value) {
            this.link = this.link.link;
          } else if(this.link) {
            thic.link.remove_by_value(value);
          };
        },
        count: function() {
          if(this.link) {
            return this.link.count() + 1;
          } else {
            return 1;
          };
        }
      };
    }
  };
}

function push(list, data) {
  var newNode = list.makeNode(data);
  if(list.head === null) {
    list.head = newNode;
  } else {
    list.head.push(newNode);
  };
}

function shift(list, data) {
  var newNode = list.makeNode(data);
  newNode.link = list.head;
  list.head = newNode;
}

function insert(list, data, index) {
  var newNode = list.makeNode(data);
  if(index === 0) {
    shift(list, newNode);
  } else {
    list.head.insert(newNode, index, 1);
  };
}

function include(list, data) {
  if(list.head) {
    return list.head.include(data);
  } else {
    return false;
  }
}

function pop(list) {
  if(list.head.link) {
    return list.head.pop();
  } else if(list.head) {
    var value = list.head.data;
    list.head = null;
    return value;
  } else {
    return null;
  };
}

function last(list) {
  if(list.head.link) {
    return list.head.last();
  } else if(list.head) {
    return list.head.data;
  } else {
    return null;
  };
}

function find_by_index(list, index) {
  if(list.head) {
    return list.head.find_by_index(index, 0);
  } else {
    return null;
  };
}

function find_by_value(list, value) {
  if(list.head) {
    return list.head.find_by_value(value, 0);
  } else {
    return null;
  };
}

function remove_by_index(list, index) {
  if(index === 0 && list.head) {
    var value = list.head.data;
    list.head = list.head.link;
    return value;
  } else if (list.head) {
    return list.head.remove_by_index(index, 1);
  } else {
    return null;
  };
}

function remove_by_value(list, value) {
  if(list.head && list.head.data === value) {
    list.head = list.head.link;
  } else if(list.head) {
    list.head.remove_by_value(value);
  };
}

function count(list) {
  if(list.head) {
    return list.head.count();
  } else {
    return 0;
  };
}
