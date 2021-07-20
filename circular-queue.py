class CircularQueue:
    def __init__(self, k):
        self.k = k
        self.queue = [None] * k
        self.head = self.tail - 1

    def enqueue(self, data):

        if((self.tail + 1) % self.k == self.head):
            print('Its full bro')

        elif(self.head == -1):
            self.head = 0
            self.tail = 0
            self.queue[self.tail] = data
