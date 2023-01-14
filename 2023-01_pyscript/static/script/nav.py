NAV_LINKS = (
    ('/', '00 Index'),
    ('/01-imports.html', '01 Imports'),
    ('/02-paths.html', '02 Paths'),
)

navlist = '<div class="nav"><ul>'
for link in NAV_LINKS:
    navlist += f'<li><a href="{link[0]}">{link[1]}</a></li>'
navlist += '</ul></li>'

print(navlist)
