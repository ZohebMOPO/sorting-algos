def create_stack():
    stack = []
    return stack


def check_empty(stack):
    return len(stack) == 0


def push(stack, item):
    stack.append(item)
    print("Pushed item to stack" + item)


def pop(stack):
    if(check_empty(stack)):
        return "Stack is empty bro"

    return stack.pop()


stack = create_stack()
push(stack, str(1))
push(stack, str(2))
push(stack, str(3))
push(stack, str(4))
print("Popped item", +pop(stack))
print("Stack after popping element" + str(stack))
