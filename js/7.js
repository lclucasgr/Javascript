	var botao = document.getElementById("btn");
	var bt = document.getElementById("bt");
	var title = document.getElementById("title");
	
	botao.addEventListener('click', function()
	{
		alert('você clicou');
	})
	
	bt.addEventListener('click', function()
	{
		title.remove();
	})