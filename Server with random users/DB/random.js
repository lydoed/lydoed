const all = []
const sex = ['Male', 'Female']
const names_male = ['Oleg', 'Vlad', 'Viktor', 'Max', 'Sten', 'Levi']
const names_female = ['Sasha', 'Ania', 'Vlada', 'Megan', 'Masha']
const numb_of_subs = 150


// Шукає друзів
function find_friends(all){
    all.forEach(user => {
        user.Subscribes.forEach(sub => {
            all.forEach(other_user => {
                if ( sub == other_user.id){
                    other_user.Subscribes.forEach(subs_other_user => {
                        if(subs_other_user == user.id){
                            try{user.Friends.push(other_user.id)}catch{user.Friends = [other_user.id]}
                        }  
                })}  
            })
        })
        if (user.Friends) {}else{ user.Friends = []}
    })   
}


// Генерує юзерів
function numberofusers(min, max){
    let id = 0
    const q = Math.floor(Math.random()*(max - min) + min)
    let subs = []
    for (let i = 0; i < q; i++){
        id++
        if (sex[Math.floor(Math.random()*2)] == 'Male'){
            for (let x = 1; x <= q; x++){
                if (subs.length < numb_of_subs && id != x && Math.floor(Math.random()*2) == 1){
                    subs.push(x)
                }else{}
            }
            all.push({name: names_male[Math.floor(Math.random()*names_male.length)],id: id,  sex: 'Male', Subscribes: subs})
            subs = []
        }else{
            for (let x = 1; x <= q; x++){
                if (subs.length < numb_of_subs && id != x && Math.floor(Math.random()*2) == 1){
                    subs.push(x)
                }else{}
            }
            all.push({name: names_female[Math.floor(Math.random()*names_female.length)], id: id, sex: 'Female', Subscribes: subs})
            subs = []
        }
    }
    find_friends(all)
    all.sort((a, b) =>{
        if (a.Subscribes.length > b.Subscribes.length){return 1;}
        if(a.Subscribes.length < b.Subscribes.length){return -1;}
        return 0
    })
}


numberofusers(200, 300)

export {all}









