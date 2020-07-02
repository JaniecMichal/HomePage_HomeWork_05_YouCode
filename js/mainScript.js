{
    
    const Welcome = () => {
        console.log("Witajcie developerzy w Imperium Kodu");
    };

    const toggleShadowColor = () => {

        const content = document.querySelectorAll(".content");
        const footer = document.querySelector(".footer");

        content[0].classList.toggle("newContent");
        content[1].classList.toggle("newContent");
        content[2].classList.toggle("newContent");
        footer.classList.toggle("newFooter");
    };

    const SetDayQuotation = () => {
      
        const quotText = document.querySelector(".SubHeader__quotText");
        if (changeQuotbutton.innerText === "USTAW CYTAT NA DZIŚ") quotText.innerHTML = returnDayQuotation();
        else quotText.innerHTML = backToMainQuotation();
    };

    const returnDayQuotation = () => {
        const today = new Date();
        const day = today.getDay();

        switch (day) {
            case 6:
            case 5:
                return '"Ponieważ więc książę obowiązany jest umieć używać bestii, powinien sobie wybrać lisa i lwa, lew bowiem nie poradzi przeciw sieciom, lis nie poradzi przeciw wilkom. Należy więc być lisem, aby się poznać na sieciach, i lwem, aby odstraszać wilków." - Niccolò Machiavelli';
            case 0:
            case 2:
                return '"Błogosławiony Pan, Opoka moja, On moje ręce zaprawia do walki, moje palce do bitwy." - Ps 144, 1';
            case 1:
            case 3:
                return '"Miałeś kiedyś sen, który wydawał się prawdziwy? A gdybyś nie mógł się z niego obudzić? Jak odróżniłbyś świat snu od realnego?" - Morfeusz, Matrix';
            case 4:
                return '"Jeszcze nigdy tak wielu nie zawdzięczało tak wiele tak nielicznym." - Winston Churchill';
        }
    };

    const backToMainQuotation = () => {
        return `"To, co czynimy za życia, odbija się echem w wieczności." - Maximus Decimus Meridius`;
    };


    const init = () => {
        const changeQuotbutton = document.querySelector(".Buttons__changeQuotation");
        const changeShadowbutton = document.querySelector(".Buttons__changeColorShadow");
        const textButton = changeQuotbutton.innerText

        Welcome();

        changeQuotbutton.addEventListener("click", SetDayQuotation);
        changeShadowbutton.addEventListener("click", toggleShadowColor);
    };

    init();

}








