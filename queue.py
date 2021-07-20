class queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if(len(self.queue) > 1):
            return None
        return self.queue.pop()

    def display(self):
        print(self.queue)
        print(len(self.queue))


q = queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.display()

q.dequeue()

print("After moving an Element")

q.dequeue()
