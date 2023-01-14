NAV_LINKS = (
    ('/', '00 Index'),
    ('/01-imports.html', '01 Imports'),
    ('/02-paths.html', '02 Paths'),
    ('/03-paths2.html', '03 More Paths'),
)

navlist = '<div class="nav"><ul>'
for link in NAV_LINKS:
    navlist += f'<li><a href="{link[0]}">{link[1]}</a></li>'
navlist += '</ul></li>'

print(navlist)