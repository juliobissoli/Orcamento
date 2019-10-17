  <html>
  <title>Orçamento</title>
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="orsamento.js"></script>
    <link href="orsamento.css", rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Slab|Poiret+One" rel="stylesheet">

  </head>
  <body>
  <!-- <div class="nav">
    <ul>
      <li><a href="orsamento.html">ORSAMENTO</a></li>
      <li><a href="/calendario/fullcalendar.html">CALENDARIO</a></li>
    </ul>
  </div> -->


   <div class="topo">
      <h1>ORÇAMENTO</h1>
  </div>
  <div id="saldoTotal">

  </div>
  <div class="areaDeTrabalho">
    <div class="araeaDespeza">
      <div id="somadorDispeza">
        <h2>Escreva suas despesas aqui:</h2>
      </div>

        <form class="" action="index.html" method="post">
          <label for= "mone">Despeza</label>
          <input type="text" name="nome" id="despeza">
          <label for= "mone">Valor</label>
          <input type="text" name="valor"  id="valorDespesa">
          <input type="button" value="Salvar" id="valorInput" onclick="somaDespesa()">
        </form>
        <div id="resltDespeza">
        </div>
    </div>

    <div class="renda">
      <div id="somadorRenda">
        <h2>Escreva a sua renda aqui:</h2>
      </div>

      <form class="" action="index.html" method="post">
        <label for= "mone">Renda</label>
        <input type="text" name="nome"  id="arecadacao">
        <label for= "mone">Valor</label>
        <input type="text" name="valor" id="valorArecadacao">
        <input type="button" value="Salvar" id="valorOutput" onclick="somaRenda()">
      </form>

      <div id="resultRenda">
      </div>
    </div>
  </div>

  <div class="area_calendario">
    <div id='wrap'>

    <div id='calendar'></div>

    <div style='clear:both'></div>
    </div>

  </div>

  </body>
  </html>
