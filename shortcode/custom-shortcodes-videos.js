(function() {
   tinymce.create('tinymce.plugins.video', {
      init : function(ed, url) {
         ed.addButton('add_video_button', {
            title : 'Adicionar Video',
            image : url+'/video.png',
            onclick : function() {
               escolherPlataforma("Digite o número correspondente a plataforma\n 1 - Youtube\n 2 - Vimeo");

               function escolherPlataforma(message){
                  let codigo = prompt(message);

                  if(codigo == 1){
                     capturarIdVideo("youtube")
                  }else if(codigo == 2){
                     capturarIdVideo("vimeo")
                  }else{
                     alert("Código inválido!");
                  }

                  function capturarIdVideo(plataforma){
                     let id = prompt("Digite o ID do video.");

                     if(id != null && id != ''){
                        let lang = prompt("Digite o número correspondente ao idioma\n 1 - Português\n 2 - Espanhol\n 3 - Inglês");
                        let headlinetopo = prompt("Digite a headline do topo.");
                        let font = prompt("Especifique a fonte autora do video.");
                        let message = retornaLang(lang);

                        ed.execCommand('mceInsertContent', false, `[${plataforma} id="${id}" lang="${message}" headlinetopo="${headlinetopo}" fonte="${font}"]`);

                     }else{
                        alert("Nenhum ID foi digitada!");
                     }

                     function retornaLang(id){
                        const message = {
                           1: "Continue lendo nosso artigo logo após assistir o video.",
                           2: "Continúe leyendo nuestro artículo justo después de ver el video.",
                           3: "Continue reading our article right after watching the video."
                        }

                        return message[id];
                     }
                  }
               }
            }
         });
      },
      createControl : function(n, cm) {
         return null;
      },
      getInfo : function() {
         return {
            longname : "Adicionar Video",
            author : 'Rafael Vieira',
            authorurl : 'http://github.com/rafaeldevcode',
            infourl : '',
            version : "1.0"
         };
      }
   });
   tinymce.PluginManager.add('add_video_button', tinymce.plugins.video);
})();