let nb_allumettes = 50
let nb_a_enlever
let joueur = 1
let nb_joueur

const header = document.querySelector('h1');
const input = document.querySelector('#nb_allumettes_a_enlever');
const input_joueur = document.querySelector('#nb_joueur');
const label = document.querySelector('#allumettes');
const button = document.querySelector('#valider');
const nb_joueur_button = document.querySelector('#nb_joueur_button');
const reset_button = document.querySelector('#reset');
const nb_restant = document.querySelector('#nb_restant');
const allumettes = document.querySelector('#nb_allumettes');

nb_joueur_button.addEventListener('click', () => {
	header.innerText = ""
	nb_joueur = input_joueur.value
	if (nb_joueur > 0)
	{
		button.style.display = "inline-block"
		input.style.display = "inline-block"
		nb_joueur_button.style.display = "none"
		input_joueur.style.display = "none"
		input_joueur.value = ""
		label.innerText = `Joueur ${joueur}, à vous de jouer`
	}
})

button.addEventListener('click', () => {
	nb_a_enlever = input.value
	input.value = ""
	if (nb_a_enlever < 7 && nb_a_enlever > 0)
	{
		nb_allumettes = enleve_Allumettes(nb_a_enlever)
		if (nb_allumettes > 0)
		{
			update(nb_joueur)
		}
		else
		{
			allumettes.innerText = ""
			header.innerText = `Bravo joueur ${joueur}! Vous avez gagné`
			label.innerText = ""
			nb_restant.innerText = ""
			input.style.display = "none"
			button.style.display = "none"
			reset_button.style.display = "inline-block"
		}
	}
})

reset_button.addEventListener('click', () => {
	nb_allumettes = 50
	joueur = 1
	reset_button.style.display = "none"
	input_joueur.style.display = "inline-block"
	nb_joueur_button.style.display = "inline-block"
	header.innerText = ""
	label.innerText = ""
})

function enleve_Allumettes(nb_a_enlever)
{
	return (nb_allumettes - nb_a_enlever)
}

function update(nb_joueur)
{
	nb_restant.innerText = `Il reste ${nb_allumettes} allumettes`
	if (joueur == nb_joueur)
		joueur = 1
	else
		joueur++
	label.innerText = `Joueur ${joueur}, à vous de jouer`
	allumettes.innerText = ""
	for(let i=0; i<nb_allumettes;i++)
	{
		allumettes.innerText += " | "
	}
}