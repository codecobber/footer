 <script>
   
   function footerResize(){
        var ht = window.innerHeight;
        var ft = document.getElementById('footer');
        var ftH = ft.offsetHeight;
        var menu = document.getElementById('main');
        var menuH = menu.offsetHeight;
        
        var readyHeight = (ht-ftH-menuH)+"px";
        var contArea = document.getElementById('contentBCK');
        contArea.style.height = readyHeight;
    }

        
      window.onresize = function(event) {
        footerResize();
      };

      footerResize();
      

    </script>
