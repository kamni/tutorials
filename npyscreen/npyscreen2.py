"""
Tutorial from https://npyscreen.readthedocs.io/application-structure.html
"""

import npyscreen


class EmployeeForm(npyscreen.Form):
    #def afterEditing(self):
    #    self.parentApp.setNextForm(None)

    def create(self):
        super().create()
        self.name = self.add(npyscreen.TitleText, name='Name')
        self.department = self.add(
            npyscreen.TitleSelectOne,
            name='Department',
            values=['Accounting', 'HR', 'IT'],
            max_height=3,
        )
        self.start_date = self.add(npyscreen.TitleDateCombo, name='Date Employed')


class App(npyscreen.NPSAppManaged):
    def onInMainLoop(self):
        self.setNextForm(None)

    def onStart(self):
        self.addForm('MAIN', EmployeeForm, name='New Employee')


if __name__ == '__main__':
    App().run()
