(function() {
   tinymce.create('tinymce.plugins.video', {
      init : function(ed, url) {
         ed.addButton('add_video_button', {
            title : 'Adicionar Video',
            image : url+'/video.png',
            onclick : function() {
              let codigo = prompt("Digite o número correspondente a plataforma\n 1 - Youtube\n 2 - Vimeo");
                 if(codigo == 1){
                    let id = prompt("Digite o ID do video.");
                    if (id != null && id != ''){
                       let lang = prompt("Digite o número correspondente ao idioma\n 1 - Português\n 2 - Espanhol\n 3 - Inglês");
                          if(lang == 1){
                             ed.execCommand('mceInsertContent', false, '[youtube id="'+id+'" lang="Continue lendo nosso artigo logo após assistir o video."]');
                          }else if(lang == 2){
                             ed.execCommand('mceInsertContent', false, '[youtube id="'+id+'" lang="Continúe leyendo nuestro artículo justo después de ver el video."]');
                          }else if(lang == 3){
                             ed.execCommand('mceInsertContent', false, '[youtube id="'+id+'" lang="Continue reading our article right after watching the video."]');
                          }else{
                             ed.execCommand('mceInsertContent', false, '[youtube id="'+id+'" lang=""]');
                          }
                    }else{
                       alert("Nenhuma URL foi digitada!");
                    }
                 }else if(codigo == 2){
                    let id = prompt("Digite o ID do video.");
                    if (id != null && id != ''){
                       let lang = prompt("Digite o número correspondente ao idioma\n 1 - Português\n 2 - Espanhol\n 3 - Inglês");
                          if(lang == 1){
                             ed.execCommand('mceInsertContent', false, '[vimeo id="'+id+'" lang="Continue lendo nosso artigo logo após assistir o video."]');
                          }else if(lang == 2){
                             ed.execCommand('mceInsertContent', false, '[vimeo id="'+id+'" lang="Continúe leyendo nuestro artículo justo después de ver el video."]');
                          }else if(lang == 3){
                             ed.execCommand('mceInsertContent', false, '[vimeo id="'+id+'" lang="Continue reading our article right after watching the video."]');
                          }else{
                             ed.execCommand('mceInsertContent', false, '[vimeo id="'+id+'" lang=""]');
                          }
                    }else{
                       alert("Nenhum ID foi digitado!");
                    }  
                 }else{
                    alert("Código inválido!");
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
            authorurl : 'http://github.com/rafa600rr',
            infourl : '',
            version : "1.0"
         };
      }
   });
   tinymce.PluginManager.add('add_video_button', tinymce.plugins.video);
})();