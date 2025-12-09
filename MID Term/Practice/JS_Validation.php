<!DOCTYPE html>
<html>
    <head>
        <title>
            JS Validation
        </title>
    </head>
    <body>
        
        <script>
            function toggle()
            {
                let body=document.body;
                //let title=document.h1;[All h1]
                let title=document.getElementById("T1");
                let button=document.getElementById("B1");
                
                if(body.style.backgroundColor === "black")
                {
                    body.style.backgroundColor = "white";
                    body.style.color="black";
                    title.innerHTML="LIGHT MODE";
                    button.innerHTML="SWITCH TO DARK MODE";
                }
                else
                {
                    body.style.backgroundColor="black";
                    body.style.color="white";
                    title.innerHTML="DARK MODE";
                    button.innerHTML="SWITCH TO LIGHT MODE";
                }
            }
        </script>
    </body>
</html>