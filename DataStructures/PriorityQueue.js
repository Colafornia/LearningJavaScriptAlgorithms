function PriorityQueue () {
  this.items = [];
  function QueueItem (item, priority) {
    this.item = item;
    this.priority = priority;
  }
  this.enqueue = function (element, priority) {
    var item = new QueueItem(element, priority);
    var len = this.items.length;
    if (!len) {
      this.items.push(item);
    } else {
      this.items.push(item);
      this.items = this.items.sort((a,b) => a.priority - b.priority);
    }
    return this.items;
  }
  this.dequeue = function () {
    return this.items.shift();
  }
  this.print = function () {
    var res = this.items.map((i) => i.item);
    console.log(res.reverse().join('\n'));
  }
}
var list = new PriorityQueue();
list.enqueue('优先级2-1', 2);
list.enqueue('优先级1-1', 1);
list.enqueue('优先级1-2', 1);
list.enqueue('优先级3-1', 3);
list.enqueue('优先级2-2', 2);
list.enqueue('优先级1-3', 1);
list.print();
list.dequeue();
