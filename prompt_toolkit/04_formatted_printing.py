import pygments
from pygments.lexers.python import PythonLexer

from prompt_toolkit import ANSI, HTML, print_formatted_text as print
from prompt_toolkit.formatted_text import (
    FormattedText,
    PygmentsTokens,
    to_formatted_text,
)
from prompt_toolkit.styles import Style


print('This is some text')
print(HTML('<b>This is bold</b>'))
print(HTML('<i>This is italic</i>'))
print(HTML('<u>This is underline</u>'))

print(HTML('<ansired>This text is red</ansired>'))
print(HTML('<skyblue>This text is skyblue</skyblue>'))
print(HTML('<aaa fg="ansiwhite" bg="ansigreen">White on green</aaa>'))

style = Style.from_dict({
    'aaa': '#ff0066',
    'bbb': '#44ff00 italic',
})
print(HTML('<aaa>Hello</aaa> <bbb>World</bbb>'), style=style)

print(ANSI('\x1b[31mhello \x1b[32mworld'))

text = FormattedText([
    ('#ff0066', 'Hello'),
    ('', ' '),
    ('#44ff00 italic', 'World'),
])
print(text)

other_text = FormattedText([
    ('class:aaa', 'Hello'),
    ('', ' '),
    ('class:bbb', 'World'),
])
print(other_text, style=style)

token_style = Style.from_dict({
    'pygments.keyword': 'underline',
    'pygments.literal.string': 'bg:#00ff00 #ffffff',
})

tokens = list(pygments.lex('print("Hello")', lexer=PythonLexer()))
print(PygmentsTokens(tokens), style=token_style)

html = HTML('<aaa>Hello</aaa> <bbb>World</bbb>')
html_text = to_formatted_text(html, style="class:my_html bg:#00ff00 italic")

print(html_text)
