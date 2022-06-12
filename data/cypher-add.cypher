MATCH (n) DETACH DELETE n;
CALL gds.graph.drop('flightByTimeGraph') YIELD graphName;
CALL gds.graph.drop('flightByCostGraph') YIELD graphName;



CALL gds.graph.project(
'flightByTimeGraph',
'City',
'FLIGHT',
{
  relationshipProperties: 'time'
}
);
CALL gds.graph.project(
'flightByCostGraph',
'City',
'FLIGHT',
{
  relationshipProperties: 'cost'
}
);
