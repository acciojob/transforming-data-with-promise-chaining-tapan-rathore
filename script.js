//your JS code here. If required.
function transformingData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const number = Number(document.getElementById("ip").value);
            resolve(number)
        }, 2000)
    })
    .then((number)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const multiNum = number*2;
                document.getElementById("output").innerText="Result: "+ multiNum;
                resolve(multiNum);
            },1000)
        })
    })
    .then((multiNum)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const subNum = multiNum-3;
                document.getElementById("output").innerText="Result: "+ subNum;
                resolve(subNum)
            }, 1000)
        })
    })
    .then((subNum)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const divNum = subNum/2;
                document.getElementById("output").innerText="Result: "+ divNum;
                resolve(divNum);
            }, 1000)
        })
    })
    .then((divNum)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const finalNum = divNum+10;
                document.getElementById("output").innerText="Final Result: "+ finalNum;
                resolve(finalNum)
            },1000)
        })
    })
}