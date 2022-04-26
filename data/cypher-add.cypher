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
(aa)-[:FLIGHT {time: 140}]->(dd),
(aa)-[:FLIGHT {time: 565}]->(bb),
(aa)-[:FLIGHT {time: 900}]->(cc),
(bb)-[:FLIGHT {time: 495}]->(dd),
(dd)-[:FLIGHT {time: 140}]->(aa),
(cc)-[:FLIGHT {time: 1180}]->(dd),
(ee)-[:FLIGHT {time: 60}]->(dd),
(dd)-[:FLIGHT {time: 60}]->(ee),
(ee)-[:FLIGHT {time: 70}]->(aa),
(aa)-[:FLIGHT {time: 80}]->(ee),
(ee)-[:FLIGHT {time: 760}]->(bb),
(bb)-[:FLIGHT {time: 740}]->(ee);