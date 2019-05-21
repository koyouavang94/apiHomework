var root = document.getElementById('root')

var div1 = document.createElement('div');
var image1 = document.createElement('img');
image1.src = 'sunset.jpg';
image1.style.marginLeft = '25rem';
image1.classList.add('w3-animate-fading');
image1.classList.add('w3-sepia-max');
image1.style.height = '35rem';
image1.style.width = '50rem';
root.appendChild(image1);
root.appendChild(div1);

var request = new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/users", true);

request.onload = function() {
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
        data.forEach(users => {
            var card = document.createElement("div");
            card.classList.add('w3-border');
            card.style.marginLeft = '25rem';
            card.style.marginRight = '25rem';
            card.style.marginTop = '5rem';
            card.style.marginBottom = '5rem';
            
            var header = document.createElement("h1");
            header.style.color = 'gray';
            header.style.fontFamily = 'georgia';
            header.style.textAlign = 'center';
            header.classList.add('w3-animate-bottom');
            header.textContent = users.name;

            var smallheader2 = document.createElement("h3");
            smallheader2.style.marginLeft = '3rem';
            smallheader2.style.fontFamily = 'georgia';
            smallheader2.style.textAlign = 'center';
            smallheader2.style.color = 'brown';
            smallheader2.classList.add('w3-animate-bottom');
            smallheader2.textContent = "Email: " + users.email;

            var small = document.createElement("h4");
            small.style.color = 'brown';
            small.style.textAlign = 'center';
            small.style.fontFamily = 'georgia';
            small.classList.add('w3-animate-bottom');
            small.textContent = "Phone Number: " + users.phone;

            var smallheader3 = document.createElement("h4");
            smallheader3.style.textAlign = 'center';
            smallheader3.style.fontFamily = 'georgia';
            smallheader3.style.color = 'brown';
            smallheader3.classList.add('w3-animate-bottom');
            smallheader3.textContent = "Website: " + users.website;

            div1.appendChild(card)
            card.appendChild(header);
            card.appendChild(smallheader2);
            card.appendChild(smallheader3);
            card.appendChild(small);
        });
    } else {
        alert('access denied');
    }
};

request.send();
