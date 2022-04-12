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
}),
(aa)-[:FLIGHT {time: 140}]->(dd),
(aa)-[:FLIGHT {time: 565}]->(bb),
(aa)-[:FLIGHT {time: 900}]->(cc),
(bb)-[:FLIGHT {time: 495}]->(dd),
(dd)-[:FLIGHT {time: 140}]->(aa),
(cc)-[:FLIGHT {time: 1180}]->(dd)
