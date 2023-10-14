import requests
import colorama
import threading
import os
from colorama import Fore, Style
from threading import Thread
from sys import stdout
from requests import Session
from time import strftime, gmtime
os.system("title [Criado por JapaInCode]")

sent = 0
session = Session()
b = Style.BRIGHT
os = os.system
os('cls')


print(f"""

{b+Fore.BLUE} 

     
     ▓█████▄ ▓█████  ███▄    █  █    ██  ███▄    █  ▄████▄   ██▓ ▄▄▄      
     ▒██▀ ██▌▓█   ▀  ██ ▀█   █  ██  ▓██▒ ██ ▀█   █ ▒██▀ ▀█  ▓██▒▒████▄    
     ░██   █▌▒███   ▓██  ▀█ ██▒▓██  ▒██░▓██  ▀█ ██▒▒▓█    ▄ ▒██▒▒██  ▀█▄  
     ░▓█▄   ▌▒▓█  ▄ ▓██▒  ▐▌██▒▓▓█  ░██░▓██▒  ▐▌██▒▒▓▓▄ ▄██▒░██░░██▄▄▄▄██ 
     ░▒████▓ ░▒████▒▒██░   ▓██░▒▒█████▓ ▒██░   ▓██░▒ ▓███▀ ░░██░ ▓█   ▓██▒
      ▒▒▓  ▒ ░░ ▒░ ░░ ▒░   ▒ ▒ ░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒ ░ ░▒ ▒  ░░▓   ▒▒   ▓▒█░
      ░ ▒  ▒  ░ ░  ░░ ░░   ░ ▒░░░▒░ ░ ░ ░ ░░   ░ ▒░  ░  ▒    ▒ ░  ▒   ▒▒ ░
      ░ ░  ░    ░      ░   ░ ░  ░░░ ░ ░    ░   ░ ░ ░         ▒ ░  ░   ▒   
        ░       ░  ░         ░    ░              ░ ░ ░       ░        ░  ░
      ░                                            ░                      

    /Denuncias em massa

     {b+Fore.BLUE} > {Fore.RESET}Opções

     {b+Fore.BLUE} > {Fore.RESET}Conteúdo ilegal {b+Fore.BLUE}::{Fore.RESET} 1
     {b+Fore.BLUE} > {Fore.RESET}Assédio {b+Fore.BLUE}::{Fore.RESET} 2
     {b+Fore.BLUE} > {Fore.RESET}Spam ou links de phishing {b+Fore.BLUE}::{Fore.RESET} 3
     {b+Fore.BLUE} > {Fore.RESET}Auto-mutilação {b+Fore.BLUE}::{Fore.RESET} 4
     {b+Fore.BLUE} > {Fore.RESET}Conteúdo NSFW {b+Fore.BLUE}::{Fore.RESET} 5
""")

token = input(f"     {b+Fore.BLUE} > Token{Fore.RESET}: ")
headers = {'Authorization': token, 'Content-Type':  'application/json'}  
r = requests.get('https://discord.com/api/v6/users/@me', headers=headers)
if r.status_code == 200:
        pass
else:
        print(f"     {b+Fore.RED} > Token Invalido")
        input()
guild_id1 = input(f"     {b+Fore.BLUE} > ID do servidor{Fore.RESET}: ")
channel_id1 = input(f"     {b+Fore.BLUE} > ID do canal{Fore.RESET}: ")
message_id1 = input(f"     {b+Fore.BLUE} > ID da mensagem{Fore.RESET}: ")
reason1 = input(f"     {b+Fore.BLUE} > Opção{Fore.RESET}: ")


def Main():
  global sent
  headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
        'Authorization': token,
        'Content-Type': 'application/json'
      }

  payload = {
    'channel_id': channel_id1,
    'guild_id': guild_id1,
    'message_id': message_id1,
    'reason': reason1
  }

  while True:
    r = requests.post('https://discord.com/api/v6/report', headers=headers, json=payload)
    if r.status_code == 201:
      print(f"     {Fore.GREEN} > Denuncia enviada {b+Fore.BLUE}::{Fore.GREEN} ID {message_id1}")
      sent += 1
      
    elif r.status_code == 401:
      print(f"     {Fore.RED} > Token inválido")
      input()
      exit()
    else:
      print(f"     {Fore.GREEN} > Denuncia enviada {b+Fore.BLUE}::{Fore.GREEN} ID {message_id1}")


print()
for i in range(500, 1000):
    Thread(target=Main).start()
