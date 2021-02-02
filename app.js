window.addEventListener('DOMContentLoaded', function () {
    let friends = ["Peter", "Morgan", "Ray", "Andrew", "John"];

    let sing = document.getElementById('sing');
    sing.addEventListener('click', function () {
        for (let friendName of friends) {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h3text = document.createTextNode(friendName);
            h3.appendChild(h3text);
            div.appendChild(h3);
            document.body.appendChild(div);
            for(let lineCounter = 99; lineCounter > 0; lineCounter--) {
                let lines = "lines";
                let p = document.createElement('p')
                let ptext = document.createTextNode(lineCounter + " " + lines + " of code in the file, " + lineCounter + " " + lines + " of code; " + friendName + " strikes one out, clears it all out, " + (lineCounter - 1) + " " + lines + " of code in the file");
                if (lineCounter === 2) {
                    ptext = document.createTextNode(lineCounter + " " + lines + " of code in the file, " + lineCounter + " " + lines + " of code; " + friendName + " strikes one out, clears it all out, " + (lineCounter - 1) + " " + "line" + " of code in the file");
                }
                if(lineCounter === 1) {
                    ptext = document.createTextNode(lineCounter + " " + "line" + " of code in the file, " + lineCounter + " " + "line" + " of code; " + friendName + " strikes one out, clears it all out no lines of code in the file");
                }
                p.appendChild(ptext);
                div.appendChild(p);
            }
        };
    });
});
// for (let friendName of friends) {
        //     console.log(friendName.toUpperCase() + ":");
        //     let lineCounter = 99;
        //     let lines = "lines";
        //     while (lineCounter > 0) {
        //         console.log(lineCounter + " " + lines + " of code in the file, " + lineCounter + " " + lines + " of code; " + friendName + " strikes one out, clears it all out, " + (lineCounter - 1) + " " + lines + " of code in the file");
        //         lineCounter = lineCounter - 1;
        //         if (lineCounter === 1) {
        //             lines = "line"
        //         }
        //     }

