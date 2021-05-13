"""
Tutorial from https://npyscreen.readthedocs.io/application-structure.html
"""

import npyscreen

class EmployeeForm(npyscreen.Form):
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


def main(*args):
    form = EmployeeForm(name='New Employee')
    form.edit()
    return f'New record created for {form.name.value}'


if __name__ == '__main__':
    print(npyscreen.wrapper_basic(main))
