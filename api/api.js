function api1(req, res){
    const ip = "127.0.0.1"
    return res.send({
        "count": 949,
        "previous": null,
        "results": [
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/1/",
            "name": "bulbasaur"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/2/",
            "name": "ivysaur"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/3/",
            "name": "venusaur"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/4/",
            "name": "charmander"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/5/",
            "name": "charmeleon"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/6/",
            "name": "charizard"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/7/",
            "name": "squirtle"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/8/",
            "name": "wartortle"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/9/",
            "name": "blastoise"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/10/",
            "name": "caterpie"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/11/",
            "name": "metapod"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/12/",
            "name": "butterfree"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/13/",
            "name": "weedle"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/14/",
            "name": "kakuna"
          },
          {
            "url": "http://" + ip + ":3001/pokeapi/api/v3/pokemon/15/",
            "name": "beedrill"
          }
        ],
        "next": "https://pokeapi.co/api/v2/pokemon/?limit=15&offset=15"
      })
}

function api2(req, res) {
    const pokemons = [
        {
            "id": "1",
            "name": "bulbasaur",
            "weight": "6.9 kg",
            "height": "0.7 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Overgrow"
                    }
                },
                {
                    "ability": {
                        "name": "Chlorophyll"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Tackle"
                    }
                },
                {
                    "move": {
                        "name": "Growl"
                    }
                }
            ]
        },
        {
            "id": "2",
            "name": "ivysaur",
            "weight": "13.0 kg",
            "height": "1.0 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Overgrow"
                    }
                },
                {
                    "ability": {
                        "name": "Chlorophyll"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Tackle"
                    }
                },
                {
                    "move": {
                        "name": "Growl"
                    }
                }
            ]
        },
        {
            "id": "3",
            "name": "venusaur",
            "weight": "100.0 kg",
            "height": "2.0 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Overgrow"
                    }
                },
                {
                    "ability": {
                        "name": "Chlorophyll"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Solar Beam"
                    }
                },
                {
                    "move": {
                        "name": "Petal Blizzard"
                    }
                }
            ]
        },
        {
            "id": "4",
            "name": "charmander",
            "weight": "8.5 kg",
            "height": "0.61 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Blaze"
                    }
                },
                {
                    "ability": {
                        "name": "Solar Power"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Ember"
                    }
                },
                {
                    "move": {
                        "name": "Fire Fang"
                    }
                }
            ]
        },
        {
            "id": "5",
            "name": "charmaleon",
            "weight": "19.0 kg",
            "height": "1.1 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Blaze"
                    }
                },
                {
                    "ability": {
                        "name": "Solar Power"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Ember"
                    }
                },
                {
                    "move": {
                        "name": "Fire Fang"
                    }
                }
            ]
        },
        {
            "id": "6",
            "name": "charisandra",
            "weight": "90.5 kg",
            "height": "1.7 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Blaze"
                    }
                },
                {
                    "ability": {
                        "name": "Solar Power"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Flare Blitz"
                    }
                },
                {
                    "move": {
                        "name": "Inferno"
                    }
                }
            ]
        },
        {
            "id": "7",
            "name": "squirtle",
            "weight": "9.0 kg",
            "height": "0.5 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Torrent"
                    }
                },
                {
                    "ability": {
                        "name": "Rain Dish"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Water Gun"
                    }
                },
                {
                    "move": {
                        "name": "Water Gun"
                    }
                }
            ]
        },
        {
            "id": "8",
            "name": "wartortle",
            "weight": "22.5 kg",
            "height": "1 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Torrent"
                    }
                },
                {
                    "ability": {
                        "name": "Rain Dish"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Water Gun"
                    }
                },
                {
                    "move": {
                        "name": "Water Gun"
                    }
                }
            ]
        },
        {
            "id": "9",
            "name": "blastoise",
            "weight": "85.5 kg",
            "height": "1.6 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Torrent"
                    }
                },
                {
                    "ability": {
                        "name": "Rain Dish"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Aqua Tail"
                    }
                },
                {
                    "move": {
                        "name": "Hydro Pump"
                    }
                }
            ]
        },
        {
            "id": "10",
            "name": "caterpie",
            "weight": "2.9 kg",
            "height": "0.3 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Shield Dust"
                    }
                },
                {
                    "ability": {
                        "name": "Run Away"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Bug Bite"
                    }
                }
            ]
        },
        {
            "id": "11",
            "name": "metapod",
            "weight": "9.9 kg",
            "height": "0.7 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Shed Skin"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Harden"
                    }
                }
            ]
        },
        {
            "id": "12",
            "name": "butterfree",
            "weight": "32.0 kg",
            "height": "1.1 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Compound Eyes"
                    }
                },
                {
                    "ability": {
                        "name": "Tinted Lens"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Air Slash"
                    }
                },
                {
                    "move": {
                        "name": "Bug Buzz"
                    }
                }
            ]
        },
        {
            "id": "13",
            "name": "weedle",
            "weight": "3.2 kg",
            "height": "0.3 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Shield Dust"
                    }
                },
                {
                    "ability": {
                        "name": "Run Away"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Poison Sting"
                    }
                },
                {
                    "move": {
                        "name": "Bug Bite"
                    }
                }
            ]
        },
        {
            "id": "14",
            "name": "kakuna",
            "weight": "10.0 kg",
            "height": "0.6 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Shed Skin"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Harden"
                    }
                }
            ]
        },
        {
            "id": "15",
            "name": "beedrill",
            "weight": "29.5 kg",
            "height": "1.0 m",
            "abilities": [
                {
                    "ability": {
                        "name": "Swarm"
                    }
                },
                {
                    "ability": {
                        "name": "Sniper"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "Venoshock"
                    }
                },
                {
                    "move": {
                        "name": "Fell Stinger"
                    }
                }
            ]
        }
    ]
    res.send(pokemons[req.params.id - 1])
}

module.exports = {
    api1,
    api2
}