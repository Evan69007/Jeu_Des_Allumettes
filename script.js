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

label.innerText = `Joueur ${joueur}, à vous de jouer`

nb_joueur_button.addEventListener('click', () => {
	header.innerText = ""
	nb_joueur = input_joueur.value
	nb_joueur_button.disabled = true
	button.disabled = false
	input_joueur.value = ""
})

button.addEventListener('click', () => {
	nb_a_enlever = input.value
	input.value = ""
	nb_allumettes = enleve_Allumettes(nb_a_enlever)
	if (nb_allumettes > 0)
	{
		update(nb_joueur)
	}
	else
	{
		header.innerText = `Bravo joueur ${joueur}! vous avez gagner`
		label.innerText = ""
		nb_restant.innerText = ""
		input.style.display = "none"
		input_joueur.style.display = "none"
		button.style.display = "none"
		nb_joueur_button.style.display = "none"
		reset_button.style.display = "inline-block"
	}
})

reset_button.addEventListener('click', () => {
	nb_allumettes = 50
	joueur = 1
	reset_button.style.display = "none"
	input.style.display = "inline-block"
	input_joueur.style.display = "inline-block"
	button.style.display = "inline-block"
	nb_joueur_button.style.display = "inline-block"
	button.disabled = true
	nb_joueur_button.disabled = false
	header.innerText = ""
	label.innerText = `Joueur ${joueur}, à vous de jouer`
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
}