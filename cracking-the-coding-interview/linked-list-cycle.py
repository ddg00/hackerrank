def has_cycle(head):
    pointer = head
    if not pointer.next:
        return False
    while pointer.next:
        if pointer.next is pointer:
            return True
        pointer = pointer.next
    return False
    pass
