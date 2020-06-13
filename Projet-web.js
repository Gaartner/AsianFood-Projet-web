
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
function ajouter ()
{
	if 	(document.getElementById("repasselect").checkValidity()&&document.getElementById("quantiteselect").checkValidity() )
	{
			
			var repas = document.getElementById("repasselect").value;
			var quantite = document.getElementById("quantiteselect").value;
			var table = document.querySelector("tbody");
			var tr = document.createElement("tr");
			quant=quantite
			var prix=9;
			var prixtotal=0
			prixtotal=prix*quant;
			tr.innerHTML = "<td>" + repas + "<td>" + quantite + "<td>" + prixtotal+ "$";
			console.log(quantite);
			table.appendChild(tr);
			total()
	}
	else
	{
		alert("remplissez tous les champs");
	}      
}
function total()
{
	var table = document.getElementById("tbodyUser"), sumVal = 0;
            
        for(var i = 0; i < table.rows.length; i++)
	        {
	            sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
	        }
        
        document.getElementById("val").innerHTML = "l'addition = " + sumVal+"$";
        console.log(sumVal);
    var tables = document.getElementById("tbodyUser"), sumVall = 0;
            
        for(var ii = 0; ii < table.rows.length; ii++)
	        {
	            sumVall = sumVall + parseInt(table.rows[ii].cells[1].innerHTML);
	        }
        
        document.getElementById("item").innerHTML = "item = " + sumVall;
        console.log(sumVall);
}

function supprimer()
{
    var tbody = document.querySelector("tbody");
    tbody.removeChild(tbody.firstChild);
    total()
}