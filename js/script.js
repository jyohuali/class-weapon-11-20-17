class Weapon {
  constructor(automatic, manufacturer, silencer, caliber) {
    this.bullets = 14;
    this.cycle = true;
    this.weight = 23;
    this.automatic = automatic;
    this.manufacturer = manufacturer;
    this.silencer = silencer;
    this.caliber = caliber;
  }

shot(){
  console.log("bang bang");
  }

  sayHowdy() {
    console.log("Howdy cowboy I am a " + this.manufacturer + " " + this.caliber);
  }
}

function toShoot(weapon1, weapon2) {
   weapon1.sayHowdy();
   weapon2.sayHowdy();

if (weapon1.bullets > weapon2.bullets) {
  console.log(car1.caliber + "wins");
} else if (weapon2.bullets > weapon1.bullets) {
  console.log(weapon2.caliber + "wins");
} else {
  console.log(weapon1.caliber + " and" + weapon2.caliber + "tie");
  }
 }

 var shotgun = new Weapon("yes", "remington", "yankee", 12);
 var pistol =  new Weapon("both", "walther", "gemtech", 9);
 var rifle = new Weapon("no", "smithwesson", "airghost", 24);

 toShoot(shotgun,pistol);
