class TrieNode(object):

    def __init__(self, char):
        self.char = char
        self.children = []
        self.is_word = False
        # the number of words this prefix is part of
        self.words_count = 0

    def get_child(self, c):
        for child in self.children:
            if child.char == c:
                return child
        return None

class Trie(object):

    def __init__(self):
        self.root = TrieNode("*")  # token root char

    def add(self, word):
        curr = self.root
        for c in word:
            next_node = curr.get_child(c)
            if next_node is None:
                next_node = TrieNode(c)
                curr.children.append(next_node)
            next_node.words_count += 1
            curr = next_node
        curr.is_word = True

    def find(self, prefix):
        curr = self.root
        for c in prefix:
            next_node = curr.get_child(c)
            if next_node is None:
                return 0  # prefix not found
            curr = next_node

        return curr.words_count

tries = Trie()
n = int(input().strip())
for a0 in range(n):
    op, contact = input().strip().split(' ')
    if op == "add":
        tries.add(contact)
    elif op == "find":
        print(tries.find(contact))
