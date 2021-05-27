"""
Code loosely from https://npyscreen.readthedocs.io/options.html
"""

import npyscreen


class OptionsForm(npyscreen.Form):
    FILE = 'test.txt'

    def afterEditing(self):
        self._optionlist.write_to_file()

    def beforeEditing(self):
        try:
            self._optionlist.reload_from_file()
        except FileNotFoundError:
            pass

    def create(self):
        self._optionlist = npyscreen.OptionList(filename=self.FILE)

        self._optionlist.options.extend([
            npyscreen.OptionFreeText(
                'FreeText',
                value='',
                documentation='This is some documentation',
            ),
            npyscreen.OptionMultiChoice(
                'MultiChoice',
                choices=['Choice 1', 'Choice 2', 'Choice 3'],
            ),
            npyscreen.OptionFilename('Filename'),
            npyscreen.OptionDate('Date'),
            npyscreen.OptionMultiFreeText(
                'MultilineText',
                value='',
            ),
            npyscreen.OptionMultiFreeList('MultilineList'),
        ])

        self.add(
            npyscreen.OptionListDisplay,
            name="Option List",
            values=self._optionlist.options,
            scroll_exit=True,
            max_height=None,
        )


class OptionsApp(npyscreen.NPSAppManaged):
    def onInMainLoop(self):
        self.setNextForm(None)

    def onStart(self):
        self.addForm('MAIN', OptionsForm, name="Test Options")


if __name__ == '__main__':
    OptionsApp().run()
