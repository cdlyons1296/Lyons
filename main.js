let fam1= "images/fam1.jpg";
let fam2= "images/fam2.jpg";
let fam3= "images/fam3.jpg";
let fam4= "images/fam4.jpg";
let fam5= "images/fam5.jpg";
let fam6= "images/fam6.jpg";
let fam7= "images/fam7.jpg";
let fam8= "images/fam8.jpg";
let fam9= "images/fam9.jpg";
let fam10= "images/fam10.jpg";
let fam11= "images/fam11.jpg";
let forward= "images/forward.png";
let back= "images/back.png";

let currentImage = 0;

const familyPhotos = [fam1, fam2, fam3, fam4, fam5, fam6, fam7, fam8, fam9, fam10,fam11]
const photoDesc=[
"Meizel, David, my mother and I in Olango Island, Philippines.",
"Meizel and I kayaking in El Nido, Philippines.",
"My grandfather, mother, son and myself, in Carefree, Arizona",
"David and I during the Water Festival in Bangkok, Thailand.",
"David swimming of the coast of Koh Rong Sanloem, Cambodia.",
"Meizel, David and I at Veranda Resort in Kep, Cambodia.",
"Meizel and David in front of Angkor Wat, Siem Reap, Cambodia.",
"Meizel and I with Jean at the Sunrise School in Cambodia",
"My mother and I before a round of golf in Millwood, Virgina",
"Miezel, David and Jean at Veranda Resort in Cambodia.",
"Meizel and Jean eating ice cream at Dairy Queen in Phnom Penh, Cambodia."

]
const{createApp} = Vue

createApp({
    data() {
        return{
        currentImage,
        fampic: familyPhotos[currentImage],
        pictext: photoDesc[currentImage],
        photoDesc,
        familyPhotos,
        forward,
        back
        } 
    },
    methods:{
        changeImage(){
            if(this.currentImage < (familyPhotos.length -1)){
  
            this.currentImage++;
            this.fampic = this.familyPhotos[this.currentImage]
            this.pictext = this.photoDesc[this.currentImage]
            }else{
                this.currentImage = 0;
            this.fampic = this.familyPhotos[currentImage]
            this.pictext = this.photoDesc[this.currentImage]
            
            }
        },
        backImage(){
            if(this.currentImage > 0){
  
            this.currentImage--;
            this.fampic = this.familyPhotos[this.currentImage]
            this.pictext = this.photoDesc[this.currentImage]
            }else{
                this.currentImage = 0;
            this.fampic = this.familyPhotos[currentImage]
            this.pictext = this.photoDesc[this.currentImage]
            
            }
        }
       
    }
    

}).mount('#app')