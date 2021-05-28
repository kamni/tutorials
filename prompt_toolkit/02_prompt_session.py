from prompt_toolkit import PromptSession

if __name__ == '__main__':
    session = PromptSession()

    # You can use the up arrow to enter the same text twice
    text1 = session.prompt('Text1: ')
    text2 = session.prompt('Text2: ')

    print(f'{text1} | {text2}')
