let a= Math.floor(Math.random()*10)
// let b=+prompt("Men 1 dan 10 gacha bo'lgan bitta son o'yladim, qani sen topa olasanmi")
// if (b===a){
//     alert("qoyilee to'g'ri topdiz")
// }
// else{
//     alert("topolmagan kal kal")
// }
alert("Diqqat siz o'yindasiz, o'yin sharti 1 dan 10 gacha bo'lgan tasodifiy son o'ylayman.Siz topishga harakat qilasiz.Unutmang sizda faqat uchtagina imoniyat mavjud!!!")
for (let i=0;i<3;i++){
    let b=+prompt("Men 1 dan 10 gacha bo'lgan bitta son o'yladim, qani sen topa olasanmi")
    if (b===a){
        alert("Siz yutdingiz!!!")
        break
    }
    else if (b>a){
        alert("siz katta son kiritdingiz")
    }
    else if(b<a){
        alert("siz kichik son kiritdingiz")
    }
}
alert("o'yin tugadi, qayta o'ynash uchun refresh tugmasini bosing")