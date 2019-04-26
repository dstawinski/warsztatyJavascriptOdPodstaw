
// request ready state:
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

let displayText;
// Wczytanie zwykłego pliku txt
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        displayText = this.responseText;
        // alert(this.responseText)
        const div = document.createElement('div')
        console.log(div)

        // const htmlDiv = document.querySelector('div')
        // console.log(htmlDiv)
        const h1 = document.createElement('h1')
        h1.innerText = displayText;
        div.appendChild(h1)
        // console.log(div)
        document.getElementById('root').appendChild(div)
    }
};
xhttp.open("GET", "test1.txt", true);
xhttp.send();

// // Wczytanie pliku XML
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         const xmlDocument = this.responseXML;
//         const texts = xmlDocument.getElementsByTagName('TEXT')
//         alert(texts[0].innerHTML)
//         console.log(xmlDocument)
//     }
// };
// xhttp.open("GET", "test2.xml", true);
// xhttp.send();

// // Wczytanie pliku json
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // console.log(this.responseText);
//         const parsedFile = JSON.parse(this.responseText)
//         // console.log(parsedFile)
//         alert(parsedFile.texts)
//         for (let i = 0; i < parsedFile.texts.length; i++) console.log(parsedFile.texts[i])
//     }
// };
// xhttp.open("GET", "test3.json", true);
// xhttp.send();

// Tworzenie i podłączanie elementów html


h1.addEventListener('click', () => h1.style.backgroundColor = 'blue')

// const ol = document.createElement('ol')

// for (let i = 0; i < 10; i++) {
//     const li = document.createElement('li')
//     li.innerText = 'Element' + i
//     li.addEventListener('click', () => li.style.fontSize = '24px')
//     ol.appendChild(li)
// }

// const query1 = document.querySelectorAll("li")

// document.body.appendChild(ol)

// const query2 = document.querySelectorAll("li")

// console.log(query1, query2)

// const script = document.createElement('script')

// script.innerText = 'alert("MNIE TU NIE BYŁO")'

// document.head.appendChild(script)


// // Wczytanie pliku js i załączenie do strony
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         const script = document.createElement('script')
//         script.innerText = this.responseText
//         document.head.appendChild(script)
//     }
// };
// xhttp.open("GET", "test5.js", true);
// xhttp.send();


// // BONUS: Wczytywanie plików html i dodawanie elementów z nich do documentu
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         const parser = new DOMParser()
//         const doc = parser.parseFromString(this.responseText, "text/xml");
//         document.getElementById('root').appendChild(doc.firstChild)
//     }
// };
// xhttp.open("GET", "test5.html", true);
// xhttp.send();