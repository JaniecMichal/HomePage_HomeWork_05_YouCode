{
    const Welcome = () => {
        console.log("Witajcie developerzy w Imperium Kodu");
    };

    const changeQuot = document.querySelector(".Buttons__changeQuotation");
    const SetDayQuotation = () => {
        const today = new Date();
        const day = today.getDay();
        const quotText = document.querySelector(".SubHeader__quotText");

        if (changeQuot.innerText == "USTAW CYTAT NA DZIŚ") {
            switch (day) {
                case 6:
                case 5:
                    quotText.innerText = '"Ponieważ więc książę obowiązany jest umieć używać bestii, powinien sobie wybrać lisa i lwa, lew bowiem nie poradzi przeciw sieciom, lis nie poradzi przeciw wilkom. Należy więc być lisem, aby się poznać na sieciach, i lwem, aby odstraszać wilków." - Niccolò Machiavelli';
                    changeQuot.innerText = "Powróć do głównego motta strony";
                    break;
                case 0:
                case 2:
                    quotText.innerText = '"Błogosławiony Pan, Opoka moja, On moje ręce zaprawia do walki, moje palce do bitwy." - Ps 144, 1';
                    changeQuot.innerText = "Powróć do głównego motta strony";
                    break;
                case 1:
                case 3:
                    quotText.innerText = '"Miałeś kiedyś sen, który wydawał się prawdziwy? A gdybyś nie mógł się z niego obudzić? Jak odróżniłbyś świat snu od realnego?" - Morfeusz, Matrix';
                    changeQuot.innerText = "Powróć do głównego motta strony";
                    break;
                case 4:
                    quotText.innerText = '"Jeszcze nigdy tak wielu nie zawdzięczało tak wiele tak nielicznym." - Winston Churchill';
                    changeQuot.innerText = "Powróć do głównego motta strony";
                    break;

            }
        } else {
            quotText.innerText = '"To, co czynimy za życia, odbija się echem w wieczności." - Maximus Decimus Meridius';
            changeQuot.innerText = "USTAW CYTAT NA DZIŚ";

        }
    };
    Welcome();
    changeQuot.addEventListener("click", SetDayQuotation);
}






{
    const button = document.querySelector(".Buttons__changeColorShadow");

    const toggleShadowColor = () => {
        const content = document.querySelectorAll(".content");
        const footer = document.querySelector(".footer");

        content[0].classList.toggle("newContent");
        content[1].classList.toggle("newContent");
        content[2].classList.toggle("newContent");
        footer.classList.toggle("newFooter");
    };

    button.addEventListener("click", toggleShadowColor);
}








