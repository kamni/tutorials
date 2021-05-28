from pygments.lexers.html import HtmlLexer
from prompt_toolkit.shortcuts import prompt
from prompt_toolkit.lexers import PygmentsLexer

if __name__ == '__main__':
    text = prompt('Enter HTML: ', lexer=PygmentsLexer(HtmlLexer))
    print(f'You said: {text}')
