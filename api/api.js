function api1(req, res){
    return res.send({
        "count": 949,
        "previous": null,
        "results": [
          {
            "url": "http://localhost:3001/pokeapi/api/v3/pokemon/1/",
            "name": "bulbasaur"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/2/",
            "name": "ivysaur"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/3/",
            "name": "venusaur"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/4/",
            "name": "charmander"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/5/",
            "name": "charmeleon"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/6/",
            "name": "charizard"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/7/",
            "name": "squirtle"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/8/",
            "name": "wartortle"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/9/",
            "name": "blastoise"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/10/",
            "name": "caterpie"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/11/",
            "name": "metapod"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/12/",
            "name": "butterfree"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/13/",
            "name": "weedle"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/14/",
            "name": "kakuna"
          },
          {
            "url": "https://pokeapi.co/api/v2/pokemon/15/",
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
            "weight": "20",
            "height": "40",
            "abilities": [
                {
                    "ability": {
                        "name": "hola"
                    }
                },
                {
                    "ability": {
                        "name": "joder"
                    }
                },
                {
                    "ability": {
                        "name": "todos"
                    }
                }
            ],
            "moves": [
                {
                    "move": {
                        "name": "mundo"
                    }
                },
                {
                    "move": {
                        "name": "impactruno"
                    }
                },
                {
                    "move": {
                        "name": "aiuda"
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