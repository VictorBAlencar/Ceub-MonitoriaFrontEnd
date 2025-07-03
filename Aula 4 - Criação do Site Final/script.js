document.addEventListener('DOMContentLoaded', () => {


    const mottoParagraph = document.querySelector('.card p');
    

    const originalMotto = mottoParagraph.textContent;
    const translatedText = " (Ousar é Fazer)";


    mottoParagraph.addEventListener('mouseover', () => {

        mottoParagraph.textContent = originalMotto + translatedText;
    });


    mottoParagraph.addEventListener('mouseout', () => {

        mottoParagraph.textContent = originalMotto;
    });


    const card = document.querySelector('.card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

});