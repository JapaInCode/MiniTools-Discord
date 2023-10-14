import time
import sys
import os
import colorama
from colorama import Fore
import requests
import threading

os.system("By LofyTeam")

def anim():
    l = ['|', '/', '-', '\\']
    for i in l+l+l:
        sys.stdout.write('\r' + f'     {Fore.CYAN}[>] Carregando Spammer {Fore.RESET}'+i)
        sys.stdout.flush()
        time.sleep(0.2)

def anim2():
    l = ['|', '/', '-', '\\']
    for i in l+l+l:
        sys.stdout.write('\r' + f'     {Fore.RED}[x] Nenhum webhook especificado, saindo {Fore.RESET}'+i)
        sys.stdout.flush()
        time.sleep(0.2)

def anim3():
    l = ['|', '/', '-', '\\']
    for i in l+l+l:
        sys.stdout.write('\r' + f'     {Fore.GREEN}[>] Iniciando Spam {Fore.RESET}'+i)
        sys.stdout.flush()
        time.sleep(0.2)


os.system('cls')
anim()
os.system("title [Criado por JapaInCode]")
os.system('cls')
defaulthookname = 'Webhook SPWN!'
defaultmessage = 'Você recebeu spam! :scream: '

print(f"""{colorama.Fore.MAGENTA}

     
      █     █░▓█████  ▄▄▄▄    ██░ ██  ▒█████   ▒█████   ██ ▄█▀     ██████  ██▓███   ▄▄▄       █     █░███▄    █ 
     ▓█░ █ ░█░▓█   ▀ ▓█████▄ ▓██░ ██▒▒██▒  ██▒▒██▒  ██▒ ██▄█▒    ▒██    ▒ ▓██░  ██▒▒████▄    ▓█░ █ ░█░██ ▀█   █ 
     ▒█░ █ ░█ ▒███   ▒██▒ ▄██▒██▀▀██░▒██░  ██▒▒██░  ██▒▓███▄░    ░ ▓██▄   ▓██░ ██▓▒▒██  ▀█▄  ▒█░ █ ░█▓██  ▀█ ██▒
     ░█░ █ ░█ ▒▓█  ▄ ▒██░█▀  ░▓█ ░██ ▒██   ██░▒██   ██░▓██ █▄      ▒   ██▒▒██▄█▓▒ ▒░██▄▄▄▄██ ░█░ █ ░█▓██▒  ▐▌██▒
     ░░██▒██▓ ░▒████▒░▓█  ▀█▓░▓█▒░██▓░ ████▓▒░░ ████▓▒░▒██▒ █▄   ▒██████▒▒▒██▒ ░  ░ ▓█   ▓██▒░░██▒██▓▒██░   ▓██░
     ░ ▓░▒ ▒  ░░ ▒░ ░░▒▓███▀▒ ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒░▒░▒░ ▒ ▒▒ ▓▒   ▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░ ▒▒   ▓▒█░░ ▓░▒ ▒ ░ ▒░   ▒ ▒ 
       ▒ ░ ░   ░ ░  ░▒░▒   ░  ▒ ░▒░ ░  ░ ▒ ▒░   ░ ▒ ▒░ ░ ░▒ ▒░   ░ ░▒  ░ ░░▒ ░       ▒   ▒▒ ░  ▒ ░ ░ ░ ░░   ░ ▒░
       ░   ░     ░    ░    ░  ░  ░░ ░░ ░ ░ ▒  ░ ░ ░ ▒  ░ ░░ ░    ░  ░  ░  ░░         ░   ▒     ░   ░    ░   ░ ░ 
         ░       ░  ░ ░       ░  ░  ░    ░ ░      ░ ░  ░  ░            ░                 ░  ░    ░            ░ 
                           ░                                                                                    

     /Webhook spawn e delete

     """)

def send(webhook, message, username):
    data = {
        'content': message,
        'username': hookname
    }
    try:
        print(" ")
        while True:
            requests.post(webhook, data=data)
            print(f'     {Fore.CYAN}[>]{Fore.RESET} Mensagem enviada! {Fore.GREEN}[SUCESSO]{Fore.RESET}')
    except KeyboardInterrupt: 
        exit()


webhook = input(f'     {Fore.GREEN}[>]{Fore.RESET} Insira o link do seu webhook: {Fore.RESET}')
if webhook == '': 
	print(" ")
	anim2()
	print(" ")
	os.system('cls')
	exit()
print(" ")

hookname = input(f'     {Fore.GREEN}[>]{Fore.RESET} Qual você gostaria que fosse o nome de usuário ?: {Fore.RESET}')
if hookname == '': 
    hookname = defaulthookname
    print(" ")
    print(f'     {Fore.RED}[x]{Fore.RESET} Defina como nome de usuário padrão.{Fore.RESET}')

print(" ")
message = input(f'     {Fore.GREEN}[>]{Fore.RESET} Digite sua mensagem: {Fore.RESET}')
if message == '': 
    message = defaultmessage
    print(" ")
    print(f'     {Fore.RED}[x]{Fore.RESET} Definir como mensagem padrão')

try:
    print(" ")
    threads = int(input(f'     {Fore.GREEN}[>]{Fore.RESET} Quantos tópicos você gostaria de executar ?: {Fore.RESET}'))
    if threads < 1: 
        print(" ")
        print(f'     {Fore.RED}[x]{Fore.RESET} Negativo ou sem threads, definindo Threads para 1.{Fore.RESET}')
        threads = 1

except ValueError:
    threads = 1
    print(" ")
    print(f'     {Fore.RED}[x] Tópicos inválidos / definição para 1.{Fore.RESET}')

print(" ")
print(f'     {Fore.CYAN}[>] Iniciando Spam.{Fore.RESET}')

for x in range(threads):
    thread = threading.Thread(
        target=send(webhook, message, hookname), args=(1,))
    thread.start()
print(f'{Fore.RED}[]')