var counter = 0;
var userName = "";
var typingSpeed = -25;

// All the HTML elements loaded?
document.addEventListener('DOMContentLoaded', function() {

  // Scroll to the top of the page when page refresh
  $("html, body").animate({scrollTop: 0}, 100);

  setTimeout(function() {

    // After some waiting scrolls to chat
    $('body').animate({ scrollTop: $('#p-hero')[0].scrollHeight }, 1200);

    generateLeftMessage(counter);
    Typed.new('#uniq-' + counter, {
      strings: ["Olá, tudo bem? ^500 Você tomou uma excelente decisão em vir falar comigo.^500 Vou te ajudar a reduzir seus custos com contratações!^500 Já são milhares de pessoas que fizeram o profiler comigo, ^500 tenho certeza que vou lhe surpreender."],
      typeSpeed: typingSpeed,
      showCursor: false,
     
          callback: function() {


            generateLeftMessage(++counter);
            Typed.new('#uniq-' + counter, {
              strings: ["^500 Eu sou o Solid, ^500 seu robô assistente. ^500 E você? ^500 Como posso te chamar?"],
              typeSpeed: typingSpeed,
              showCursor: false,
              callback: function() {

                // Show input bar and name form to the user
                $('#input-bar').toggle();
                $('#form-name').toggleClass('show-form');
                $('#input-name').focus();
              }
            });
          }
      
    });
  }, 800);
});

$('#form-name').submit(function(event) {
  event.preventDefault();

  // Hide the input bar
  $('#input-bar').toggle();

  var name = $(this).serializeArray()[0].value;
  userName = name;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text("Meu nome é " + name + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Muito prazer " + name + "!" + "^500 Agora vou te fazer algumas perguntas para irmos montando seu profiler! OK?"],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 Qual o nome ^500 da sua empresa?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and age form to the user
          $('#input-bar').toggle();
          $('#form-age').toggleClass('show-form');
          $('#input-age').focus() ;

          // Hide name form
          $('#form-name').toggleClass('show-form');
        }
      });
    }
  });
});



$('#form-age').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

 
      emoji = "<i class='em em-grimacing'></i>",
      message = "Legal, vamos lá";


  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateBreakableLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 Você se considera mais extrovertido ^500 ou mais introvertido?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and reason form to the user
          $('#input-bar').toggle();
          $('#form-reason').toggleClass('show-form');
          $('#input-reason').focus();

          // Hide age form
          $('#form-age').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-reason').submit(function(event) {
  event.preventDefault();

  // Hide input bar and get the input value
  $('#input-bar').toggle();

  var reason = $(this).serializeArray()[0].value,
      upperReason = reason.toString().toUpperCase(),
      message = "",
      emoji = "";

  if (upperReason === "extrovertido") {
    message = "Legal";
    emoji = "<i class='em em-mortar_board'></i>";
  } else {
    message = "Precisamos de mais pessoas como você!";
    emoji = "<i class='em em-smile'></i>";
  }

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(reason + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 As pessoas acham que você é mais estressado ou mais calmo?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and date form to the user
          $('#input-bar').toggle();
          $('#form-date').toggleClass('show-form');
          $('#input-date').focus();

          // Hide reason form
          $('#form-reason').toggleClass('show-form');
        }
      });
    }
  });
});

$('#form-date').submit(function(event) {
  event.preventDefault();

  // Hide input bar and get the input value
  $('#input-bar').toggle();

  var date = $(this).serializeArray()[0].value,
      upperDate = date.toString().toUpperCase(),
      message = "",
      emoji = "";

  if (upperDate === "calmo") {
    message = "isso aí, vamos com calma!! ";
    emoji = "<i class='em em-mortar_board'></i>";
  } else {
    message = "Show! Estamos quase lá";
    emoji = "<i class='em em-smile'></i>";
  }

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(date + '.');

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: [message],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Append Emoji
      $('#uniq-' + counter).append(emoji);

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
        strings: ["^500 E quando o assunto é assumir responsabilidades?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          // Show input bar and date form to the user
          $('#input-bar').toggle();
          $('#form-date').toggleClass('show-form');
          $('#input-date').focus();

          // Hide reason form
          $('#form-money').toggleClass('show-form');
        }
      });
    }
  });
});


