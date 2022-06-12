CREATE(aa: City {
  country: 'PL',
  name: 'Warsaw',
  lat: '52.22977',
  lng: '21.01178'
}), (bb: City {
  country: 'US',
  name: 'New York City',
  lat: '40.71427',
  lng: '-74.00597'
}), (cc: City {
  country: 'JP',
  name: 'Tokyo',
  lat: '35.6895',
  lng: '139.69171'
}), (dd: City {
  country: 'IT',
  name: 'Rome',
  lat: '41.89193',
  lng: '12.51133'
}), (ee: City {
  country: "DE",
  name: "Berlin",
  lat: "52.52437",
  lng: "13.41053"
}),
(aa)-[:FLIGHT {
    time: 140,
    cost: 120
    }]->(dd),
(aa)-[:FLIGHT {
    time: 565,
    cost: 80
    }]->(bb),
(aa)-[:FLIGHT {
    time: 900,
    cost: 150
    }]->(cc),
(bb)-[:FLIGHT {
    time: 495,
    cost: 130
    }]->(dd),
(dd)-[:FLIGHT {
    time: 140,
    cost: 75
    }]->(aa),
(cc)-[:FLIGHT {
    time: 1180,
    cost: 150
    }]->(dd),
(ee)-[:FLIGHT {
    time: 60,
    cost: 50
    }]->(dd),
(dd)-[:FLIGHT {
    time: 60,
    cost: 50
    }]->(ee),
(ee)-[:FLIGHT {
    time: 70,
    cost: 45
    }]->(aa),
(aa)-[:FLIGHT {
    time: 80,
    cost: 40
    }]->(ee),
(ee)-[:FLIGHT {
    time: 760,
    cost: 130
    }]->(bb),
(bb)-[:FLIGHT {
    time: 740,
    cost: 120
    }]->(ee),
(r1:Role { role: 'user'}),
(r2:Role { role: 'admin'});

CALL gds.graph.project(
    'flightByTimeGraph',
    'City',
    'FLIGHT',
    {
        relationshipProperties: 'time'
    }
)

CALL gds.graph.project(
    'flightByCostGraph',
    'City',
    'FLIGHT',
    {
        relationshipProperties: 'cost'
    }
)
