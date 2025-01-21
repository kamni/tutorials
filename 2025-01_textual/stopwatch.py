#!/usr/bin/env python3

"""
Code adapted from https://textual.textualize.io/tutorial/
Modified by J Leadbetter <j@jleadbetter.com>
"""

from time import monotonic

from textual.app import App, ComposeResult, InvalidThemeError
from textual.containers import HorizontalGroup, VerticalScroll
from textual.reactive import reactive
from textual.theme import BUILTIN_THEMES
from textual.widgets import Button, Digits, Footer, Header, Label


class TimeDisplay(Digits):
    """A widget to display elapsed time"""

    start_time = reactive(monotonic)
    time = reactive(0.0)
    total = reactive(0.0)

    def on_mount(self):
        """Event handler called when widget is added to the app."""

        self.update_timer = self.set_interval(1/60, self.update_time, pause=True)

    def update_time(self):
        """Method to update the time to the current time."""

        self.time = self.total + (monotonic() - self.start_time)

    def watch_time(self, time: float):
        """Called when the time attribute changes."""

        minutes, seconds = divmod(time, 60)
        hours, minutes = divmod(minutes, 60)
        self.update(f"{hours:02,.0f}:{minutes:02.0f}:{seconds:05.2f}")

    def start(self):
        self.start_time = monotonic()
        self.update_timer.resume()

    def stop(self):
        self.update_timer.pause()
        self.total += monotonic() - self.start_time
        self.time = self.total

    def reset(self):
        self.time = 0
        self.total = 0


class Stopwatch(HorizontalGroup):
    """A stopwatch widget"""

    def compose(self) -> ComposeResult:
        """Create child widgets of a stopwatch"""

        yield Button('Start', id='start', variant='success')
        yield Button('Stop', id='stop', variant='error')
        yield Label(id='spacer')
        yield Button('Reset', id='reset', variant='primary')
        yield TimeDisplay(id='time_display')

    def on_button_pressed(self, event: Button.Pressed):
        """Event handler called when button is pressed"""

        time_display = self.query_one('#time_display')
        if event.button.id == 'start':
            time_display.start()
            self.add_class('started')
        elif event.button.id == 'stop':
            time_display.stop()
            self.remove_class('started')
        elif event.button.id == 'reset':
            time_display.reset()


class StopwatchApp(App):
    """A textual app to manage stopwatches"""

    CSS_PATH = 'stopwatch.tcss'
    BINDINGS = [
        ('a', 'add_stopwatch', 'Add'),
        ('d', 'set_dark_theme', 'Reset theme to dark'),
        ('n', 'cycle_theme', 'Rotate through themes'),
        ('r', 'remove_stopwatch', 'Remove'),
    ]

    def action_add_stopwatch(self):
        new_stopwatch = Stopwatch()
        stopwatches = self.query_one('#stopwatches').mount(new_stopwatch)
        new_stopwatch.scroll_visible()

    def action_cycle_theme(self):
        """An action to toggle dark mode"""

        themes = list(BUILTIN_THEMES.keys())
        new_theme_idx = themes.index(self.theme) + 1
        if new_theme_idx >= len(themes):
            new_theme_idx = 0

        new_theme = themes[new_theme_idx]

        try:
            self.theme = new_theme
        except InvalidThemeError:
            self.register_theme(BUILTIN_THEMES[new_theme])
            self.theme = new_theme

    def action_remove_stopwatch(self):
        stopwatches = self.query('Stopwatch')
        if stopwatches:
            stopwatches.last().remove()

    def action_set_dark_theme(self):
        self.theme = 'textual-dark'

    def compose(self) -> ComposeResult:
        """Create child widgets for the app"""
        yield Header()
        yield Footer()
        yield VerticalScroll(
            Stopwatch(),
            Stopwatch(),
            Stopwatch(),
            id='stopwatches',
        )


if __name__ == '__main__':
    app = StopwatchApp()
    app.run()
