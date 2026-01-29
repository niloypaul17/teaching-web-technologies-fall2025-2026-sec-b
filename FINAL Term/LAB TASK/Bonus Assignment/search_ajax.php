<script>
    function ajaxapply(){
        let name=document.getElementById("name").value;

        let product ={
            'name': name
        };

        let data=JSON.stringify(product);
        let xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'search_model.php', true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send('product='+data);
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let ProductData = JSON.parse(this.responseText);
                document.getElementById('T1').innerHTML = `
                        <tr>
                            <th><b>NAME</b></th>
                            <th><b>PROFIT</b></th>
                        </tr>
                        <tr>
                            <td>${ProductData['name']}</td>
                            <td>${ProductData['profit']}</td>
                            <td>
                                <a href="edit.php?name=${ProductData['name']}"> edit </a> 
                            </td>
                            <td>
                                <a href="delete.php?name=${ProductData['name']}"> delete </a>
                            </td>
                        </tr>`;
                
            }
        }
    }
</script>