function getRandomSet(m, n, uniq, sorted) {
    let retVal = uniq ? new Set() : [];
    let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
    let length = () => uniq ? retVal.size : retVal.length;

    for(;length() < m;) {
        push(Math.floor(Math.random() * Math.floor(n)));
    }

    return sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal];
}