const input_text = document.querySelector('#input__switch');
const button = document.querySelector('#button__switch');

const div = document.createElement('div');
div.className = ('result__field');

button.addEventListener('click', (e)=>{
    e.preventDefault();

    if(input_text.value != '') {
        let translit = transliterate(input_text.value);
        div.innerHTML = translit;
        document.body.append(div);

        input_text.value = " ";
    } else { alert('field is empty!'); }
});

input_text.addEventListener('mouseover', ()=>{
    div.innerHTML = "";
});

const a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"А","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

function transliterate(word) {
    return word.split('').map(function (char) { 
        return a[char] || char; 
    }).join("");
}

//      ANOTHER ONE WAY     //

// function transliterate(word){
//     var answer = "", a = {};

//     a["Ё"]="YO";a["Й"]="I";a["Ц"]="TS";a["У"]="U";a["К"]="K";a["Е"]="E";a["Н"]="N";a["Г"]="G";a["Ш"]="SH";a["Щ"]="SCH";a["З"]="Z";a["Х"]="H";a["Ъ"]="'";
//     a["ё"]="yo";a["й"]="i";a["ц"]="ts";a["у"]="u";a["к"]="k";a["е"]="e";a["н"]="n";a["г"]="g";a["ш"]="sh";a["щ"]="sch";a["з"]="z";a["х"]="h";a["ъ"]="'";
//     a["Ф"]="F";a["Ы"]="I";a["В"]="V";a["А"]="А";a["П"]="P";a["Р"]="R";a["О"]="O";a["Л"]="L";a["Д"]="D";a["Ж"]="ZH";a["Э"]="E";
//     a["ф"]="f";a["ы"]="i";a["в"]="v";a["а"]="a";a["п"]="p";a["р"]="r";a["о"]="o";a["л"]="l";a["д"]="d";a["ж"]="zh";a["э"]="e";
//     a["Я"]="Ya";a["Ч"]="CH";a["С"]="S";a["М"]="M";a["И"]="I";a["Т"]="T";a["Ь"]="'";a["Б"]="B";a["Ю"]="YU";
//     a["я"]="ya";a["ч"]="ch";a["с"]="s";a["м"]="m";a["и"]="i";a["т"]="t";a["ь"]="'";a["б"]="b";a["ю"]="yu";

//     for (i in word) {
//         if (word.hasOwnProperty(i)) {
//             if (a[word[i]] === undefined) {
//                 answer += word[i];
//             } else {
//                 answer += a[word[i]];
//             }
//         }
//     }
//     return answer;
// }