$('#form-money').submit(function(event) {
  event.preventDefault();

  // Hide input bar
  $('#input-bar').toggle();

  var money = $(this).serializeArray()[0].value;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(+ money);

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Pronto, ^500 já tenho as informações que preciso. ^500 Me passa seu e-mail pessoal? Vou lhe enviar o link para sua conta trial do Profiler"],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      // Show input bar and date form to the user
      $('#input-bar').toggle();
      $('#form-email').toggleClass('show-form');
      $('#input-email').focus();

      // Hide money form
      $('#form-money').toggleClass('show-form');
    }
  });
});

$('#form-email').submit(function(event) {
  event.preventDefault();

  // Hide input bar and email form
  $('#form-email').toggleClass('show-form');
  $('#input-bar').toggle();

  var email = $(this).serializeArray()[0].value;

  generateRightMessage(++counter);
  $('#uniq-' + counter).text(email);

  scrollScreen();

  generateLeftMessage(++counter);
  Typed.new('#uniq-' + counter, {
    strings: ["Tudo certo, ^500 agora aqui está seu profiler"],
    typeSpeed: typingSpeed,
    showCursor: false,
    callback: function () {

      scrollScreen();

      generateLeftMessage(++counter);
      Typed.new('#uniq-' + counter, {
          
        strings: ["Já imaginou saber o perfil compartamental de cada pessoa que você contrata? Seria ótimo ou não?"],
        typeSpeed: typingSpeed,
        showCursor: false,
        callback: function () {

          scrollScreen();

          generateBreakableLeftMessage(++counter);
          Typed.new('#uniq-' + counter, {
            strings: ["Gostou? Deixa a Solides te ajudar a contratar melhor e gastar mesmo! \n"],
            typeSpeed: typingSpeed,
            showCursor: false,
            callback: function () {

              scrollScreen();

              var messages = $('#terminal').find(".chat-message").get().map(function(children) {
                return children.innerText;
              });

              var result = messages[3]
                + ' ' + messages[6]
                + ' O motivo da celebração é ' + messages[9]
                + ' Estou planejando no  ' + messages[12]
                + ' Por volta de ' + messages[15]
                + ' Planejo gastar ' + messages[18]
                + ' Meu email é ' + messages[20];

              // Send email with all the conversation history to the admin
              $.ajax({
                url: '#',
                method: 'POST',
                data: { mensagem: result },
                dataType: 'json'
              });
            }
          });
        }
      });
    }
  });
});

function scrollScreen() {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    window.scrollTo(0, $(document).height());
  }else { $("html, body").animate({ scrollTop: $(document).height() }, 1000); }
}

function generateBreakableLeftMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      img = document.createElement("img"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-left';
  chatName.className = 'chat-name';
  img.className = 'chat-name-icon rotate-30';
  img.src = '../assets/imgs/exclamation-mark.svg';
  chatName.appendChild(img);
  chatMessage.className = 'chat-message breakable-string';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}

function generateLeftMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      img = document.createElement("img"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-left';
  chatName.className = 'chat-name';
  img.className = 'chat-name-icon rotate-30';
  img.src = '../assets/imgs/exclamation-mark.svg';
  chatName.appendChild(img);
  chatMessage.className = 'chat-message';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}

function generateRightMessage(counter) {
  var chatRow = document.createElement("div"),
      chatName = document.createElement("div"),
      span = document.createElement("span"),
      chatMessage = document.createElement("div");
  chatRow.className='chat-row chat-row-right';
  chatName.className = 'chat-name';
  span.className = 'initial';
  span.textContent = 'R';
  chatName.appendChild(span);
  chatMessage.className = 'chat-message';
  chatMessage.id = "uniq-" + counter;
  chatRow.appendChild(chatName);
  chatRow.appendChild(chatMessage);
  document.getElementById('terminal').appendChild(chatRow);
}
