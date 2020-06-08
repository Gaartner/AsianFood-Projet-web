
function fermer()
{
	if 	(document.getElementById("jean").checkValidity()&&document.getElementById("timeselect").checkValidity()&&document.getElementById("peopleselect").checkValidity() )
	{
		alert("votre reservation pour "+jean.value+" pour "+peopleselect.value+" à "+timeselect.value+" est bien enregistré mais Nous sommes désolé, due aux restrictions gouvernemental du Covid-19 nous ne pouvons pas prendre de réservation. Nous pouvons toutefois vous redirigez vers notre page de livraison 'commande en ligne'");
	}
	else 
	{
		alert("rempli bien tout les champs ")
	}
}
/*
function showEquipe()
{
	document.querySelector('#aboutteam').style.display="block";

}
function showService()
{
	document.querySelector('#aboutteam').style.display="none";
}
*/