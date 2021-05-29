from prompt_toolkit import Application
from prompt_toolkit.application import get_app
from prompt_toolkit.buffer import Buffer
from prompt_toolkit.key_binding import KeyBindings
from prompt_toolkit.layout.containers import VSplit, Window
from prompt_toolkit.layout.controls import BufferControl, FormattedTextControl
from prompt_toolkit.layout.layout import Layout

if __name__ == '__main__':
    buffer1 = Buffer()

    left_window = Window(content=BufferControl(buffer=buffer1))
    right_window = Window(content=FormattedTextControl(text='Hello There!'))

    root_container = VSplit([
        left_window,
        Window(width=1, char='|'),
        right_window,
    ])

    layout = Layout(root_container)

    kb = KeyBindings()

    @kb.add('c-q')
    def _(event):
        event.app.exit()

    @kb.add('c-l')
    def _(event):
        get_app().layout.focus(right_window)

    @kb.add('c-h')
    def _(event):
        get_app().layout.focus(left_window)

    app = Application(
        layout=layout,
        key_bindings=kb,
        full_screen=True,
    )
    app.run()
