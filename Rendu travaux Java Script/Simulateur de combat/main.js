class guerrier {
    constructor(name, life, attack, chance) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.success = chance;
    }

    Attack(target) {
        let chance = Math.random()
        
        if (this.success > chance)
        {
            console.log(this.name, "attaque" ,target.name);
            target.life -= this.attack;
            console.log(target.name, "a", target.life, "points de vie")
        }

        else
        {
            console.log(this.name, "a loupé son coup")
        }
    }
} 

let Conssesao = new guerrier("Conssesao", 50, 5, 0.80)
let Joaquim = new guerrier("Joaquim", 60, 7, 0.55)

Conssesao.Attack(Joaquim);
Joaquim.Attack(Conssesao);

function fight(fighter1, fighter2)
{
    while (fighter1.life > 0 || fighter2.life > 0)
    {
        fighter1.Attack(fighter2);

        if (fighter1.life <= 0)
        {return (fighter1.name);}

        fighter2.Attack(fighter1);


        if (fighter2.life <= 0)
        {return (fighter2.name);}
    }
}
console.log(fight(Conssesao, Joaquim), 'a été défait')