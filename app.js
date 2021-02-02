window.addEventListener('DOMContentLoaded', function () {
    let friends = ["Peter", "Morgan", "Ray", "Andrew", "John"];

    let sing = document.getElementById('sing');
    sing.addEventListener('click', function () {
        let pdiv = document.createElement('div');
        let mdiv = document.createElement('div');
        let rdiv = document.createElement('div');
        let adiv = document.createElement('div');
        let jdiv = document.createElement('div');
        let ph3 = document.createElement('h3');
        let mh3 = document.createElement('h3');
        let rh3 = document.createElement('h3');
        let ah3 = document.createElement('h3');
        let jh3 = document.createElement('h3');
        let ptxt = document.createTextNode('Peter');
        let mtxt = document.createTextNode('Morgan');
        let rtxt = document.createTextNode('Ray');
        let atxt = document.createTextNode('Andrew');
        let jtxt = document.createTextNode('John');
        let pp = document.createElement('p');
        let mp = document.createElement('p');
        let rp = document.createElement('p');
        let ap = document.createElement('p');
        let jp = document.createElement('p');
        ph3.appendChild(ptxt);
        mh3.appendChild(mtxt);
        rh3.appendChild(rtxt);
        ah3.appendChild(atxt);
        jh3.appendChild(jtxt);
        pdiv.appendChild(ph3);
        mdiv.appendChild(mh3);
        rdiv.appendChild(rh3);
        adiv.appendChild(ah3);
        jdiv.appendChild(jh3);
        pdiv.appendChild(pp);
        mdiv.appendChild(mp);
        rdiv.appendChild(rp);
        adiv.appendChild(ap);
        jdiv.appendChild(jp);
        document.body.appendChild(pdiv);
        document.body.appendChild(mdiv);
        document.body.appendChild(rdiv);
        document.body.appendChild(adiv);
        document.body.appendChild(jdiv);
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
        // }
    })
})
