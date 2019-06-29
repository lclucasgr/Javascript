var Car = 
{
    marca : "Nissan",
    modelo : "350Z",
    comprimento : "3.345mm",
    velocidade : "320km/h"
	
};

for (var properties in Car)
{
    alert(properties + "= "+Car[properties]);
}


